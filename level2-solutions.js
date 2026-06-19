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
    }
  }
};
