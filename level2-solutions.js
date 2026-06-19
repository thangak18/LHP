window.level2Solutions = {
  fetchedAt: "2026-06-19",
  byHref: {
    "/problem/phuongtrinh_diophantine": {
      title: "2. Phương Trình Diophantine",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Đếm nghiệm nguyên dương của a*x + b*y = c bằng cách đưa về nghiệm không âm sau khi trừ trước một a và một b.",
      complexity: "O(log min(a, b))",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <numeric> // Dùng gcd để tính ước chung lớn nhất.
using namespace std; // Dùng trực tiếp cin, cout, vector, gcd mà không cần tiền tố std::.

using int64 = long long; // Đặt bí danh int64 cho long long để code đọc rõ hơn.

int64 extGcd(int64 a, int64 b, int64 &x, int64 &y) { // Hàm Euclid mở rộng: trả gcd(a,b), đồng thời tìm x,y sao cho a*x + b*y = gcd.
    if (b == 0) { // Nếu b bằng 0 thì gcd là a.
        x = 1; // Khi đó a*1 + 0*0 = a.
        y = 0; // Hệ số của b là 0.
        return a; // Trả về gcd.
    } // Kết thúc nhánh dừng.
    int64 x1 = 0, y1 = 0; // Biến nhận nghiệm của bài toán nhỏ hơn.
    int64 g = extGcd(b, a % b, x1, y1); // Gọi đệ quy cho b và a mod b.
    x = y1; // Suy ngược hệ số của a.
    y = x1 - (a / b) * y1; // Suy ngược hệ số của b.
    return g; // Trả gcd lên trên.
} // Kết thúc hàm extGcd.

int64 floorDiv(int64 a, int64 b) { // Chia lấy sàn cho số nguyên, dùng được cả khi a âm.
    if (b < 0) a = -a, b = -b; // Chuẩn hóa mẫu dương để công thức thống nhất.
    if (a >= 0) return a / b; // Với a không âm, phép chia C++ đã là floor.
    return -((-a + b - 1) / b); // Với a âm, đổi về công thức làm tròn xuống.
} // Kết thúc floorDiv.

int64 countPositiveSolutions(int64 a, int64 b, int64 c) { // Đếm số cặp x,y dương thỏa a*x + b*y = c.
    c -= a + b; // Đặt x = x' + 1, y = y' + 1 để x',y' không âm.
    if (c < 0) return 0; // Nếu sau khi trừ tối thiểu mà còn âm thì không có nghiệm dương.
    int64 g = gcd(a, b); // Tính gcd của a và b.
    if (c % g != 0) return 0; // Phương trình a*x' + b*y' = c có nghiệm khi c chia hết cho gcd.
    a /= g; // Chia cả phương trình cho gcd để a và b nguyên tố cùng nhau.
    b /= g; // Chia b cho gcd.
    c /= g; // Chia c cho gcd.

    int64 inv = 0, temp = 0; // inv sẽ là nghịch đảo của a theo modulo b.
    extGcd(a, b, inv, temp); // Vì gcd(a,b)=1 nên a*inv + b*temp = 1.
    inv = (inv % b + b) % b; // Đưa nghịch đảo về đoạn [0, b-1].

    int64 firstX = (__int128)(c % b) * inv % b; // Nghiệm x' nhỏ nhất không âm theo modulo b.
    int64 maxX = c / a; // Vì y' không âm nên a*x' không được vượt quá c.
    if (firstX > maxX) return 0; // Nếu nghiệm đầu tiên đã vượt giới hạn thì không có nghiệm.
    return (maxX - firstX) / b + 1; // Các nghiệm cách nhau b, đếm số nghiệm trong [firstX, maxX].
} // Kết thúc hàm đếm nghiệm.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tắt đồng bộ C/C++ để nhập xuất nhanh hơn.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    int64 a = 0, b = 0, c = 0; // Khai báo ba hệ số của phương trình.
    cin >> a >> b >> c; // Đọc a, b, c từ input.
    cout << countPositiveSolutions(a, b, c) << '\n'; // In số nghiệm nguyên dương.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/jump": {
      title: "2. JUMP",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Mỗi cột chỉ nhảy tới cột cao hơn gần nhất bên phải. Ta tìm cột tiếp theo bằng stack đơn điệu, rồi tính số bước nhảy bằng DP từ phải sang trái.",
      complexity: "O(n + q)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <vector> // Dùng vector để lưu chiều cao, cột nhảy tiếp theo và đáp án.
using namespace std; // Cho phép dùng cin, cout, vector trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần đọc.

    int n = 0, q = 0; // n là số cột, q là số câu hỏi.
    cin >> n >> q; // Đọc n và q.
    vector<long long> h(n + 1); // h[i] là chiều cao cột i, dùng chỉ số 1-based.
    for (int i = 1; i <= n; ++i) cin >> h[i]; // Đọc chiều cao của từng cột.

    vector<int> nextGreater(n + 1, 0); // nextGreater[i] là cột cao hơn gần nhất bên phải của i, bằng 0 nếu không có.
    vector<int> jumps(n + 1, 0); // jumps[i] là số bước nhảy tối đa khi bắt đầu ở cột i.
    vector<int> st; // Stack lưu chỉ số các cột theo chiều cao giảm dần khi nhìn từ phải sang trái.

    for (int i = n; i >= 1; --i) { // Duyệt từ phải sang trái để biết các cột nằm bên phải i.
        while (!st.empty() && h[st.back()] <= h[i]) st.pop_back(); // Bỏ cột không cao hơn h[i], vì không thể là nơi nhảy tới.
        if (!st.empty()) nextGreater[i] = st.back(); // Phần tử còn lại gần đỉnh stack là cột cao hơn gần nhất bên phải.
        if (nextGreater[i] != 0) jumps[i] = 1 + jumps[nextGreater[i]]; // Nếu nhảy được, cộng 1 bước và nối tiếp đáp án của cột đó.
        st.push_back(i); // Đưa cột i vào stack để phục vụ các cột bên trái.
    } // Kết thúc tiền xử lý O(n).

    while (q--) { // Trả lời từng câu hỏi.
        int x = 0; // x là cột xuất phát được hỏi.
        cin >> x; // Đọc x.
        cout << jumps[x] << '\n'; // In số bước nhảy đã tiền xử lý.
    } // Kết thúc xử lý truy vấn.

    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/stackbs": {
      title: "2. STACKBS",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Mô phỏng đúng ba loại truy vấn bằng vector như một stack: push cuối, pop cuối, và in phần tử cuối.",
      complexity: "O(q)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <vector> // Dùng vector để mô phỏng stack.
using namespace std; // Cho phép dùng cin, cout, vector trực tiếp.

int main() { // Hàm chính.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Tách cin khỏi cout để chạy nhanh hơn.

    int q = 0; // q là số lượng truy vấn.
    cin >> q; // Đọc q.
    vector<long long> st; // Dùng vector làm stack, phần tử cuối là đỉnh stack.

    while (q--) { // Xử lý lần lượt từng truy vấn.
        int type = 0; // type lưu loại truy vấn.
        cin >> type; // Đọc loại truy vấn.
        if (type == 1) { // Truy vấn dạng 1 u: thêm u vào cuối dãy.
            long long u = 0; // Biến lưu giá trị cần thêm.
            cin >> u; // Đọc u.
            st.push_back(u); // Đẩy u lên đỉnh stack.
        } else if (type == 2) { // Truy vấn dạng 2: xóa phần tử cuối nếu có.
            if (!st.empty()) st.pop_back(); // Chỉ pop khi stack không rỗng.
        } else if (type == 3) { // Truy vấn dạng 3: in phần tử cuối.
            if (st.empty()) cout << -1 << '\n'; // Nếu rỗng thì in -1 theo đề.
            else cout << st.back() << '\n'; // Nếu không rỗng thì in đỉnh stack.
        } // Kết thúc xử lý từng loại truy vấn.
    } // Kết thúc vòng lặp truy vấn.

    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/chinese_modulo": {
      title: "3. Chinese Modulo",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Ghép từng phương trình đồng dư bằng CRT tổng quát, giữ nghiệm nhỏ nhất không âm sau mỗi lần ghép.",
      complexity: "O(n log M)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
using namespace std; // Dùng namespace std để code ngắn hơn.

using int64 = long long; // Bí danh cho long long.

int64 extGcd(int64 a, int64 b, int64 &x, int64 &y) { // Tìm x,y sao cho a*x + b*y = gcd(a,b).
    if (b == 0) { // Điều kiện dừng của Euclid.
        x = 1; // a*1 tạo ra gcd khi b = 0.
        y = 0; // Hệ số của b là 0.
        return a; // Trả gcd.
    } // Kết thúc nhánh dừng.
    int64 x1 = 0, y1 = 0; // Nghiệm của bài toán con.
    int64 g = extGcd(b, a % b, x1, y1); // Đệ quy với b và phần dư.
    x = y1; // Suy ngược hệ số của a.
    y = x1 - (a / b) * y1; // Suy ngược hệ số của b.
    return g; // Trả gcd.
} // Kết thúc extGcd.

int64 normalizeMod(__int128 value, int64 mod) { // Đưa value về đoạn [0, mod-1].
    int64 result = (int64)(value % mod); // Lấy phần dư theo C++.
    if (result < 0) result += mod; // Nếu âm thì cộng mod để thành không âm.
    return result; // Trả phần dư chuẩn hóa.
} // Kết thúc normalizeMod.

bool mergeCongruence(int64 &r1, int64 &m1, int64 r2, int64 m2) { // Ghép x = r1 mod m1 với x = r2 mod m2.
    int64 p = 0, q = 0; // Hệ số Bezout cho m1 và m2.
    int64 g = extGcd(m1, m2, p, q); // Tính gcd và hệ số Bezout.
    int64 diff = r2 - r1; // Hiệu hai số dư cần bù.
    if (diff % g != 0) return false; // Nếu hiệu không chia hết gcd thì vô nghiệm.

    int64 reducedM2 = m2 / g; // Modulo sau khi chia gcd.
    __int128 multiplier = (__int128)(diff / g) * p; // Hệ số cần nhân vào m1.
    int64 k = normalizeMod(multiplier, reducedM2); // Lấy k nhỏ nhất theo modulo reducedM2.
    __int128 newR = (__int128)r1 + (__int128)m1 * k; // Nghiệm mới của hệ đã ghép.
    __int128 lcm = (__int128)m1 / g * m2; // Modulo mới là lcm(m1,m2).
    r1 = normalizeMod(newR, (int64)lcm); // Chuẩn hóa nghiệm về đoạn [0,lcm-1].
    m1 = (int64)lcm; // Cập nhật modulo mới.
    return true; // Ghép thành công.
} // Kết thúc mergeCongruence.

int main() { // Hàm chính.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không buộc cout flush trước cin.

    int n = 0; // Số phương trình đồng dư.
    cin >> n; // Đọc n.
    int64 answer = 0; // Nghiệm hiện tại, ban đầu x = 0 mod 1.
    int64 modulo = 1; // Modulo hiện tại.

    for (int i = 0; i < n; ++i) { // Duyệt từng điều kiện đồng dư.
        int64 r = 0, m = 0; // r là số dư, m là modulo.
        cin >> r >> m; // Đọc điều kiện x mod m = r.
        r = normalizeMod(r, m); // Chuẩn hóa số dư.
        if (!mergeCongruence(answer, modulo, r, m)) { // Ghép điều kiện mới vào hệ hiện tại.
            cout << -1 << '\n'; // Nếu vô nghiệm thì in -1.
            return 0; // Dừng chương trình.
        } // Kết thúc kiểm tra ghép.
    } // Kết thúc vòng lặp.

    cout << answer << '\n'; // In nghiệm nhỏ nhất không âm.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/salanchokhach": {
      title: "3. SALANCHOKHACH",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Quét các bến theo thứ tự. Khi số khách trên sà lan vượt L, bỏ bớt nhóm có bến xuống xa nhất vì họ chiếm chỗ lâu nhất.",
      complexity: "O((M + N) log N)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <vector> // Dùng vector để gom các nhóm khách theo bến lên.
#include <map> // Dùng map để lấy nhóm đang đi có bến xuống xa nhất.
using namespace std; // Cho phép dùng cin, cout, vector, map trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    int m = 0, n = 0; // m là số nhóm khách, n là số bến.
    long long limit = 0; // limit là sức chứa tối đa của sà lan.
    cin >> m >> n >> limit; // Đọc m, n, limit theo đề.

    vector<vector<pair<int, long long>>> start(n + 1); // start[a] lưu các nhóm lên tại bến a dưới dạng (bến xuống, số khách).
    for (int i = 0; i < m; ++i) { // Đọc từng nhóm khách.
        int a = 0, b = 0; // a là bến lên, b là bến xuống.
        long long c = 0; // c là số người trong nhóm.
        cin >> a >> b >> c; // Đọc thông tin nhóm khách.
        start[a].push_back({b, c}); // Đưa nhóm này vào danh sách khách chờ ở bến a.
    } // Kết thúc đọc dữ liệu.

    map<int, long long> active; // active[b] là số khách đã nhận đang đi tới bến b.
    long long onboard = 0; // onboard là số khách hiện đang ở trên sà lan.
    long long served = 0; // served là tổng số khách được nhận phục vụ.

    for (int station = 1; station <= n; ++station) { // Quét từng bến từ thượng nguồn tới hạ lưu.
        auto drop = active.find(station); // Tìm số khách xuống tại bến hiện tại.
        if (drop != active.end()) { // Nếu có khách xuống ở bến này.
            onboard -= drop->second; // Giảm số khách đang trên sà lan.
            active.erase(drop); // Xóa nhóm đã xuống khỏi tập khách đang đi.
        } // Kết thúc xử lý khách xuống.

        for (auto [to, count] : start[station]) { // Xét các nhóm khách lên tại bến hiện tại.
            active[to] += count; // Tạm nhận nhóm này lên sà lan.
            onboard += count; // Tăng số khách đang trên sà lan.
            served += count; // Tạm cộng nhóm này vào tổng khách phục vụ.
        } // Kết thúc nhận khách tại bến.

        while (onboard > limit) { // Nếu sà lan vượt quá sức chứa.
            auto farthest = prev(active.end()); // Lấy nhóm có bến xuống xa nhất.
            long long remove = min(farthest->second, onboard - limit); // Chỉ bỏ vừa đủ số khách để không quá tải.
            farthest->second -= remove; // Giảm số khách được giữ lại của nhóm xa nhất.
            onboard -= remove; // Cập nhật số khách còn trên sà lan.
            served -= remove; // Những khách bị bỏ không được tính là phục vụ.
            if (farthest->second == 0) active.erase(farthest); // Nếu nhóm xa nhất bị bỏ hết thì xóa khỏi map.
        } // Kết thúc sửa quá tải.
    } // Kết thúc quét các bến.

    cout << served << '\n'; // In số khách lớn nhất có thể phục vụ.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/seating": {
      title: "2. Tìm chỗ ngồi - Seating",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Đếm toàn bộ cặp ghế kề nhau theo hàng, rồi trừ các cặp có ít nhất một ghế đã bị chiếm.",
      complexity: "O(k log k)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <set> // Dùng set để lưu các cặp ghế kề nhau bị hỏng và tránh đếm trùng.
using namespace std; // Cho phép dùng cin, cout, set trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    long long n = 0, m = 0; // n là số hàng, m là số ghế mỗi hàng.
    int k = 0; // k là số ghế đã có người ngồi.
    cin >> n >> m >> k; // Đọc n, m, k.

    long long total = n * (m - 1); // Mỗi hàng có m-1 cặp ghế kề nhau, thứ tự hai người không quan trọng.
    set<pair<long long, long long>> blocked; // Mỗi phần tử là (hàng, ghế trái) của một cặp kề nhau không dùng được.

    for (int i = 0; i < k; ++i) { // Duyệt từng ghế đã bị chiếm.
        long long row = 0, col = 0; // row là hàng, col là vị trí ghế trong hàng.
        cin >> row >> col; // Đọc ghế đã có người ngồi.
        if (col > 1) blocked.insert({row, col - 1}); // Cặp (col-1, col) bị hỏng nếu col không phải ghế đầu.
        if (col < m) blocked.insert({row, col}); // Cặp (col, col+1) bị hỏng nếu col không phải ghế cuối.
    } // Kết thúc đọc ghế đã chiếm.

    cout << total - (long long)blocked.size() << '\n'; // Trừ số cặp bị hỏng để ra số cách còn lại.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/ts10_cau3": {
      title: "2. Thống kê - ts10 - Chuyên Vĩnh Phúc - 2024",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Với mỗi dãy, đếm tần suất từng giá trị, rồi tạo suffix theo tần suất để trả lời nhanh số giá trị xuất hiện ít nhất k lần.",
      complexity: "O(n + Q + V)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <vector> // Dùng vector để lưu tần suất và mảng trả lời.
using namespace std; // Cho phép dùng cin, cout, vector trực tiếp.

vector<int> buildAnswers(int n) { // Đọc một dãy độ dài n và trả mảng ans[k] = số giá trị xuất hiện ít nhất k lần.
    const int SHIFT = 100000; // Dịch giá trị âm lên chỉ số không âm.
    const int SIZE = 200001; // Giá trị nằm trong đoạn [-100000, 100000].
    vector<int> freq(SIZE, 0); // freq[id] là số lần xuất hiện của giá trị id - SHIFT.
    for (int i = 0; i < n; ++i) { // Đọc n phần tử của dãy.
        int x = 0; // x là giá trị hiện tại.
        cin >> x; // Đọc x.
        ++freq[x + SHIFT]; // Tăng tần suất của x.
    } // Kết thúc đọc dãy.

    vector<int> bucket(n + 2, 0); // bucket[f] là số giá trị xuất hiện đúng f lần.
    for (int f : freq) { // Duyệt tần suất của mọi giá trị có thể.
        if (f > 0) ++bucket[f]; // Chỉ tính các giá trị thật sự xuất hiện.
    } // Kết thúc gom theo tần suất.

    vector<int> ans(n + 2, 0); // ans[k] là số giá trị có tần suất >= k.
    for (int k = n; k >= 1; --k) { // Tính suffix từ tần suất lớn xuống nhỏ.
        ans[k] = ans[k + 1] + bucket[k]; // Giá trị xuất hiện >= k gồm >= k+1 và đúng k.
    } // Kết thúc dựng mảng trả lời.
    return ans; // Trả về mảng đáp án cho một dãy.
} // Kết thúc buildAnswers.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    int n = 0, q = 0; // n là độ dài hai dãy, q là số truy vấn.
    cin >> n >> q; // Đọc n và q.
    vector<int> ansA = buildAnswers(n); // Đọc dãy A và tiền xử lý đáp án cho A.
    vector<int> ansB = buildAnswers(n); // Đọc dãy B và tiền xử lý đáp án cho B.

    while (q--) { // Trả lời từng truy vấn.
        int k = 0; // k là ngưỡng tần suất cần hỏi.
        cin >> k; // Đọc k.
        cout << ansA[k] << ' ' << ansB[k] << '\n'; // In số giá trị xuất hiện ít nhất k lần trong A và B.
    } // Kết thúc xử lý truy vấn.

    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/levelup": {
      title: "2. Lên đai - Levelup",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Tính số lượt lên đai từ cao xuống thấp: vàng lên tím, xanh lên vàng, trắng lên xanh. Người mới chỉ ảnh hưởng đai trắng nên không cần in.",
      complexity: "O(1)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
using namespace std; // Cho phép dùng cin và cout trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    long long whiteBefore = 0, whiteAfter = 0; // Số võ sinh đai trắng trước và sau cuộc thi.
    long long greenBefore = 0, greenAfter = 0; // Số võ sinh đai xanh trước và sau cuộc thi.
    long long yellowBefore = 0, yellowAfter = 0; // Số võ sinh đai vàng trước và sau cuộc thi.
    long long purpleBefore = 0, purpleAfter = 0; // Số võ sinh đai tím trước và sau cuộc thi.

    cin >> whiteBefore >> whiteAfter; // Đọc thống kê đai trắng.
    cin >> greenBefore >> greenAfter; // Đọc thống kê đai xanh.
    cin >> yellowBefore >> yellowAfter; // Đọc thống kê đai vàng.
    cin >> purpleBefore >> purpleAfter; // Đọc thống kê đai tím.

    long long yellowToPurple = purpleAfter - purpleBefore; // Đai tím chỉ tăng do người đai vàng lên tím.
    long long greenToYellow = yellowAfter - yellowBefore + yellowToPurple; // Bù lại số vàng đã lên tím để biết xanh lên vàng.
    long long whiteToGreen = greenAfter - greenBefore + greenToYellow; // Bù lại số xanh đã lên vàng để biết trắng lên xanh.

    cout << whiteToGreen << '\n'; // In số lượt từ trắng lên xanh.
    cout << greenToYellow << '\n'; // In số lượt từ xanh lên vàng.
    cout << yellowToPurple << '\n'; // In số lượt từ vàng lên tím.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/selbest": {
      title: "2. Lựa chọn - selbest",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Bài toán giao của ba tập khi chỉ biết kích thước từng tập. Giao lớn nhất là min(A,B,C), giao nhỏ nhất là max(0,A+B+C-2N).",
      complexity: "O(1)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <algorithm> // Dùng min để lấy giá trị nhỏ nhất.
using namespace std; // Cho phép dùng cin, cout, min trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    int type = 0; // type = 1 hỏi ít nhất, type = 2 hỏi nhiều nhất.
    long long n = 0, a = 0, b = 0, c = 0; // n là tổng học viên; a,b,c là số biết từng ngôn ngữ.
    cin >> type; // Đọc loại yêu cầu.
    cin >> n >> a >> b >> c; // Đọc n, a, b, c.

    long long minimumAll = max(0LL, a + b + c - 2 * n); // Giao ba tập nhỏ nhất theo nguyên lý bù trừ cực hạn.
    long long maximumAll = min(a, min(b, c)); // Giao ba tập lớn nhất không vượt quá tập nhỏ nhất.

    if (type == 1) cout << minimumAll << '\n'; // Nếu hỏi tối thiểu thì in giao nhỏ nhất.
    else cout << maximumAll << '\n'; // Nếu hỏi tối đa thì in giao lớn nhất.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/duprime": {
      title: "2. Nguyên tố bội - Duprime",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Sàng nguyên tố tới 2*5e6+1, sau đó đếm các số p sao cho p và 2p+1 đều nguyên tố cho tới vị trí K.",
      complexity: "O(L log log L)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <vector> // Dùng vector để lưu bảng nguyên tố.
using namespace std; // Cho phép dùng cin, cout, vector trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    int k = 0; // k là thứ tự cặp nguyên tố bội hai cần tìm.
    cin >> k; // Đọc k.

    const int LIMIT_P = 5000000; // Giới hạn đủ để chứa ít nhất 30000 số p hợp lệ.
    const int LIMIT = 2 * LIMIT_P + 1; // Cần kiểm tra cả số 2p + 1.
    vector<bool> isPrime(LIMIT + 1, true); // isPrime[x] cho biết x có đang được coi là nguyên tố hay không.
    isPrime[0] = false; // 0 không phải số nguyên tố.
    isPrime[1] = false; // 1 không phải số nguyên tố.

    for (int i = 2; 1LL * i * i <= LIMIT; ++i) { // Sàng Eratosthenes tới căn LIMIT.
        if (!isPrime[i]) continue; // Bỏ qua số đã bị đánh dấu hợp số.
        for (long long j = 1LL * i * i; j <= LIMIT; j += i) { // Đánh dấu các bội của i.
            isPrime[(int)j] = false; // Bội lớn hơn i là hợp số.
        } // Kết thúc đánh dấu bội của i.
    } // Kết thúc sàng nguyên tố.

    int count = 0; // count là số cặp hợp lệ đã gặp.
    for (int p = 2; p <= LIMIT_P; ++p) { // Duyệt p tăng dần đúng thứ tự đề yêu cầu.
        if (isPrime[p] && isPrime[2 * p + 1]) { // Cặp hợp lệ khi p và 2p+1 đều nguyên tố.
            ++count; // Tăng thứ tự cặp hợp lệ.
            if (count == k) { // Nếu vừa tới cặp thứ k.
                cout << p << '\n'; // In p của cặp thứ k.
                return 0; // Dừng chương trình.
            } // Kết thúc kiểm tra thứ tự.
        } // Kết thúc kiểm tra cặp hợp lệ.
    } // Kết thúc duyệt p.

    return 0; // Dữ liệu đề đảm bảo có đáp án trong giới hạn đã chọn.
} // Kết thúc hàm main.`
    },
    "/problem/remnum": {
      title: "2. Xóa số - REMNUM",
      status: "sample-checked",
      checkedSamples: [1],
      idea: "Với mỗi giá trị xuất hiện trong cả hai dãy, cần xóa hết giá trị đó ở một trong hai dãy. Chi phí nhỏ nhất là min(cntA, cntB).",
      complexity: "O((m+n) log (m+n))",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <map> // Dùng map để đếm tần suất theo giá trị.
using namespace std; // Cho phép dùng cin, cout, map trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    int m = 0, n = 0; // m là độ dài dãy A, n là độ dài dãy B.
    cin >> m >> n; // Đọc m và n.

    map<long long, int> cntA; // cntA[x] là số lần x xuất hiện trong A.
    map<long long, int> cntB; // cntB[x] là số lần x xuất hiện trong B.

    for (int i = 0; i < m; ++i) { // Đọc dãy A.
        long long x = 0; // x là phần tử hiện tại.
        cin >> x; // Đọc x.
        ++cntA[x]; // Tăng tần suất của x trong A.
    } // Kết thúc đọc A.

    for (int i = 0; i < n; ++i) { // Đọc dãy B.
        long long x = 0; // x là phần tử hiện tại.
        cin >> x; // Đọc x.
        ++cntB[x]; // Tăng tần suất của x trong B.
    } // Kết thúc đọc B.

    long long answer = 0; // answer là số phần tử ít nhất phải xóa.
    for (auto [value, countA] : cntA) { // Duyệt từng giá trị xuất hiện trong A.
        auto it = cntB.find(value); // Tìm cùng giá trị trong B.
        if (it != cntB.end()) { // Nếu value xuất hiện ở cả hai dãy.
            answer += min(countA, it->second); // Xóa hết value ở phía có ít bản sao hơn.
        } // Kết thúc xử lý giá trị chung.
    } // Kết thúc duyệt các giá trị.

    cout << answer << '\n'; // In số phần tử tối thiểu cần xóa.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/mu_nhanh_fastpow": {
      title: "2. Fast Pow",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Tính a^b mod m bằng lũy thừa nhị phân, mỗi bước xét một bit của b.",
      complexity: "O(log b)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
using namespace std; // Dùng tên trong std trực tiếp.

using int64 = long long; // Đặt bí danh cho long long.

int64 multiplyMod(int64 a, int64 b, int64 mod) { // Nhân hai số theo modulo, chống tràn bằng __int128.
    return (int64)((__int128)a * b % mod); // Ép sang __int128 trước khi nhân rồi lấy mod.
} // Kết thúc multiplyMod.

int64 powerMod(int64 a, int64 b, int64 mod) { // Tính a^b mod mod bằng lũy thừa nhanh.
    int64 result = 1 % mod; // Kết quả ban đầu là 1, xử lý cả trường hợp mod = 1.
    a %= mod; // Rút gọn cơ số trước khi nhân.
    while (b > 0) { // Lặp đến khi không còn bit nào của b.
        if (b & 1) result = multiplyMod(result, a, mod); // Nếu bit cuối của b là 1 thì nhân kết quả với a.
        a = multiplyMod(a, a, mod); // Bình phương cơ số cho bit kế tiếp.
        b >>= 1; // Bỏ bit cuối vừa xử lý.
    } // Kết thúc vòng lặp.
    return result; // Trả a^b mod mod.
} // Kết thúc powerMod.

int main() { // Hàm chính.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không flush cout trước cin.

    int64 a = 0, b = 0, mod = 0; // Khai báo cơ số, số mũ và modulo.
    cin >> a >> b >> mod; // Đọc ba giá trị.
    cout << powerMod(a, b, mod) << '\n'; // In kết quả a^b mod mod.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/phan_so_gan_nhat_nearestf": {
      title: "2.Phân số gần nhất - NEARESTF",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Duyệt mọi mẫu số từ 1 đến n, với mỗi mẫu số chọn tử số gần x * mẫu số nhất rồi so sánh sai số để lấy phân số gần x nhất.",
      complexity: "O(n)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <cmath> // Dùng roundl và fabsl để làm việc với số thực.
#include <numeric> // Dùng gcd để rút gọn phân số.
using namespace std; // Cho phép dùng cin, cout, gcd trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    long double x = 0; // x là số thực cần xấp xỉ bằng phân số.
    int n = 0; // n là mẫu số lớn nhất được phép thử.
    cin >> x >> n; // Đọc x và n từ input.

    long double bestDiff = 1e100L; // bestDiff lưu sai số nhỏ nhất hiện tại.
    long long bestP = 0; // bestP là tử số tốt nhất.
    long long bestQ = 1; // bestQ là mẫu số tốt nhất.

    for (int q = 1; q <= n; ++q) { // Thử từng mẫu số q từ 1 đến n.
        long long center = llround(x * q); // Tử số gần x*q nhất thường cho phân số gần x nhất với mẫu q.
        for (long long p = center - 1; p <= center + 1; ++p) { // Thử thêm hai lân cận để tránh lỗi làm tròn số thực.
            if (p < 0) continue; // Bỏ tử số âm vì phân số cần không âm.
            long double value = (long double)p / q; // Tính giá trị phân số p/q.
            long double diff = fabsl(value - x); // Tính sai số tuyệt đối so với x.
            bool better = diff + 1e-18L < bestDiff; // Tốt hơn nếu sai số nhỏ hơn rõ ràng.
            if (!better && fabsl(diff - bestDiff) <= 1e-18L) { // Nếu sai số bằng nhau gần như tuyệt đối.
                better = q < bestQ || (q == bestQ && p < bestP); // Ưu tiên mẫu số nhỏ hơn, rồi tử số nhỏ hơn.
            } // Kết thúc xử lý hòa.
            if (better) { // Nếu phân số hiện tại tốt hơn đáp án cũ.
                bestDiff = diff; // Cập nhật sai số tốt nhất.
                bestP = p; // Cập nhật tử số tốt nhất.
                bestQ = q; // Cập nhật mẫu số tốt nhất.
            } // Kết thúc cập nhật đáp án.
        } // Kết thúc thử các tử số quanh x*q.
    } // Kết thúc duyệt mẫu số.

    long long g = gcd(bestP, bestQ); // Tính gcd để rút gọn phân số.
    cout << bestP / g << ' ' << bestQ / g << '\n'; // In phân số đã rút gọn.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/bai2_ts10_chuyentranphu_haiphong": {
      title: "2. BAI2 - TS10 - Chuyên Trần Phú - Hải Phòng - 25-26",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Biến điều kiện 'một nucleotide xuất hiện floor(len/2)+1 lần' thành tổng đoạn bằng 1 hoặc 2 sau khi gán nucleotide đang xét là +1 và ba loại còn lại là -1.",
      complexity: "O(4n)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <string> // Dùng string để lưu chuỗi gene.
#include <vector> // Dùng vector để lưu vị trí xuất hiện đầu tiên của từng prefix sum.
using namespace std; // Cho phép dùng cin, cout, string, vector trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    int n = 0; // n là độ dài chuỗi nucleotide.
    string s; // s là chuỗi gene gồm các ký tự A, U, G, C.
    cin >> n >> s; // Đọc n và chuỗi s.

    string alphabet = "AUGC"; // Bốn loại nucleotide cần lần lượt xét làm loại xuất hiện trội.
    int answer = 0; // answer là độ dài lớn nhất tìm được.

    for (char target : alphabet) { // Thử từng nucleotide làm loại có số lần xuất hiện đặc biệt.
        const int offset = n + 5; // offset để đổi prefix sum âm thành chỉ số không âm.
        vector<int> first(2 * n + 11, -1); // first[v] lưu vị trí đầu tiên có prefix sum v - offset.
        int prefix = 0; // prefix là tổng +1/-1 từ đầu chuỗi tới vị trí đang xét.
        first[offset] = 0; // Prefix trước khi đọc ký tự nào bằng 0 tại vị trí 0.

        for (int i = 1; i <= n; ++i) { // Duyệt từng vị trí kết thúc đoạn.
            if (s[i - 1] == target) ++prefix; // Gặp target thì cộng 1.
            else --prefix; // Gặp nucleotide khác target thì trừ 1.

            int need1 = prefix - 1 + offset; // Muốn tổng đoạn bằng 1 thì prefix đầu đoạn phải là prefix - 1.
            int need2 = prefix - 2 + offset; // Muốn tổng đoạn bằng 2 thì prefix đầu đoạn phải là prefix - 2.

            if (0 <= need1 && need1 < (int)first.size() && first[need1] != -1) { // Nếu từng có prefix cần cho tổng 1.
                answer = max(answer, i - first[need1]); // Cập nhật độ dài đoạn hợp lệ.
            } // Kết thúc kiểm tra tổng 1.
            if (0 <= need2 && need2 < (int)first.size() && first[need2] != -1) { // Nếu từng có prefix cần cho tổng 2.
                answer = max(answer, i - first[need2]); // Cập nhật độ dài đoạn hợp lệ.
            } // Kết thúc kiểm tra tổng 2.

            int id = prefix + offset; // Đổi prefix hiện tại thành chỉ số trong mảng first.
            if (first[id] == -1) first[id] = i; // Chỉ lưu vị trí sớm nhất để đoạn sau dài nhất.
        } // Kết thúc duyệt chuỗi với target hiện tại.
    } // Kết thúc thử bốn nucleotide.

    cout << answer << '\n'; // In độ dài trình tự nucleotide đặc biệt dài nhất.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/dosau": {
      title: "2. DOSAU",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Duyệt chuỗi từ trái sang phải, tăng độ sâu khi gặp '(' và giảm khi gặp ')'. Nếu có lúc âm hoặc cuối cùng chưa về 0 thì ngoặc không cân bằng.",
      complexity: "O(n)",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <string> // Dùng string để lưu chuỗi ký tự.
using namespace std; // Cho phép dùng cin, cout, string trực tiếp.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    string s; // s là chuỗi gồm chữ thường, dấu '(' và dấu ')'.
    cin >> s; // Đọc chuỗi từ input.

    int depth = 0; // depth là số dấu '(' đang mở nhưng chưa được đóng.
    int best = 0; // best là độ sâu lớn nhất từng đạt được.
    bool valid = true; // valid cho biết chuỗi ngoặc có đang cân bằng hay không.

    for (char c : s) { // Duyệt từng ký tự trong chuỗi.
        if (c == '(') { // Nếu gặp dấu mở ngoặc.
            ++depth; // Tăng số ngoặc đang mở.
            if (depth > best) best = depth; // Cập nhật độ sâu lớn nhất.
        } else if (c == ')') { // Nếu gặp dấu đóng ngoặc.
            --depth; // Đóng một ngoặc đang mở.
            if (depth < 0) valid = false; // Nếu âm nghĩa là có dấu ')' không có '(' tương ứng.
        } // Ký tự chữ thường không làm thay đổi độ sâu.
    } // Kết thúc duyệt chuỗi.

    if (depth != 0) valid = false; // Nếu còn ngoặc mở chưa đóng thì chuỗi không cân bằng.
    cout << (valid ? best : -1) << '\n'; // In độ sâu lớn nhất nếu hợp lệ, ngược lại in -1.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    },
    "/problem/supperprime": {
      title: "2. Số siêu nguyên Tố",
      status: "sample-checked",
      checkedSamples: [1, 2],
      idea: "Kiểm tra số ban đầu và mọi hậu tố sau khi bỏ dần chữ số bên trái. Nếu tất cả các số còn lại đều nguyên tố thì in YES.",
      complexity: "O(d * sqrt(n)) với d là số chữ số",
      code: String.raw`#include <iostream> // Dùng cin và cout để nhập xuất.
#include <string> // Dùng string để xử lý từng hậu tố chữ số.
using namespace std; // Cho phép dùng cin, cout, string trực tiếp.

bool isPrime(long long x) { // Hàm kiểm tra x có phải số nguyên tố hay không.
    if (x < 2) return false; // Số nhỏ hơn 2 không phải số nguyên tố.
    if (x % 2 == 0) return x == 2; // Số chẵn chỉ nguyên tố khi bằng 2.
    for (long long d = 3; d * d <= x; d += 2) { // Thử các ước lẻ từ 3 đến căn bậc hai của x.
        if (x % d == 0) return false; // Nếu chia hết cho d thì x là hợp số.
    } // Kết thúc vòng thử ước.
    return true; // Không tìm thấy ước nên x là số nguyên tố.
} // Kết thúc hàm isPrime.

int main() { // Hàm chính của chương trình.
    ios::sync_with_stdio(false); // Tăng tốc nhập xuất.
    cin.tie(nullptr); // Không tự flush cout trước mỗi lần cin.

    string s; // s lưu số cần kiểm tra dưới dạng chuỗi.
    cin >> s; // Đọc số từ input.

    bool ok = true; // ok cho biết mọi hậu tố đã xét có nguyên tố hay không.
    for (int start = 0; start < (int)s.size(); ++start) { // Bỏ dần start chữ số bên trái để lấy từng hậu tố.
        long long value = 0; // value là giá trị số của hậu tố hiện tại.
        for (int i = start; i < (int)s.size(); ++i) { // Duyệt các chữ số từ start đến cuối chuỗi.
            value = value * 10 + (s[i] - '0'); // Ghép chữ số mới vào value.
        } // Kết thúc dựng hậu tố.
        if (!isPrime(value)) ok = false; // Nếu hậu tố không nguyên tố thì số không phải siêu nguyên tố.
    } // Kết thúc kiểm tra mọi hậu tố.

    cout << (ok ? "YES" : "NO") << '\n'; // In kết luận theo yêu cầu đề.
    return 0; // Kết thúc chương trình.
} // Kết thúc hàm main.`
    }
  }
};
