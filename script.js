const levels = [
  {
    level: 0,
    id: "level-0",
    title: "Level 0 - Làm quen với lập trình",
    subtitle: "Nhập xuất, kiểu dữ liệu, điều kiện, vòng lặp, mảng, xâu và hàm cơ bản.",
    topics: [
      {
        title: "Luyện tập tổng hợp",
        definition: "Nhóm bài tổng hợp giúp nối các kỹ năng nhỏ thành một quy trình giải bài hoàn chỉnh: đọc đề, xác định input/output, chọn biến, viết thuật toán, kiểm thử.",
        theory: [
          "Ở Level 0, mục tiêu quan trọng nhất là biến đề bài thành các bước tuần tự rõ ràng.",
          "Luôn xác định miền giá trị của dữ liệu để chọn kiểu phù hợp: int cho số nhỏ, long long cho tổng hoặc tích lớn.",
          "Sau khi code xong, thử ít nhất ba nhóm test: nhỏ nhất, bình thường, và biên lớn nhất."
        ],
        example: "Cho n số nguyên, tính tổng các số chẵn và đếm số lẻ. Bài này kết hợp nhập xuất, vòng lặp, điều kiện và biến đếm.",
        pseudo: String.raw`read n
sumEven <- 0
countOdd <- 0
repeat n times:
    read x
    if x is even:
        sumEven <- sumEven + x
    else:
        countOdd <- countOdd + 1
print sumEven, countOdd`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    long long sumEven = 0;
    int countOdd = 0;

    for (int i = 0; i < n; ++i) {
        long long x;
        cin >> x;
        if (x % 2 == 0) sumEven += x;
        else countOdd++;
    }

    cout << sumEven << ' ' << countOdd << '\n';
    return 0;
}`,
        notes: [
          "Nếu tổng có thể vượt 2 tỷ, dùng long long.",
          "Không cần lưu mảng khi chỉ xử lý từng số một lần.",
          "Viết test tay trước khi nộp giúp phát hiện sai điều kiện chẵn lẻ rất nhanh."
        ],
        complexity: "O(n)",
        visual: "flow",
        visualCaption: "Luồng giải Level 0: đọc dữ liệu, xử lý từng phần tử, in kết quả."
      },
      {
        title: "Nhập, xuất",
        definition: "Nhập xuất là thao tác nhận dữ liệu từ input và đưa đáp án ra output đúng định dạng mà đề yêu cầu.",
        theory: [
          "Trong C++, cin đọc dữ liệu theo khoảng trắng, cout in dữ liệu ra màn hình hoặc hệ thống chấm.",
          "Dùng ios::sync_with_stdio(false) và cin.tie(nullptr) để tăng tốc nhập xuất.",
          "Kiểu dữ liệu thường gặp: int, long long, double, char, string và bool."
        ],
        example: "Đọc hai số a, b rồi in tổng, hiệu và tích của chúng.",
        pseudo: String.raw`read a, b
print a + b
print a - b
print a * b`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long a, b;
    cin >> a >> b;
    cout << a + b << '\n';
    cout << a - b << '\n';
    cout << a * b << '\n';
    return 0;
}`,
        notes: [
          "Đọc kỹ yêu cầu xuống dòng hay cách nhau bởi dấu cách.",
          "Nếu có số thực, đặt cout << fixed << setprecision(k).",
          "Không in thêm chữ giải thích nếu đề không yêu cầu."
        ],
        complexity: "O(1)",
        visual: "flow",
        visualCaption: "Input đi vào chương trình, qua phép tính, rồi ra output."
      },
      {
        title: "Vòng lặp for",
        definition: "Vòng lặp for dùng khi biết trước số lần lặp hoặc muốn duyệt một dãy chỉ số có quy luật.",
        theory: [
          "Cấu trúc cơ bản gồm khởi tạo, điều kiện tiếp tục và bước cập nhật.",
          "Chỉ số mảng trong C++ thường bắt đầu từ 0, nên duyệt n phần tử bằng i = 0 đến i < n.",
          "for phù hợp để tính tổng, đếm, tìm min/max hoặc sinh các giá trị liên tiếp."
        ],
        example: "Tính tổng các số từ 1 đến n bằng vòng lặp for.",
        pseudo: String.raw`read n
sum <- 0
for i from 1 to n:
    sum <- sum + i
print sum`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long sum = 0;
    for (long long i = 1; i <= n; ++i) {
        sum += i;
    }

    cout << sum << '\n';
    return 0;
}`,
        notes: [
          "Cẩn thận i <= n và i < n, dùng sai rất dễ thiếu hoặc thừa một lượt.",
          "Nếu n rất lớn, có thể thay vòng lặp bằng công thức n * (n + 1) / 2.",
          "Biến điều khiển vòng lặp nên đặt tên ngắn như i, j khi phạm vi nhỏ."
        ],
        complexity: "O(n)",
        visual: "array",
        visualCaption: "Mỗi ô tượng trưng cho một lượt lặp của chỉ số i."
      },
      {
        title: "Vòng lặp while, nhiều vòng for lồng nhau",
        definition: "while lặp khi điều kiện còn đúng; vòng lặp lồng nhau dùng để duyệt cặp, bảng hai chiều hoặc mọi tổ hợp nhỏ.",
        theory: [
          "while phù hợp khi chưa biết chính xác số lần lặp, ví dụ tách chữ số của một số.",
          "Hai vòng for lồng nhau thường tạo O(n^2), ba vòng tạo O(n^3), cần so với giới hạn đề.",
          "break dừng vòng lặp gần nhất, continue bỏ qua phần còn lại của lượt hiện tại."
        ],
        example: "Đếm số cặp (i, j) với 1 <= i < j <= n và i + j chia hết cho k.",
        pseudo: String.raw`read n, k
answer <- 0
for i from 1 to n:
    for j from i + 1 to n:
        if (i + j) mod k = 0:
            answer <- answer + 1
print answer`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    int ans = 0;
    for (int i = 1; i <= n; ++i) {
        for (int j = i + 1; j <= n; ++j) {
            if ((i + j) % k == 0) ans++;
        }
    }

    cout << ans << '\n';
    return 0;
}`,
        notes: [
          "Nếu n khoảng 10^5 thì O(n^2) thường không chạy kịp.",
          "Vòng while phải có bước làm thay đổi điều kiện, nếu không sẽ lặp vô hạn.",
          "Khi debug vòng lặp lồng nhau, in thử i, j với test nhỏ."
        ],
        complexity: "O(n^2)",
        visual: "grid",
        visualCaption: "Vòng ngoài chọn hàng, vòng trong chọn cột hoặc phần tử đi kèm."
      },
      {
        title: "Mảng - Array",
        definition: "Mảng là cấu trúc lưu nhiều phần tử cùng kiểu, cho phép truy cập nhanh bằng chỉ số.",
        theory: [
          "Mảng tĩnh có kích thước cố định, phù hợp khi giới hạn n đã rõ và cần mảng đếm tần suất.",
          "Vector là mảng động của C++ STL, cấp phát theo n hoặc thêm phần tử bằng push_back.",
          "Truy cập a[i] là O(1), nhưng phải đảm bảo i nằm trong đoạn hợp lệ.",
          "Các thao tác cơ bản: nhập mảng, duyệt mảng, tìm min/max, tính tổng và đếm tần suất."
        ],
        example: "Đọc n số, in giá trị nhỏ nhất, lớn nhất và tổng của mảng.",
        pseudo: String.raw`read n
read array a
mn <- a[0], mx <- a[0], sum <- 0
for each x in a:
    mn <- min(mn, x)
    mx <- max(mx, x)
    sum <- sum + x
print mn, mx, sum`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);

    long long sum = 0;
    for (long long &x : a) cin >> x;

    long long mn = a[0], mx = a[0];
    for (long long x : a) {
        mn = min(mn, x);
        mx = max(mx, x);
        sum += x;
    }

    cout << mn << ' ' << mx << ' ' << sum << '\n';
    return 0;
}`,
        notes: [
          "Không truy cập a[0] nếu n có thể bằng 0.",
          "Mảng tĩnh nên khai báo đủ lớn theo giới hạn đề, ví dụ int a[MAXN].",
          "vector<int> a(n) tự tạo n phần tử được gán giá trị mặc định 0.",
          "Dùng vector khi số phần tử phụ thuộc input hoặc cần tạo danh sách kết quả mới.",
          "Dùng long long cho tổng, ngay cả khi từng phần tử là int."
        ],
        complexity: "O(n)",
        visual: "array",
        visualCaption: "Mảng có chỉ số liên tiếp, mỗi ô lưu một giá trị."
      },
      {
        title: "Xâu cơ bản",
        definition: "Xâu là dãy ký tự; trong C++ kiểu string hỗ trợ truy cập từng ký tự, nối xâu, lấy độ dài và duyệt.",
        theory: [
          "cin >> s đọc một từ, getline(cin, s) đọc cả dòng có khoảng trắng.",
          "s.size() trả về độ dài, s[i] truy cập ký tự thứ i theo chỉ số 0.",
          "Bài xâu cơ bản thường hỏi đếm ký tự, đổi hoa thường, kiểm tra palindrome hoặc tách chuỗi."
        ],
        example: "Kiểm tra một xâu có phải palindrome hay không.",
        pseudo: String.raw`read s
l <- 0, r <- length(s) - 1
while l < r:
    if s[l] != s[r]:
        print NO
        stop
    l <- l + 1
    r <- r - 1
print YES`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    bool ok = true;
    for (int l = 0, r = (int)s.size() - 1; l < r; ++l, --r) {
        if (s[l] != s[r]) {
            ok = false;
            break;
        }
    }

    cout << (ok ? "YES" : "NO") << '\n';
    return 0;
}`,
        notes: [
          "Ký tự 'a' khác 'A', nếu đề không phân biệt hoa thường cần chuẩn hóa trước.",
          "Với getline sau cin >>, cần bỏ ký tự xuống dòng còn lại bằng cin.ignore().",
          "Duyệt hai đầu là kỹ thuật rất hay gặp trong bài palindrome."
        ],
        complexity: "O(n)",
        visual: "string",
        visualCaption: "Hai con trỏ đi từ hai đầu xâu vào giữa để so sánh."
      },
      {
        title: "Hàm, Truy vấn",
        definition: "Hàm đóng gói một công việc nhỏ để tái sử dụng; truy vấn là yêu cầu trả lời nhiều câu hỏi trên cùng dữ liệu.",
        theory: [
          "Hàm giúp chương trình dễ đọc hơn: mỗi hàm nên làm một nhiệm vụ rõ ràng.",
          "Khi có nhiều truy vấn, thường cần tiền xử lý để mỗi truy vấn trả lời nhanh hơn.",
          "Tham số truyền bằng const reference giúp tránh copy dữ liệu lớn."
        ],
        example: "Cho mảng a và q truy vấn l, r, trả lời tổng a[l] + ... + a[r].",
        pseudo: String.raw`build prefix sum pref
for each query l, r:
    answer <- pref[r] - pref[l - 1]
    print answer`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

long long rangeSum(const vector<long long>& pref, int l, int r) {
    return pref[r] - pref[l - 1];
}

int main() {
    int n, q;
    cin >> n >> q;
    vector<long long> pref(n + 1, 0);

    for (int i = 1; i <= n; ++i) {
        long long x;
        cin >> x;
        pref[i] = pref[i - 1] + x;
    }

    while (q--) {
        int l, r;
        cin >> l >> r;
        cout << rangeSum(pref, l, r) << '\n';
    }
    return 0;
}`,
        notes: [
          "Nếu q lớn, trả lời mỗi truy vấn O(n) sẽ dễ quá thời gian.",
          "Quy ước chỉ số 1-based giúp công thức pref[r] - pref[l - 1] gọn.",
          "Tên hàm nên nói rõ kết quả trả về, ví dụ rangeSum, isPrime, gcdFast."
        ],
        complexity: "Tiền xử lý O(n), mỗi truy vấn O(1)",
        visual: "prefix",
        visualCaption: "Prefix sum lưu tổng từ đầu mảng đến từng vị trí."
      },
      {
        title: "Tổng hợp cấp tốc",
        definition: "Phần tổng hợp cấp tốc tập trung rèn tốc độ nhận dạng dạng bài và viết khung giải ổn định trong thời gian ngắn.",
        theory: [
          "Tách đề thành ba dòng: dữ liệu vào, kết quả cần in, quy tắc xử lý.",
          "Nếu bài có nhiều trường hợp, xử lý từng test case bằng hàm solve().",
          "Luôn kiểm tra lỗi phổ biến: tràn số, chia cho 0, chỉ số vượt mảng và thiếu xuống dòng."
        ],
        example: "Nhiều test, mỗi test đọc n rồi in tổng bình phương các số từ 1 đến n.",
        pseudo: String.raw`read t
repeat t times:
    read n
    ans <- 0
    for i from 1 to n:
        ans <- ans + i * i
    print ans`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

void solve() {
    long long n;
    cin >> n;
    long long ans = 0;

    for (long long i = 1; i <= n; ++i) {
        ans += i * i;
    }

    cout << ans << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while (t--) solve();
    return 0;
}`,
        notes: [
          "solve() giúp tránh lặp code khi có nhiều test.",
          "Nếu công thức có thể tối ưu O(1), hãy dùng khi n lớn.",
          "Giữ template ngắn, chỉ thêm thư viện hoặc hàm khi thật sự cần."
        ],
        complexity: "O(t * n)",
        visual: "flow",
        visualCaption: "Mỗi test case đi qua cùng một hàm solve()."
      }
    ]
  },
  {
    level: 1,
    id: "level-1",
    title: "Level 1 - Thuật toán cơ bản",
    subtitle: "Vector, đệ quy, brute force, STL cơ bản, greedy, prefix sum, two pointer và toán nền.",
    topics: [
      {
        title: "Luyện tập tổng hợp",
        definition: "Level 1 tổng hợp các kỹ thuật nền để giải bài có dữ liệu lớn hơn Level 0 và cần chọn cấu trúc dữ liệu phù hợp.",
        theory: [
          "Đọc giới hạn n trước khi chọn thuật toán: n <= 20 có thể brute force, n <= 10^5 thường cần O(n log n) hoặc O(n).",
          "STL như vector, sort, map, set giúp giảm lỗi cài đặt và viết nhanh hơn.",
          "Mỗi bài nên có một ý chính: sắp xếp, đếm tần suất, tiền xử lý, hai con trỏ hoặc tham lam."
        ],
        example: "Cho n số, in các giá trị xuất hiện đúng một lần theo thứ tự tăng dần.",
        pseudo: String.raw`read n
count frequency of each value
for values in increasing order:
    if frequency = 1:
        print value`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    map<int, int> freq;

    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        freq[x]++;
    }

    for (auto [value, count] : freq) {
        if (count == 1) cout << value << ' ';
    }
    return 0;
}`,
        notes: [
          "map tự sắp xếp key tăng dần.",
          "Nếu không cần thứ tự, unordered_map có thể nhanh hơn.",
          "Tách việc đếm và việc in giúp code ít rối."
        ],
        complexity: "O(n log n)",
        visual: "map",
        visualCaption: "Dữ liệu được gom theo key để đếm tần suất."
      },
      {
        title: "Vector",
        definition: "vector là mảng động trong C++, có thể thay đổi kích thước và hỗ trợ truy cập theo chỉ số.",
        theory: [
          "push_back thêm phần tử vào cuối, pop_back xóa phần tử cuối.",
          "vector lưu liên tiếp trong bộ nhớ nên truy cập a[i] là O(1).",
          "Xóa hoặc chèn ở giữa vector tốn O(n) vì phải dời các phần tử phía sau."
        ],
        example: "Đọc n số, sắp xếp và loại bỏ giá trị trùng nhau.",
        pseudo: String.raw`read n and vector a
sort a
remove duplicate values
print remaining values`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int &x : a) cin >> x;

    sort(a.begin(), a.end());
    a.erase(unique(a.begin(), a.end()), a.end());

    for (int x : a) cout << x << ' ';
    return 0;
}`,
        notes: [
          "unique chỉ gom phần tử trùng kề nhau, nên thường cần sort trước.",
          "a.size() trả về size_t, khi so sánh với int cần cẩn thận cảnh báo kiểu.",
          "Dùng reserve(n) nếu biết trước số lượng push_back lớn."
        ],
        complexity: "O(n log n)",
        visual: "vector",
        visualCaption: "Vector mở rộng khi thêm phần tử, vẫn truy cập nhanh như mảng."
      },
      {
        title: "Đệ quy",
        definition: "Đệ quy là kỹ thuật một hàm tự gọi chính nó để giải bài toán bằng cách chia về bài toán nhỏ hơn.",
        theory: [
          "Một hàm đệ quy phải có điều kiện dừng và bước chuyển làm bài toán nhỏ đi.",
          "Mỗi lời gọi nằm trên call stack, vì vậy đệ quy quá sâu có thể tràn stack.",
          "Đệ quy hợp với cây, quay lui, chia để trị và định nghĩa toán học như giai thừa."
        ],
        example: "Tính ước chung lớn nhất bằng thuật toán Euclid đệ quy.",
        pseudo: String.raw`gcd(a, b):
    if b = 0:
        return a
    return gcd(b, a mod b)`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

long long gcdRec(long long a, long long b) {
    if (b == 0) return a;
    return gcdRec(b, a % b);
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << gcdRec(a, b) << '\n';
    return 0;
}`,
        notes: [
          "Điều kiện dừng sai sẽ gây lặp vô hạn.",
          "Với n lớn, cân nhắc chuyển sang vòng lặp để tránh tràn stack.",
          "Luôn tự hỏi: lời gọi sau có nhỏ hơn lời gọi hiện tại không?"
        ],
        complexity: "O(log min(a, b))",
        visual: "recursion",
        visualCaption: "Mỗi lời gọi đệ quy tạo một tầng mới cho đến khi gặp điều kiện dừng."
      },
      {
        title: "Brute Force - Backtracking",
        definition: "Thuật toán sinh là nhóm kỹ thuật liệt kê có hệ thống mọi cấu hình thỏa dạng bài; backtracking là cách sinh bằng đệ quy, thử lựa chọn rồi quay lui để thử nhánh khác.",
        theory: [
          "Theo VNOI, backtracking dùng để liệt kê cấu hình; mỗi cấu hình được xây bằng cách xét lần lượt các phần tử và thử mọi khả năng cho phần tử đó.",
          "Thuật toán sinh trả lời câu hỏi: làm sao tạo ra tất cả xâu, dãy, tổ hợp, hoán vị hoặc cách xếp mà không bỏ sót và hạn chế trùng lặp.",
          "Mẫu cốt lõi gồm: kiểm tra trường hợp cơ sở, duyệt các lựa chọn hợp lệ, thêm lựa chọn, gọi đệ quy, sau đó bỏ lựa chọn.",
          "Nếu tại một trạng thái chắc chắn không thể tạo nghiệm hợp lệ hoặc không thể tốt hơn đáp án hiện tại, ta cắt nhánh để không duyệt tiếp."
        ],
        example: "Liệt kê tất cả các xâu nhị phân độ dài n.",
        pseudo: String.raw`backtrack(pos):
    if pos = n:
        print current string
        return
    for bit in {0, 1}:
        append bit to current string
        backtrack(pos + 1)
        remove last bit`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int n;
string cur;

void backtrack(int pos) {
    if (pos == n) {
        cout << cur << '\n';
        return;
    }
    for (char bit : {'0', '1'}) {
        cur.push_back(bit);
        backtrack(pos + 1);
        cur.pop_back();
    }
}

int main() {
    cin >> n;
    backtrack(0);
    return 0;
}`,
        notes: [
          "Backtracking thường có độ phức tạp hàm mũ hoặc giai thừa, nên dữ liệu đầu vào thường nhỏ.",
          "Phần hoàn tác phải đảo đúng những gì phần chọn đã làm: push thì pop, đánh dấu thì bỏ đánh dấu.",
          "Trước khi code, hãy xác định rõ trạng thái, lựa chọn, điều kiện dừng và điều kiện cắt nhánh."
        ],
        complexity: "Thường O(số trạng thái), ví dụ sinh nhị phân O(2^n)",
        visual: "tree",
        visualCaption: "Backtracking duyệt cây lựa chọn, mỗi nhánh là một quyết định."
      },
      {
        title: "Pair - Struct",
        definition: "struct là kiểu dữ liệu tự định nghĩa để gom nhiều thuộc tính liên quan thành một bản ghi; pair là phiên bản rất gọn khi chỉ cần đúng hai giá trị.",
        theory: [
          "struct phù hợp khi một đối tượng có nhiều trường như học sinh gồm tên, điểm, lớp; cạnh đồ thị gồm u, v, w; đoạn gồm l, r.",
          "Tên trường trong struct làm code rõ nghĩa hơn pair.first, pair.second, đặc biệt khi bài có nhiều thuộc tính.",
          "Có thể lưu struct trong vector, truyền vào hàm, sort bằng comparator, hoặc dùng struct để tạo node của linked list."
        ],
        example: "Sắp xếp danh sách học sinh giảm dần theo điểm, nếu bằng điểm thì tăng dần theo tên.",
        pseudo: String.raw`read students
sort by:
    higher score first
    if same score, smaller name first
print result`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

struct Student {
    string name;
    int score;
};

int main() {
    int n;
    cin >> n;
    vector<Student> a(n);
    for (auto &s : a) cin >> s.name >> s.score;

    sort(a.begin(), a.end(), [](const Student& x, const Student& y) {
        if (x.score != y.score) return x.score > y.score;
        return x.name < y.name;
    });

    for (const auto &s : a) cout << s.name << ' ' << s.score << '\n';
    return 0;
}`,
        notes: [
          "Dùng pair cho dữ liệu hai trường thật đơn giản; dùng struct khi cần đặt tên rõ nghĩa.",
          "Comparator phải tạo thứ tự nhất quán, nếu không sort có thể cho kết quả khó đoán.",
          "Struct cũng là cách tự mô tả dữ liệu, đúng tinh thần VNOI nhấn mạnh: tổ chức dữ liệu phù hợp giúp bài toán dễ xử lý hơn."
        ],
        complexity: "O(n log n)",
        visual: "struct",
        visualCaption: "Mỗi bản ghi gom nhiều thuộc tính thành một đơn vị dữ liệu."
      },
      {
        title: "Greedy",
        definition: "Greedy, hay thuật toán tham lam, giải bài toán bằng cách lặp lại lựa chọn tốt nhất ở thời điểm hiện tại theo một tiêu chí đã chứng minh đúng.",
        theory: [
          "Theo VNOI, tham lam chủ yếu xuất hiện trong bài tối ưu hóa; khó nhất không phải code mà là chứng minh quy luật chọn cục bộ dẫn tới tối ưu toàn cục.",
          "Một quy tắc tham lam thường xuất phát từ nguyên lý cực hạn: chọn phần tử kết thúc sớm nhất, nhỏ nhất, lớn nhất, rẻ nhất, hoặc gây ít ảnh hưởng nhất.",
          "Không phải quy tắc nghe hợp lý nào cũng đúng. Cần tự tìm phản ví dụ cho các quy tắc sai trước khi tin vào quy tắc cuối cùng."
        ],
        example: "Chọn nhiều đoạn không giao nhau nhất bằng cách sắp xếp theo thời điểm kết thúc tăng dần.",
        pseudo: String.raw`sort intervals by end time
lastEnd <- -infinity
answer <- 0
for interval in intervals:
    if interval.start >= lastEnd:
        choose interval
        lastEnd <- interval.end
        answer <- answer + 1
print answer`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int, int>> seg(n);
    for (auto &p : seg) cin >> p.first >> p.second;

    sort(seg.begin(), seg.end(), [](auto a, auto b) {
        return a.second < b.second;
    });

    int ans = 0;
    int lastEnd = INT_MIN;
    for (auto [l, r] : seg) {
        if (l >= lastEnd) {
            ans++;
            lastEnd = r;
        }
    }

    cout << ans << '\n';
    return 0;
}`,
        notes: [
          "Tiêu chí sắp xếp là linh hồn của greedy.",
          "Nếu chọn đoạn kết thúc sớm nhất, ta để lại nhiều không gian nhất cho các đoạn sau.",
          "Khi không chứng minh được greedy, hãy nghĩ đến DP hoặc tìm kiếm."
        ],
        complexity: "O(n log n)",
        visual: "flow",
        visualCaption: "Greedy lặp lại việc chọn ứng viên tốt nhất theo tiêu chí đã chứng minh."
      },
      {
        title: "Map",
        definition: "map là container lưu các cặp key-value, trong đó mỗi key là duy nhất và các key luôn được duy trì theo thứ tự tăng dần.",
        theory: [
          "map thuộc nhóm associative container: ta không truy cập bằng vị trí 0, 1, 2 mà truy cập bằng key.",
          "Các thao tác insert, erase, find, lower_bound thường O(log n) vì map được tổ chức như cây tìm kiếm cân bằng.",
          "map giữ thứ tự key nên rất hữu ích khi vừa cần tra cứu, vừa cần duyệt dữ liệu theo thứ tự."
        ],
        example: "Đếm số lần xuất hiện của từng từ trong văn bản.",
        pseudo: String.raw`read n
for i from 1 to n:
    read word
    freq[word] <- freq[word] + 1
for each key in freq:
    print key and freq[key]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    map<string, int> freq;

    for (int i = 0; i < n; ++i) {
        string word;
        cin >> word;
        freq[word]++;
    }

    for (auto [word, count] : freq) {
        cout << word << ' ' << count << '\n';
    }
    return 0;
}`,
        notes: [
          "freq[x] sẽ tự tạo key x với giá trị mặc định nếu key chưa tồn tại.",
          "Dùng find khi chỉ muốn kiểm tra tồn tại mà không vô tình tạo key mới.",
          "Chọn map thay vì unordered_map khi cần lower_bound, duyệt tăng dần hoặc kết quả ổn định theo thứ tự key."
        ],
        complexity: "O(n log n)",
        visual: "map",
        visualCaption: "Map nối mỗi khóa với một giá trị, ví dụ từ với số lần xuất hiện."
      },
      {
        title: "unordered_map",
        definition: "unordered_map là container key-value dựa trên bảng băm, cho phép tra cứu, thêm và xóa theo key với độ phức tạp trung bình O(1).",
        theory: [
          "unordered_map không giữ thứ tự key; thứ tự duyệt phụ thuộc vào bucket và hàm băm.",
          "Hash biến key thành một giá trị số để quyết định bucket lưu trữ, tương tự ý tưởng bảng băm trong VNOI.",
          "Nếu hash phân bố đều và load factor hợp lý, mỗi bucket có ít phần tử nên thao tác rất nhanh; nếu va chạm nhiều, hiệu năng có thể xấu đi."
        ],
        example: "Cho n số và q truy vấn x, trả lời x xuất hiện bao nhiêu lần trong dãy.",
        pseudo: String.raw`read n
create unordered_map freq
for each x:
    freq[x] <- freq[x] + 1
read q
for each query x:
    print freq[x]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    unordered_map<long long, int> freq;
    freq.reserve(n * 2);

    for (int i = 0; i < n; ++i) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    int q;
    cin >> q;
    while (q--) {
        long long x;
        cin >> x;
        cout << freq[x] << '\n';
    }
    return 0;
}`,
        notes: [
          "Dùng unordered_map khi cần tra cứu nhanh và không cần thứ tự key.",
          "Có thể dùng reserve để giảm số lần rehash khi biết trước số phần tử.",
          "Không dùng unordered_map nếu bài cần lower_bound hoặc duyệt key tăng dần."
        ],
        complexity: "Trung bình O(n + q)",
        visual: "map",
        visualCaption: "unordered_map dùng hash để đưa key vào các bucket."
      },
      {
        title: "Set",
        definition: "set là container lưu các giá trị duy nhất và luôn duy trì chúng theo thứ tự tăng dần.",
        theory: [
          "set có thể xem như map chỉ có key mà không có value: mỗi giá trị vừa là dữ liệu, vừa là khóa tìm kiếm.",
          "Các thao tác insert, erase, find, count, lower_bound thường O(log n) nhờ cây tìm kiếm cân bằng.",
          "set đặc biệt hợp khi cần loại trùng, kiểm tra tồn tại, hoặc tìm phần tử nhỏ nhất không nhỏ hơn x."
        ],
        example: "Đếm số giá trị phân biệt trong dãy.",
        pseudo: String.raw`read n
create empty set s
for each x:
    insert x into s
print size of s`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    set<int> values;

    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        values.insert(x);
    }

    cout << values.size() << '\n';
    return 0;
}`,
        notes: [
          "Nếu chỉ cần đếm phân biệt và không cần thứ tự, unordered_set thường nhanh hơn trung bình.",
          "set không lưu hai phần tử bằng nhau.",
          "lower_bound trong set tìm phần tử đầu tiên không nhỏ hơn x; đây là điểm unordered_set không làm được."
        ],
        complexity: "O(n log n)",
        visual: "set",
        visualCaption: "Set tự loại trùng, mỗi giá trị chỉ xuất hiện một lần."
      },
      {
        title: "List",
        definition: "list trong C++ STL là danh sách liên kết đôi, lưu phần tử bằng các node nối với nhau thay vì nằm liên tiếp như vector.",
        theory: [
          "list cho phép thêm hoặc xóa ở đầu, cuối, hoặc tại vị trí iterator đã biết trong O(1).",
          "list không hỗ trợ truy cập ngẫu nhiên bằng chỉ số O(1); muốn tới phần tử thứ i phải duyệt tuần tự.",
          "Theo tinh thần bài VNOI về mảng và danh sách liên kết, list hợp khi kích thước thay đổi nhiều, còn vector hợp khi cần truy cập chỉ số nhanh."
        ],
        example: "Mô phỏng danh sách công việc, thêm việc mới vào đầu hoặc cuối rồi xóa việc đầu tiên.",
        pseudo: String.raw`create empty list tasks
push_back first tasks
push_front urgent task
if tasks not empty:
    remove front task
print remaining tasks`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    list<string> tasks;
    tasks.push_back("learn_map");
    tasks.push_back("solve_set");
    tasks.push_front("urgent_struct");

    if (!tasks.empty()) tasks.pop_front();

    for (const string &task : tasks) {
        cout << task << '\n';
    }
    return 0;
}`,
        notes: [
          "Dùng list khi cần chèn/xóa nhiều tại vị trí đã có iterator.",
          "Không dùng list cho bài cần a[i], sort bằng std::sort, hoặc duyệt chỉ số liên tục.",
          "Trong thi đấu, vector/deque thường gặp hơn list; list chỉ thật sự đáng dùng khi thao tác node là trọng tâm."
        ],
        complexity: "Thêm/xóa tại iterator O(1), tìm kiếm O(n)",
        visual: "queue",
        visualCaption: "List nối các node bằng con trỏ, không nằm liên tiếp như mảng."
      },
      {
        title: "Sorting, Counting",
        definition: "Sorting đưa dữ liệu về thứ tự mong muốn; counting dùng mảng tần suất khi miền giá trị nhỏ để xử lý nhanh hơn sort so sánh.",
        theory: [
          "std::sort là lựa chọn chính trong C++ cho đa số bài thi, trung bình và tệ nhất đều O(n log n).",
          "Các thuật toán cơ bản như bubble, insertion, merge, quick, heap giúp hiểu cách dữ liệu được hoán đổi, chia nhỏ và gộp lại.",
          "Counting sort phù hợp khi giá trị nằm trong đoạn nhỏ 0..K hoặc có thể dịch chỉ số bằng offset.",
          "Sau khi sắp xếp, nhiều bài trở nên dễ hơn: tìm cặp, loại trùng, greedy, two pointer và tối ưu theo thứ tự."
        ],
        example: "Sắp xếp danh sách thí sinh theo điểm giảm dần, nếu bằng điểm thì tên tăng dần.",
        pseudo: String.raw`read n
read list of (name, score)
sort by:
    higher score first
    if scores are equal, lexicographically smaller name first
print list`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<string, int>> a(n);
    for (auto &[name, score] : a) cin >> name >> score;

    sort(a.begin(), a.end(), [](const auto &left, const auto &right) {
        if (left.second != right.second) return left.second > right.second;
        return left.first < right.first;
    });

    for (auto [name, score] : a) {
        cout << name << ' ' << score << '\n';
    }
    return 0;
}`,
        notes: [
          "Comparator của sort phải trả về true khi phần tử trái cần đứng trước phần tử phải.",
          "Không viết comparator kiểu <= vì có thể phá tính thứ tự nghiêm ngặt của sort.",
          "Counting sort không hợp khi K quá lớn so với n hoặc miền giá trị thưa.",
          "Nếu cần giữ thứ tự tương đối của phần tử bằng nhau, dùng stable_sort hoặc counting sort ổn định."
        ],
        complexity: "std::sort O(n log n), counting O(n + K)",
        visual: "sort",
        visualCaption: "Sort tạo thứ tự để các phần tử liên quan đứng gần nhau; counting gom theo tần suất."
      },
      {
        title: "PrefixSum, Difference array",
        definition: "Prefix sum trả lời tổng đoạn nhanh; difference array hỗ trợ cộng một giá trị vào nhiều đoạn rồi khôi phục mảng cuối.",
        theory: [
          "Prefix sum: pref[i] = a[1] + ... + a[i], tổng l..r là pref[r] - pref[l - 1].",
          "Difference array: muốn cộng v vào đoạn l..r, làm diff[l] += v và diff[r + 1] -= v.",
          "Hai kỹ thuật này đổi nhiều thao tác chậm thành tiền xử lý tuyến tính."
        ],
        example: "Có q lần cộng v vào đoạn l..r, in mảng sau tất cả cập nhật.",
        pseudo: String.raw`create diff array initialized by 0
for each update l, r, v:
    diff[l] <- diff[l] + v
    diff[r + 1] <- diff[r + 1] - v
current <- 0
for i from 1 to n:
    current <- current + diff[i]
    a[i] <- a[i] + current
print a`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;
    vector<long long> a(n + 1), diff(n + 2, 0);
    for (int i = 1; i <= n; ++i) cin >> a[i];

    while (q--) {
        int l, r;
        long long v;
        cin >> l >> r >> v;
        diff[l] += v;
        diff[r + 1] -= v;
    }

    long long add = 0;
    for (int i = 1; i <= n; ++i) {
        add += diff[i];
        cout << a[i] + add << ' ';
    }
    return 0;
}`,
        notes: [
          "Cấp phát diff n + 2 để thao tác r + 1 an toàn.",
          "Difference array phù hợp khi chỉ cần mảng cuối, không hỏi giữa chừng.",
          "Prefix sum và difference array là hai mặt ngược nhau."
        ],
        complexity: "O(n + q)",
        visual: "prefix",
        visualCaption: "Difference lưu điểm bắt đầu và kết thúc ảnh hưởng của cập nhật đoạn."
      },
      {
        title: "Two pointer",
        definition: "Two pointer dùng hai chỉ số di chuyển có kiểm soát để xử lý mảng hoặc xâu trong thời gian tuyến tính.",
        theory: [
          "Hai con trỏ có thể đi từ hai đầu vào giữa hoặc cùng đi từ trái sang phải tạo cửa sổ.",
          "Kỹ thuật này thường cần mảng đã sắp xếp hoặc điều kiện có tính đơn điệu.",
          "Mỗi con trỏ chỉ tiến tối đa n lần nên tổng thời gian thường O(n)."
        ],
        example: "Với mảng số không âm, tìm độ dài đoạn liên tiếp dài nhất có tổng không vượt S.",
        pseudo: String.raw`left <- 0
sum <- 0
answer <- 0
for right from 0 to n - 1:
    sum <- sum + a[right]
    while sum > S:
        sum <- sum - a[left]
        left <- left + 1
    answer <- max(answer, right - left + 1)
print answer`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long s;
    cin >> n >> s;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    int left = 0, ans = 0;
    long long sum = 0;
    for (int right = 0; right < n; ++right) {
        sum += a[right];
        while (sum > s) {
            sum -= a[left];
            left++;
        }
        ans = max(ans, right - left + 1);
    }

    cout << ans << '\n';
    return 0;
}`,
        notes: [
          "Cửa sổ trượt yêu cầu phần tử không âm trong ví dụ này.",
          "Nếu có số âm, tổng cửa sổ không còn đơn điệu.",
          "Luôn kiểm tra điều kiện while để cửa sổ hợp lệ trước khi cập nhật đáp án."
        ],
        complexity: "O(n)",
        visual: "pointers",
        visualCaption: "Hai chỉ số left và right xác định một cửa sổ đang xét."
      },
      {
        title: "Math",
        definition: "Nhóm toán cơ bản gồm chia hết, gcd/lcm, số nguyên tố, modulo và công thức đếm đơn giản.",
        theory: [
          "Chia hết và số dư giúp biến điều kiện số học thành các phép kiểm tra bằng %, gcd hoặc modulo.",
          "Thuật toán Euclid tính gcd nhanh trong O(log min(a,b)), là nền cho lcm và rút gọn phân số.",
          "Số nguyên tố có đúng hai ước dương; kiểm tra đến sqrt(n) hoặc dùng sàng Eratosthenes nếu có nhiều truy vấn.",
          "Khi đáp án lớn, đề thường yêu cầu lấy modulo, cần modulo sau mỗi phép cộng hoặc nhân để tránh tràn."
        ],
        example: "Rút gọn phân số a/b bằng gcd.",
        pseudo: String.raw`read a, b
g <- gcd(abs(a), abs(b))
a <- a / g
b <- b / g
if b < 0:
    a <- -a
    b <- -b
print a, b`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    long long g = gcd(abs(a), abs(b));
    a /= g;
    b /= g;
    if (b < 0) {
        a = -a;
        b = -b;
    }

    cout << a << '/' << b << '\n';
    return 0;
}`,
        notes: [
          "gcd(a, b) = gcd(b, a % b), dừng khi b = 0.",
          "lcm(a, b) = a / gcd(a, b) * b giúp giảm nguy cơ tràn hơn a * b / gcd.",
          "Bắt đầu sàng từ p * p vì các bội nhỏ hơn đã bị đánh dấu bởi số nguyên tố nhỏ hơn.",
          "Với modulo, cộng/nhân xong nên lấy % MOD ngay; với trừ cần cộng MOD trước khi %."
        ],
        complexity: "GCD O(log min(a,b)), sàng O(n log log n)",
        visual: "math",
        visualCaption: "Toán số học biến điều kiện chia hết, số dư và ước số thành phép tính nhanh."
      },
      {
        title: "Tổng hợp cấp tốc",
        definition: "Tổng hợp Level 1 luyện cách kết hợp STL, sort và tiền xử lý để xử lý dữ liệu lớn hơn trong thời gian ngắn.",
        theory: [
          "Nếu cần đếm, nghĩ đến map/unordered_map hoặc mảng tần suất.",
          "Nếu cần tối ưu sau khi sắp xếp, thử greedy hoặc two pointer.",
          "Nếu có nhiều truy vấn trên dữ liệu tĩnh, thử prefix sum hoặc tiền xử lý."
        ],
        example: "Cho n số và q truy vấn x, hỏi x xuất hiện bao nhiêu lần.",
        pseudo: String.raw`read n
count all values by map
read q
for each query x:
    print freq[x]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    unordered_map<long long, int> freq;
    for (int i = 0; i < n; ++i) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    int q;
    cin >> q;
    while (q--) {
        long long x;
        cin >> x;
        cout << freq[x] << '\n';
    }
    return 0;
}`,
        notes: [
          "Tiền xử lý một lần, trả lời nhiều lần là tư duy rất quan trọng.",
          "unordered_map có thể bị hack trong một số hệ thống, map ổn định hơn nhưng chậm hơn.",
          "Đặt ios fast I/O khi input lớn."
        ],
        complexity: "Trung bình O(n + q)",
        visual: "map",
        visualCaption: "Bảng tần suất biến truy vấn đếm từ O(n) thành O(1) trung bình."
      }
    ]
  },
  {
    level: 2,
    id: "level-2",
    title: "Level 2 - Thuật toán quan trọng",
    subtitle: "Binary search, nén tọa độ, stack, queue, deque, priority queue, meet-in-the-middle và toán nâng cao hơn.",
    topics: [
      {
        title: "Luyện tập tổng hợp",
        definition: "Level 2 tập trung vào bài có ràng buộc lớn, cần phát hiện tính đơn điệu, dùng cấu trúc dữ liệu đúng và tối ưu số trạng thái.",
        theory: [
          "Khi n lên 10^5 hoặc 10^6, O(n^2) thường không đủ; cần O(n log n) hoặc O(n).",
          "Nhiều bài khó nằm ở bước biến đổi: nén giá trị, tìm điều kiện đơn điệu, hoặc chia đôi không gian tìm kiếm.",
          "Dữ liệu có thứ tự thời gian thường hợp với stack, queue hoặc deque."
        ],
        example: "Cho nhiều giá trị lớn, nén chúng thành thứ hạng rồi đếm tần suất theo thứ hạng.",
        pseudo: String.raw`read array a
copy and sort unique values
for each x in a:
    rank <- lower_bound(uniqueValues, x)
    count[rank] <- count[rank] + 1
print count`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), values;
    for (auto &x : a) {
        cin >> x;
        values.push_back(x);
    }

    sort(values.begin(), values.end());
    values.erase(unique(values.begin(), values.end()), values.end());

    vector<int> cnt(values.size());
    for (long long x : a) {
        int id = lower_bound(values.begin(), values.end(), x) - values.begin();
        cnt[id]++;
    }

    for (int c : cnt) cout << c << ' ';
    return 0;
}`,
        notes: [
          "Nén tọa độ giữ quan hệ thứ tự nhưng đổi giá trị lớn thành chỉ số nhỏ.",
          "lower_bound yêu cầu mảng đã sắp xếp.",
          "Đây là kỹ thuật nền cho Fenwick, segment tree và nhiều bài offline."
        ],
        complexity: "O(n log n)",
        visual: "sort",
        visualCaption: "Giá trị lớn được ánh xạ về thứ hạng nhỏ gọn."
      },
      {
        title: "Binary Search",
        definition: "Binary search tìm vị trí hoặc đáp án bằng cách liên tục chia đôi một miền có tính đơn điệu.",
        theory: [
          "Tìm kiếm nhị phân cần một điều kiện dạng false...false, true...true hoặc ngược lại.",
          "Có hai kiểu phổ biến: tìm trong mảng đã sắp xếp và binary search on answer.",
          "Cẩn thận vòng lặp vô hạn; thường dùng mid = l + (r - l) / 2."
        ],
        example: "Tìm sức chứa nhỏ nhất của thuyền để chở các gói theo thứ tự trong không quá d ngày.",
        pseudo: String.raw`can(capacity):
    days <- 1
    current <- 0
    for each weight:
        if current + weight > capacity:
            days <- days + 1
            current <- 0
        current <- current + weight
    return days <= d

binary search minimum capacity with can(capacity) = true`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

bool canShip(const vector<int>& w, int d, long long cap) {
    int days = 1;
    long long cur = 0;
    for (int x : w) {
        if (x > cap) return false;
        if (cur + x > cap) {
            days++;
            cur = 0;
        }
        cur += x;
    }
    return days <= d;
}

int main() {
    int n, d;
    cin >> n >> d;
    vector<int> w(n);
    long long l = 0, r = 0;
    for (int &x : w) {
        cin >> x;
        l = max(l, (long long)x);
        r += x;
    }

    while (l < r) {
        long long mid = l + (r - l) / 2;
        if (canShip(w, d, mid)) r = mid;
        else l = mid + 1;
    }
    cout << l << '\n';
    return 0;
}`,
        notes: [
          "Hàm can càng dễ đúng thì binary search càng ít lỗi.",
          "Với bài tìm nhỏ nhất thỏa điều kiện, nếu mid thỏa thì kéo r = mid.",
          "Luôn đặt biên trái/phải chắc chắn chứa đáp án."
        ],
        complexity: "O(n log sum)",
        visual: "binary",
        visualCaption: "Mỗi bước loại một nửa miền tìm kiếm nhờ tính đơn điệu."
      },
      {
        title: "Coordinate Compression",
        definition: "Nén tọa độ biến các giá trị lớn hoặc rời rạc thành chỉ số liên tiếp nhưng vẫn giữ thứ tự tương đối.",
        theory: [
          "Khi giá trị có thể tới 10^9 nhưng chỉ có n giá trị xuất hiện, có thể nén về 0..m-1.",
          "Các bước chuẩn: copy, sort, unique, lower_bound để lấy rank.",
          "Nén tọa độ không giữ khoảng cách thật giữa hai giá trị, chỉ giữ thứ tự."
        ],
        example: "Nén điểm số của thí sinh để dùng làm chỉ số mảng tần suất.",
        pseudo: String.raw`values <- copy of a
sort values
remove duplicates
for each a[i]:
    compressed[i] <- position of a[i] in values`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), values;
    for (long long &x : a) {
        cin >> x;
        values.push_back(x);
    }

    sort(values.begin(), values.end());
    values.erase(unique(values.begin(), values.end()), values.end());

    for (long long x : a) {
        int rank = lower_bound(values.begin(), values.end(), x) - values.begin();
        cout << rank << ' ';
    }
    return 0;
}`,
        notes: [
          "Nếu cần rank bắt đầu từ 1, in rank + 1.",
          "Không dùng nén tọa độ khi bài cần khoảng cách thật x[j] - x[i].",
          "Dùng vector values để giải nén ngược: giá trị gốc của rank r là values[r]."
        ],
        complexity: "O(n log n)",
        visual: "compress",
        visualCaption: "Các giá trị rời rạc được xếp hạng thành chỉ số liên tiếp."
      },
      {
        title: "STACK",
        definition: "Stack là cấu trúc LIFO: phần tử vào sau được lấy ra trước.",
        theory: [
          "stack hỗ trợ push, pop, top trong O(1).",
          "Ứng dụng: kiểm tra ngoặc đúng, DFS lặp, undo, monotonic stack tìm phần tử gần hơn/lớn hơn.",
          "Monotonic stack giữ stack tăng hoặc giảm để loại bỏ phần tử không còn hữu ích."
        ],
        example: "Tìm phần tử lớn hơn gần nhất bên phải cho mỗi vị trí.",
        pseudo: String.raw`create empty stack
for i from n - 1 downto 0:
    while stack not empty and stack.top <= a[i]:
        pop stack
    if stack empty: answer[i] <- -1
    else answer[i] <- stack.top
    push a[i]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n), ans(n);
    for (int &x : a) cin >> x;

    stack<int> st;
    for (int i = n - 1; i >= 0; --i) {
        while (!st.empty() && st.top() <= a[i]) st.pop();
        ans[i] = st.empty() ? -1 : st.top();
        st.push(a[i]);
    }

    for (int x : ans) cout << x << ' ';
    return 0;
}`,
        notes: [
          "Không gọi top() khi stack rỗng.",
          "Mỗi phần tử được push và pop tối đa một lần, nên tổng O(n).",
          "Monotonic stack thường thay thế được vòng lặp lồng nhau O(n^2)."
        ],
        complexity: "O(n)",
        visual: "stack",
        visualCaption: "Stack lấy phần tử ở đỉnh trước, giống một chồng dữ liệu."
      },
      {
        title: "Queue - Deque - Priority Queue",
        definition: "Queue là FIFO, deque thêm/xóa ở cả hai đầu, priority_queue luôn lấy phần tử có độ ưu tiên cao nhất.",
        theory: [
          "queue dùng cho BFS và xử lý theo thứ tự đến trước.",
          "deque mạnh trong cửa sổ trượt vì có thể pop cả đầu và cuối.",
          "priority_queue là heap, phù hợp chọn min/max động như Dijkstra hoặc top k."
        ],
        example: "Tìm max của mọi cửa sổ độ dài k bằng deque đơn điệu.",
        pseudo: String.raw`for i from 0 to n - 1:
    remove indices outside window
    while deque not empty and a[back] <= a[i]:
        pop back
    push i
    if i >= k - 1:
        print a[front]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int &x : a) cin >> x;

    deque<int> dq;
    for (int i = 0; i < n; ++i) {
        while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
        dq.push_back(i);

        if (i >= k - 1) cout << a[dq.front()] << ' ';
    }
    return 0;
}`,
        notes: [
          "Deque lưu chỉ số, không chỉ lưu giá trị, để biết phần tử có ra khỏi cửa sổ chưa.",
          "priority_queue mặc định là max-heap.",
          "Muốn min-heap: priority_queue<int, vector<int>, greater<int>> pq."
        ],
        complexity: "O(n)",
        visual: "queue",
        visualCaption: "Deque giữ các ứng viên max còn hiệu lực trong cửa sổ hiện tại."
      },
      {
        title: "Chia đôi tập",
        definition: "Chia đôi tập, hay meet-in-the-middle, tách n phần tử thành hai nửa để giảm từ 2^n xuống khoảng 2^(n/2).",
        theory: [
          "Kỹ thuật này hợp với n khoảng 30-40, nơi 2^n quá lớn nhưng 2^(n/2) còn xử lý được.",
          "Ta liệt kê mọi trạng thái của mỗi nửa, rồi ghép hai danh sách bằng sort, binary search hoặc two pointer.",
          "Thường dùng cho subset sum, đếm số tập con thỏa điều kiện và tối ưu trên tập nhỏ."
        ],
        example: "Đếm số tập con có tổng đúng bằng S.",
        pseudo: String.raw`split array into left and right
generate all subset sums of left
generate all subset sums of right
sort rightSums
for each x in leftSums:
    count values y in rightSums where x + y = S`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

vector<long long> subsetSums(vector<long long> a) {
    int n = a.size();
    vector<long long> sums;
    for (int mask = 0; mask < (1 << n); ++mask) {
        long long s = 0;
        for (int i = 0; i < n; ++i) {
            if (mask >> i & 1) s += a[i];
        }
        sums.push_back(s);
    }
    return sums;
}

int main() {
    int n;
    long long target;
    cin >> n >> target;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    vector<long long> left(a.begin(), a.begin() + n / 2);
    vector<long long> right(a.begin() + n / 2, a.end());
    auto L = subsetSums(left);
    auto R = subsetSums(right);
    sort(R.begin(), R.end());

    long long ans = 0;
    for (long long x : L) {
        auto range = equal_range(R.begin(), R.end(), target - x);
        ans += range.second - range.first;
    }
    cout << ans << '\n';
    return 0;
}`,
        notes: [
          "Nếu mỗi nửa có hơn 30 phần tử, 2^(n/2) vẫn quá lớn.",
          "Dùng long long cho tổng tập con.",
          "equal_range đếm nhanh số phần tử bằng một giá trị trong mảng đã sort."
        ],
        complexity: "O(2^(n/2) * n + 2^(n/2) log 2^(n/2))",
        visual: "mitm",
        visualCaption: "Tập được tách làm hai nửa, sinh tổng từng nửa rồi ghép đáp án."
      },
      {
        title: "Math_2",
        definition: "Math_2 mở rộng toán thi đấu: lũy thừa nhanh, modulo, nghịch đảo modulo, tổ hợp và các biến đổi số học.",
        theory: [
          "Lũy thừa nhanh tính a^b trong O(log b) bằng bình phương liên tiếp.",
          "Khi modulo là số nguyên tố, nghịch đảo của a là a^(mod - 2) theo Fermat nếu a không chia hết cho mod.",
          "Công thức tổ hợp thường cần tiền xử lý factorial và inverse factorial."
        ],
        example: "Tính a^b mod m với b rất lớn.",
        pseudo: String.raw`result <- 1
a <- a mod m
while b > 0:
    if b is odd:
        result <- result * a mod m
    a <- a * a mod m
    b <- b / 2
print result`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

long long modPow(long long a, long long b, long long mod) {
    long long res = 1 % mod;
    a %= mod;
    while (b > 0) {
        if (b & 1) res = (__int128)res * a % mod;
        a = (__int128)a * a % mod;
        b >>= 1;
    }
    return res;
}

int main() {
    long long a, b, mod;
    cin >> a >> b >> mod;
    cout << modPow(a, b, mod) << '\n';
    return 0;
}`,
        notes: [
          "__int128 giúp tránh tràn khi mod gần 10^18.",
          "Nếu mod nhỏ như 1e9+7, long long nhân thường vẫn an toàn vì tích khoảng 1e18.",
          "Không dùng pow(double) cho số nguyên lớn vì sai số."
        ],
        complexity: "O(log b)",
        visual: "math",
        visualCaption: "Số mũ được tách theo bit, mỗi bước bình phương cơ sở."
      },
      {
        title: "Tổng hợp cấp tốc",
        definition: "Tổng hợp Level 2 luyện nhận ra kỹ thuật quan trọng qua dấu hiệu trong đề và giới hạn dữ liệu.",
        theory: [
          "Có từ khóa nhỏ nhất/lớn nhất thỏa điều kiện đơn điệu: thử binary search on answer.",
          "Giá trị lớn nhưng số lượng ít: nghĩ đến coordinate compression.",
          "Cửa sổ liên tiếp, phần tử gần nhất, hoặc max/min động: cân nhắc stack/deque/priority_queue."
        ],
        example: "Tìm phần tử đầu tiên không nhỏ hơn x trong mảng đã sắp xếp cho nhiều truy vấn.",
        pseudo: String.raw`sort array a
for each query x:
    pos <- lower_bound(a, x)
    if pos exists:
        print a[pos]
    else:
        print -1`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;
    vector<int> a(n);
    for (int &x : a) cin >> x;
    sort(a.begin(), a.end());

    while (q--) {
        int x;
        cin >> x;
        auto it = lower_bound(a.begin(), a.end(), x);
        if (it == a.end()) cout << -1 << '\n';
        else cout << *it << '\n';
    }
    return 0;
}`,
        notes: [
          "lower_bound trả iterator đến phần tử đầu tiên >= x.",
          "Nếu cần > x, dùng upper_bound.",
          "Truy vấn nhiều lần là lý do tốt để sort trước."
        ],
        complexity: "O(n log n + q log n)",
        visual: "binary",
        visualCaption: "Sort trước, sau đó mỗi truy vấn dùng tìm kiếm nhị phân."
      }
    ]
  },
  {
    level: 3,
    id: "level-3",
    title: "Level 3 - Thuật toán cao cấp",
    subtitle: "DP, KMP, duyệt đồ thị, segment tree, bao hàm loại trừ, hashing, chia căn và đường đi ngắn nhất.",
    topics: [
      {
        title: "Luyện tập tổng hợp",
        definition: "Level 3 đòi hỏi mô hình hóa bài toán thành trạng thái, đồ thị, đoạn hoặc công thức tối ưu trước khi cài đặt.",
        theory: [
          "Bắt đầu bằng việc gọi tên mô hình: graph, DP, string matching, range query, shortest path hoặc combinatorics.",
          "Tách phần chứng minh ý tưởng khỏi phần cài đặt: đúng mô hình nhưng sai biên vẫn mất điểm.",
          "Viết brute force cho test nhỏ là cách tốt để kiểm chứng thuật toán nâng cao."
        ],
        example: "So sánh lời giải nhanh với brute force trên test ngẫu nhiên nhỏ để bắt lỗi.",
        pseudo: String.raw`repeat many times:
    generate small random test
    slow <- brute force answer
    fast <- optimized answer
    if slow != fast:
        print failing test
        stop`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

long long slow(vector<int> a) {
    long long best = LLONG_MIN;
    for (int l = 0; l < (int)a.size(); ++l) {
        long long sum = 0;
        for (int r = l; r < (int)a.size(); ++r) {
            sum += a[r];
            best = max(best, sum);
        }
    }
    return best;
}

long long fast(vector<int> a) {
    long long best = LLONG_MIN, cur = 0;
    for (int x : a) {
        cur = max((long long)x, cur + x);
        best = max(best, cur);
    }
    return best;
}

int main() {
    mt19937 rng(1);
    for (int tc = 1; tc <= 1000; ++tc) {
        int n = 1 + rng() % 8;
        vector<int> a(n);
        for (int &x : a) x = (int)(rng() % 21) - 10;
        if (slow(a) != fast(a)) {
            cout << "Wrong on test " << tc << '\n';
            return 0;
        }
    }
    cout << "All tests passed\n";
    return 0;
}`,
        notes: [
          "Stress test không chứng minh đúng tuyệt đối, nhưng bắt lỗi cài đặt rất tốt.",
          "Giữ n nhỏ để brute force chạy được.",
          "Khi phát hiện sai, in dữ liệu test để tái hiện."
        ],
        complexity: "Tùy thuật toán, ví dụ fast O(n)",
        visual: "flow",
        visualCaption: "Lời giải chậm và nhanh cùng chạy trên test nhỏ để đối chiếu."
      },
      {
        title: "DP",
        definition: "Quy hoạch động lưu kết quả của các bài toán con để tránh tính lại và xây đáp án bằng quan hệ chuyển trạng thái.",
        theory: [
          "Một bài DP cần xác định trạng thái, giá trị trạng thái, trạng thái gốc và công thức chuyển.",
          "Top-down dùng đệ quy nhớ hóa; bottom-up duyệt trạng thái theo thứ tự phụ thuộc.",
          "Tối ưu bộ nhớ khi trạng thái hiện tại chỉ phụ thuộc một vài lớp trước."
        ],
        example: "Tính số đồng xu ít nhất để tạo tổng S với các mệnh giá cho trước.",
        pseudo: String.raw`dp[0] <- 0
dp[x] <- infinity for x > 0
for sum from 1 to S:
    for coin in coins:
        if sum >= coin:
            dp[sum] <- min(dp[sum], dp[sum - coin] + 1)
print dp[S]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, S;
    cin >> n >> S;
    vector<int> coin(n);
    for (int &c : coin) cin >> c;

    const int INF = 1e9;
    vector<int> dp(S + 1, INF);
    dp[0] = 0;

    for (int sum = 1; sum <= S; ++sum) {
        for (int c : coin) {
            if (sum >= c) dp[sum] = min(dp[sum], dp[sum - c] + 1);
        }
    }

    cout << (dp[S] == INF ? -1 : dp[S]) << '\n';
    return 0;
}`,
        notes: [
          "dp[0] thường là trạng thái gốc vì tổng 0 cần 0 đồng.",
          "INF phải đủ lớn nhưng không gây tràn khi cộng 1.",
          "Nếu mỗi đồng chỉ được dùng một lần, thứ tự duyệt sẽ khác."
        ],
        complexity: "O(n * S)",
        visual: "dp",
        visualCaption: "DP lấp bảng từ trạng thái nhỏ đến trạng thái lớn."
      },
      {
        title: "KMP",
        definition: "KMP là thuật toán tìm mẫu trong xâu bằng prefix function, tránh quay lui con trỏ trên văn bản.",
        theory: [
          "Prefix function pi[i] là độ dài tiền tố dài nhất của mẫu cũng là hậu tố của đoạn kết thúc tại i.",
          "Khi mismatch, KMP dùng pi để nhảy về vị trí còn có thể khớp, không so sánh lại từ đầu.",
          "Tổng thời gian tìm tất cả lần xuất hiện là O(n + m)."
        ],
        example: "Đếm số lần pattern xuất hiện trong text.",
        pseudo: String.raw`combined <- pattern + separator + text
compute prefix function of combined
answer <- count positions with pi[i] = length(pattern)`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

vector<int> prefixFunction(const string& s) {
    vector<int> pi(s.size());
    for (int i = 1; i < (int)s.size(); ++i) {
        int j = pi[i - 1];
        while (j > 0 && s[i] != s[j]) j = pi[j - 1];
        if (s[i] == s[j]) j++;
        pi[i] = j;
    }
    return pi;
}

int main() {
    string pattern, text;
    cin >> pattern >> text;

    string combined = pattern + "#" + text;
    vector<int> pi = prefixFunction(combined);

    int ans = 0;
    for (int x : pi) {
        if (x == (int)pattern.size()) ans++;
    }
    cout << ans << '\n';
    return 0;
}`,
        notes: [
          "Ký tự phân cách nên là ký tự không xuất hiện trong pattern và text.",
          "KMP hữu ích khi cần tìm nhiều vị trí khớp, không chỉ kiểm tra contains.",
          "Cẩn thận pattern rỗng nếu đề có thể cho trường hợp đó."
        ],
        complexity: "O(n + m)",
        visual: "string",
        visualCaption: "KMP dùng thông tin tiền tố để không so sánh lại phần đã biết."
      },
      {
        title: "BFS, DFS",
        definition: "BFS và DFS là hai kỹ thuật duyệt đồ thị; BFS đi theo lớp, DFS đi sâu theo nhánh.",
        theory: [
          "BFS tìm đường đi ngắn nhất theo số cạnh trong đồ thị không trọng số.",
          "DFS phù hợp tìm thành phần liên thông, thứ tự topo, phát hiện chu trình và duyệt cây.",
          "Đồ thị thường lưu bằng adjacency list để tiết kiệm bộ nhớ."
        ],
        example: "Tìm khoảng cách ngắn nhất từ đỉnh 1 đến mọi đỉnh trong đồ thị không trọng số.",
        pseudo: String.raw`dist[start] <- 0
push start into queue
while queue not empty:
    u <- pop front
    for v in adj[u]:
        if dist[v] not set:
            dist[v] <- dist[u] + 1
            push v`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> adj(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<int> dist(n + 1, -1);
    queue<int> q;
    dist[1] = 0;
    q.push(1);

    while (!q.empty()) {
        int u = q.front();
        q.pop();
        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                q.push(v);
            }
        }
    }

    for (int i = 1; i <= n; ++i) cout << dist[i] << ' ';
    return 0;
}`,
        notes: [
          "Đặt dist = -1 cũng đóng vai trò mảng visited.",
          "Với đồ thị có trọng số, BFS thường không còn đúng; cần Dijkstra hoặc thuật toán khác.",
          "DFS đệ quy trên n lớn có thể tràn stack, có thể dùng stack lặp."
        ],
        complexity: "O(n + m)",
        visual: "graph",
        visualCaption: "BFS lan theo từng lớp từ đỉnh bắt đầu."
      },
      {
        title: "Segment Tree",
        definition: "Segment tree là cấu trúc cây lưu thông tin trên các đoạn, hỗ trợ truy vấn và cập nhật trong O(log n).",
        theory: [
          "Mỗi node đại diện một đoạn; node cha gộp kết quả từ hai node con.",
          "Có thể dùng cho sum, min, max, gcd và nhiều phép có tính kết hợp.",
          "Lazy propagation cần khi cập nhật cả đoạn nhiều lần."
        ],
        example: "Hỗ trợ cập nhật một phần tử và truy vấn tổng đoạn l..r.",
        pseudo: String.raw`build tree from array
update position p:
    set leaf p
    recompute ancestors
query l, r:
    combine nodes fully inside range`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

struct SegTree {
    int n;
    vector<long long> tree;

    SegTree(vector<long long> a) {
        n = a.size();
        tree.assign(2 * n, 0);
        for (int i = 0; i < n; ++i) tree[n + i] = a[i];
        for (int i = n - 1; i > 0; --i) tree[i] = tree[i << 1] + tree[i << 1 | 1];
    }

    void update(int p, long long value) {
        for (tree[p += n] = value; p > 1; p >>= 1) {
            tree[p >> 1] = tree[p] + tree[p ^ 1];
        }
    }

    long long query(int l, int r) {
        long long res = 0;
        for (l += n, r += n; l <= r; l >>= 1, r >>= 1) {
            if (l & 1) res += tree[l++];
            if (!(r & 1)) res += tree[r--];
        }
        return res;
    }
};

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    SegTree st(a);
    cout << st.query(0, n - 1) << '\n';
    return 0;
}`,
        notes: [
          "Code trên dùng chỉ số 0-based cho mảng gốc.",
          "Phép gộp phải có phần tử trung hòa: sum là 0, min là INF, max là -INF.",
          "Segment tree mạnh hơn prefix sum khi có cập nhật xen kẽ truy vấn."
        ],
        complexity: "Build O(n), update/query O(log n)",
        visual: "tree",
        visualCaption: "Mỗi node lưu thông tin của một đoạn con."
      },
      {
        title: "Inclusion-Exclusion",
        definition: "Nguyên lý bao hàm loại trừ đếm hợp của nhiều tập bằng cách cộng tập đơn, trừ giao đôi, cộng giao ba, và tiếp tục luân phiên.",
        theory: [
          "Với hai tập: |A ∪ B| = |A| + |B| - |A ∩ B|.",
          "Với ba tập: cộng ba tập đơn, trừ ba giao đôi, cộng giao ba.",
          "Kỹ thuật này hay dùng trong bài chia hết, đếm số không thỏa điều kiện và tổ hợp."
        ],
        example: "Đếm số từ 1 đến n chia hết cho a hoặc b hoặc c.",
        pseudo: String.raw`answer =
    count multiples of a + b + c
    - count multiples of lcm(a,b), lcm(a,c), lcm(b,c)
    + count multiples of lcm(a,b,c)`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

long long lcmSafe(long long a, long long b) {
    return a / gcd(a, b) * b;
}

int main() {
    long long n, a, b, c;
    cin >> n >> a >> b >> c;

    long long ab = lcmSafe(a, b);
    long long ac = lcmSafe(a, c);
    long long bc = lcmSafe(b, c);
    long long abc = lcmSafe(ab, c);

    long long ans = n / a + n / b + n / c
                  - n / ab - n / ac - n / bc
                  + n / abc;

    cout << ans << '\n';
    return 0;
}`,
        notes: [
          "Dùng lcm để đếm số chia hết đồng thời cho nhiều số.",
          "Nếu lcm vượt n quá nhiều, vẫn cần tránh tràn số khi nhân.",
          "Dấu cộng/trừ luân phiên theo kích thước giao."
        ],
        complexity: "O(log max(a,b,c))",
        visual: "set",
        visualCaption: "Đếm hợp các tập bằng cách sửa phần bị đếm lặp."
      },
      {
        title: "DP Knapsack",
        definition: "Knapsack là nhóm bài chọn vật có trọng lượng và giá trị để tối ưu dưới ràng buộc sức chứa.",
        theory: [
          "0/1 knapsack: mỗi vật chọn tối đa một lần, duyệt sức chứa giảm để tránh dùng lại vật.",
          "Unbounded knapsack: mỗi vật dùng nhiều lần, thường duyệt sức chứa tăng.",
          "Trạng thái phổ biến: dp[w] là giá trị tốt nhất với tổng trọng lượng không vượt w."
        ],
        example: "Chọn một số đồ vật để tổng trọng lượng <= W và tổng giá trị lớn nhất.",
        pseudo: String.raw`dp[0..W] <- 0
for each item weight, value:
    for cap from W downto weight:
        dp[cap] <- max(dp[cap], dp[cap - weight] + value)
print dp[W]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<long long> dp(W + 1, 0);

    for (int i = 0; i < n; ++i) {
        int weight, value;
        cin >> weight >> value;
        for (int cap = W; cap >= weight; --cap) {
            dp[cap] = max(dp[cap], dp[cap - weight] + value);
        }
    }

    cout << dp[W] << '\n';
    return 0;
}`,
        notes: [
          "Duyệt cap giảm là điểm then chốt của 0/1 knapsack.",
          "Nếu W quá lớn nhưng tổng giá trị nhỏ, có thể DP theo giá trị.",
          "dp[cap] không nhất thiết dùng hết cap, mà là tốt nhất trong giới hạn cap."
        ],
        complexity: "O(n * W)",
        visual: "dp",
        visualCaption: "Mỗi vật cập nhật các sức chứa có thể đạt được."
      },
      {
        title: "DP LIS",
        definition: "LIS là dãy con tăng dài nhất, giữ nguyên thứ tự ban đầu nhưng không nhất thiết liên tiếp.",
        theory: [
          "DP O(n^2): dp[i] là LIS kết thúc tại i.",
          "Tối ưu O(n log n) dùng mảng tail, tail[len] là giá trị kết thúc nhỏ nhất của dãy tăng độ dài len + 1.",
          "lower_bound cho LIS tăng nghiêm ngặt; upper_bound cho không giảm trong một số biến thể."
        ],
        example: "Tính độ dài dãy con tăng dài nhất.",
        pseudo: String.raw`tail <- empty
for x in a:
    pos <- first index in tail where tail[pos] >= x
    if pos does not exist:
        append x
    else:
        tail[pos] <- x
print length(tail)`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> tail;

    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        auto it = lower_bound(tail.begin(), tail.end(), x);
        if (it == tail.end()) tail.push_back(x);
        else *it = x;
    }

    cout << tail.size() << '\n';
    return 0;
}`,
        notes: [
          "tail không phải luôn là một LIS thật, nhưng độ dài của nó là đáp án.",
          "Muốn truy vết dãy, cần lưu parent và vị trí.",
          "LIS rất hay xuất hiện sau khi sort cặp dữ liệu."
        ],
        complexity: "O(n log n)",
        visual: "array",
        visualCaption: "Mảng tail giữ kết thúc nhỏ nhất cho từng độ dài."
      },
      {
        title: "DP LCS",
        definition: "LCS là dãy con chung dài nhất giữa hai xâu hoặc hai dãy.",
        theory: [
          "dp[i][j] là độ dài LCS của i ký tự đầu xâu A và j ký tự đầu xâu B.",
          "Nếu A[i-1] == B[j-1], lấy dp[i-1][j-1] + 1.",
          "Nếu khác, lấy max(dp[i-1][j], dp[i][j-1])."
        ],
        example: "Tìm độ dài LCS của hai xâu.",
        pseudo: String.raw`for i from 1 to n:
    for j from 1 to m:
        if A[i - 1] = B[j - 1]:
            dp[i][j] <- dp[i - 1][j - 1] + 1
        else:
            dp[i][j] <- max(dp[i - 1][j], dp[i][j - 1])
print dp[n][m]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    cout << dp[n][m] << '\n';
    return 0;
}`,
        notes: [
          "Dùng bảng n + 1, m + 1 để xử lý tiền tố rỗng dễ hơn.",
          "Có thể tối ưu bộ nhớ xuống O(m) nếu chỉ cần độ dài.",
          "Muốn in LCS, truy vết ngược từ dp[n][m]."
        ],
        complexity: "O(n * m)",
        visual: "dp",
        visualCaption: "Bảng DP hai chiều so sánh từng tiền tố của hai xâu."
      },
      {
        title: "DP Path On Grids",
        definition: "DP trên lưới mô hình hóa mỗi ô là trạng thái, chuyển từ các ô kề trước đó theo hướng được phép.",
        theory: [
          "Nếu chỉ đi xuống và sang phải, số đường tới ô (i, j) thường phụ thuộc (i-1, j) và (i, j-1).",
          "Ô chặn hoặc vật cản có dp = 0 nếu đếm số đường.",
          "Có thể thay phép cộng bằng min/max khi bài hỏi chi phí nhỏ nhất hoặc điểm lớn nhất."
        ],
        example: "Đếm số đường từ góc trên trái đến góc dưới phải, chỉ đi xuống hoặc sang phải, có chướng ngại.",
        pseudo: String.raw`dp[1][1] <- 1 if start is free
for each cell:
    if blocked: dp[i][j] <- 0
    else dp[i][j] += dp[i - 1][j] + dp[i][j - 1]
print dp[n][m]`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1000000007;

int main() {
    int n, m;
    cin >> n >> m;
    vector<string> grid(n);
    for (auto &row : grid) cin >> row;

    vector<vector<long long>> dp(n, vector<long long>(m, 0));
    if (grid[0][0] == '.') dp[0][0] = 1;

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            if (grid[i][j] == '#') {
                dp[i][j] = 0;
                continue;
            }
            if (i > 0) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
            if (j > 0) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
        }
    }

    cout << dp[n - 1][m - 1] << '\n';
    return 0;
}`,
        notes: [
          "Cần xử lý ô xuất phát bị chặn.",
          "Thứ tự duyệt phải đảm bảo các ô phụ thuộc đã được tính.",
          "Nếu được đi bốn hướng tự do, bài thường chuyển sang BFS/DFS thay vì DP đơn giản."
        ],
        complexity: "O(n * m)",
        visual: "grid",
        visualCaption: "Mỗi ô nhận kết quả từ những ô có thể đi tới nó."
      },
      {
        title: "DP Range",
        definition: "DP Range, hay interval DP, giải bài toán trên đoạn [l, r] bằng cách chia đoạn tại một điểm k.",
        theory: [
          "Trạng thái thường là dp[l][r], đáp án tốt nhất cho đoạn từ l đến r.",
          "Duyệt theo độ dài đoạn tăng dần để các đoạn con đã được tính trước.",
          "Hay gặp trong bài ghép đoạn, nhân ma trận, xóa chuỗi và tối ưu ngoặc hóa."
        ],
        example: "Ghép n đống đá, mỗi lần ghép hai đoạn kề nhau tốn tổng số đá trong đoạn, tìm chi phí nhỏ nhất.",
        pseudo: String.raw`for len from 2 to n:
    for l from 1 to n - len + 1:
        r <- l + len - 1
        dp[l][r] <- infinity
        for k from l to r - 1:
            dp[l][r] <- min(dp[l][r], dp[l][k] + dp[k + 1][r] + sum(l, r))`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> pref(n + 1, 0);
    for (int i = 1; i <= n; ++i) {
        long long x;
        cin >> x;
        pref[i] = pref[i - 1] + x;
    }

    const long long INF = 4e18;
    vector<vector<long long>> dp(n + 2, vector<long long>(n + 2, 0));

    for (int len = 2; len <= n; ++len) {
        for (int l = 1; l + len - 1 <= n; ++l) {
            int r = l + len - 1;
            dp[l][r] = INF;
            long long sum = pref[r] - pref[l - 1];
            for (int k = l; k < r; ++k) {
                dp[l][r] = min(dp[l][r], dp[l][k] + dp[k + 1][r] + sum);
            }
        }
    }

    cout << dp[1][n] << '\n';
    return 0;
}`,
        notes: [
          "Đoạn độ dài 1 có chi phí 0, nên dp khởi tạo 0 là hợp lý.",
          "Prefix sum giúp lấy tổng đoạn O(1).",
          "Interval DP cơ bản thường O(n^3), cần chú ý giới hạn n."
        ],
        complexity: "O(n^3)",
        visual: "range",
        visualCaption: "Đoạn lớn được tạo từ hai đoạn nhỏ hơn qua điểm chia k."
      },
      {
        title: "Chia căn",
        definition: "Chia căn, hay sqrt decomposition, chia dữ liệu thành các block kích thước khoảng căn n để cân bằng cập nhật và truy vấn.",
        theory: [
          "Mỗi block lưu thông tin gộp như tổng, min hoặc tần suất.",
          "Truy vấn đoạn xử lý phần dư hai đầu trực tiếp và các block nguyên ở giữa bằng dữ liệu gộp.",
          "Kỹ thuật này dễ cài hơn segment tree trong một số bài, nhưng độ phức tạp thường O(sqrt n)."
        ],
        example: "Cập nhật một phần tử và truy vấn tổng đoạn.",
        pseudo: String.raw`blockSize <- sqrt(n)
blockSum[b] stores sum of block b
update index i:
    blockSum[block(i)] += newValue - oldValue
    a[i] <- newValue
query l, r:
    add elements until l reaches block boundary
    add whole block sums
    add remaining elements`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;
    vector<long long> a(n);
    int B = sqrt(n) + 1;
    vector<long long> block(B + 1, 0);

    for (int i = 0; i < n; ++i) {
        cin >> a[i];
        block[i / B] += a[i];
    }

    while (q--) {
        int type;
        cin >> type;
        if (type == 1) {
            int i;
            long long value;
            cin >> i >> value;
            block[i / B] += value - a[i];
            a[i] = value;
        } else {
            int l, r;
            cin >> l >> r;
            long long ans = 0;
            while (l <= r && l % B != 0) ans += a[l++];
            while (l + B - 1 <= r) {
                ans += block[l / B];
                l += B;
            }
            while (l <= r) ans += a[l++];
            cout << ans << '\n';
        }
    }
    return 0;
}`,
        notes: [
          "Code dùng chỉ số 0-based.",
          "Kích thước block thường khoảng sqrt(n), nhưng có thể tinh chỉnh theo bài.",
          "Nếu cần cập nhật đoạn phức tạp, có thể kết hợp lazy theo block."
        ],
        complexity: "Update O(1), query O(sqrt n)",
        visual: "sqrt",
        visualCaption: "Mảng được chia thành block, mỗi block có tổng riêng."
      },
      {
        title: "Hashing",
        definition: "Hashing biến xâu hoặc đối tượng thành giá trị số để so sánh nhanh, thường dùng rolling hash cho substring.",
        theory: [
          "Rolling hash xem xâu như đa thức theo cơ số base và lấy modulo.",
          "Hash đoạn con lấy O(1) sau khi có prefix hash và power.",
          "Có khả năng va chạm hash, nên bài nghiêm ngặt có thể dùng hai modulo hoặc xác minh thêm."
        ],
        example: "So sánh nhanh hai substring cùng độ dài trong một xâu.",
        pseudo: String.raw`precompute power and prefix hash
hash(l, r) = pref[r] - pref[l - 1] * power[length]
two substrings are probably equal if hashes are equal`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1000000007;
const long long BASE = 911382323;

int main() {
    string s;
    cin >> s;
    int n = s.size();
    vector<long long> pref(n + 1, 0), power(n + 1, 1);

    for (int i = 1; i <= n; ++i) {
        power[i] = power[i - 1] * BASE % MOD;
        pref[i] = (pref[i - 1] * BASE + s[i - 1]) % MOD;
    }

    auto getHash = [&](int l, int r) {
        long long value = (pref[r] - pref[l - 1] * power[r - l + 1]) % MOD;
        if (value < 0) value += MOD;
        return value;
    };

    int l1, r1, l2, r2;
    cin >> l1 >> r1 >> l2 >> r2;
    cout << (getHash(l1, r1) == getHash(l2, r2) ? "Equal" : "Different") << '\n';
    return 0;
}`,
        notes: [
          "Code dùng chỉ số substring 1-based.",
          "BASE nên lớn và cố định; có thể random trong bài chống hack.",
          "Hash bằng một modulo có rủi ro va chạm, dù thường rất thấp."
        ],
        complexity: "Tiền xử lý O(n), mỗi truy vấn O(1)",
        visual: "hash",
        visualCaption: "Prefix hash giúp lấy fingerprint của đoạn con ngay lập tức."
      },
      {
        title: "Shortest Path",
        definition: "Shortest path tìm đường đi có tổng trọng số nhỏ nhất trong đồ thị.",
        theory: [
          "BFS dùng cho đồ thị không trọng số hoặc mọi cạnh trọng số 1.",
          "Dijkstra dùng cho trọng số không âm, kết hợp priority_queue để chọn đỉnh có dist nhỏ nhất.",
          "Bellman-Ford dùng được với cạnh âm và phát hiện chu trình âm, nhưng chậm hơn."
        ],
        example: "Tìm khoảng cách ngắn nhất từ đỉnh 1 đến mọi đỉnh trong đồ thị trọng số không âm.",
        pseudo: String.raw`dist[start] <- 0
push (0, start) into min-heap
while heap not empty:
    pop vertex u with smallest distance
    if popped distance is stale: skip
    for edge u -> v with weight w:
        if dist[v] > dist[u] + w:
            update dist[v]
            push new pair into heap`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<pair<int, int>>> adj(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});
    }

    const long long INF = 4e18;
    vector<long long> dist(n + 1, INF);
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> pq;

    dist[1] = 0;
    pq.push({0, 1});
    while (!pq.empty()) {
        auto [du, u] = pq.top();
        pq.pop();
        if (du != dist[u]) continue;

        for (auto [v, w] : adj[u]) {
            if (dist[v] > du + w) {
                dist[v] = du + w;
                pq.push({dist[v], v});
            }
        }
    }

    for (int i = 1; i <= n; ++i) cout << dist[i] << ' ';
    return 0;
}`,
        notes: [
          "Dijkstra không đúng nếu có cạnh âm.",
          "Dòng if (du != dist[u]) bỏ qua trạng thái cũ trong priority_queue.",
          "Dùng long long cho khoảng cách vì tổng trọng số có thể lớn."
        ],
        complexity: "O((n + m) log n)",
        visual: "shortest",
        visualCaption: "Dijkstra luôn mở rộng đỉnh chưa xử lý có khoảng cách tạm thời nhỏ nhất."
      },
      {
        title: "Tổng hợp cấp tốc",
        definition: "Tổng hợp Level 3 rèn kỹ năng chọn mô hình nâng cao và kiểm soát lỗi cài đặt trong các bài dài.",
        theory: [
          "Nếu bài có quyết định theo thời gian hoặc chỉ số, thử viết trạng thái DP trước.",
          "Nếu bài hỏi trên đoạn và có cập nhật, nghĩ đến segment tree, Fenwick hoặc chia căn.",
          "Nếu bài là xâu dài với so khớp nhiều lần, cân nhắc KMP hoặc hashing."
        ],
        example: "Khung solve cho bài có nhiều test, mỗi test chọn thuật toán theo dữ liệu đã đọc.",
        pseudo: String.raw`read t
for each test:
    read input
    build model
    run chosen algorithm
    print answer
    clear per-test data`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> adj(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<int> visited(n + 1, 0);
    int components = 0;
    for (int start = 1; start <= n; ++start) {
        if (visited[start]) continue;
        components++;
        stack<int> st;
        st.push(start);
        visited[start] = 1;
        while (!st.empty()) {
            int u = st.top();
            st.pop();
            for (int v : adj[u]) {
                if (!visited[v]) {
                    visited[v] = 1;
                    st.push(v);
                }
            }
        }
    }
    cout << components << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while (t--) solve();
    return 0;
}`,
        notes: [
          "Dữ liệu theo test nên khai báo trong solve để tự giải phóng và tránh sót reset.",
          "Với Level 3, đặt tên biến rõ giúp giảm lỗi khi công thức dài.",
          "Sau khi AC test mẫu, tự tạo test biên: đồ thị rỗng, một đỉnh, nhiều thành phần."
        ],
        complexity: "O(t * (n + m))",
        visual: "graph",
        visualCaption: "Khung tổng hợp Level 3 thường bắt đầu bằng việc dựng mô hình đồ thị, DP hoặc đoạn."
      }
    ]
  }
];

const removedTopicTitles = new Set(["Luyện tập tổng hợp", "Tổng hợp cấp tốc"]);

levels.forEach((level) => {
  if (level.level !== 2) {
    level.topics = level.topics.filter((topic) => !removedTopicTitles.has(topic.title));
  }
});

const visualLibrary = {
  flow: {
    type: "flow",
    items: ["Đọc đề", "Thiết kế biến", "Duyệt dữ liệu", "In đáp án"]
  },
  array: {
    type: "cells",
    className: "array-visual",
    items: ["a[0]", "a[1]", "a[2]", "a[3]", "a[4]"]
  },
  vector: {
    type: "cells",
    className: "array-visual",
    items: ["push", "sort", "unique", "erase"]
  },
  string: {
    type: "cells",
    className: "array-visual",
    items: ["s[0]", "s[1]", "...", "s[n-2]", "s[n-1]"]
  },
  grid: {
    type: "grid",
    items: [["i,j", "", ""], ["", "x", ""], ["", "", "ans"]]
  },
  prefix: {
    type: "cells",
    className: "prefix-visual",
    items: ["0", "p1", "p2", "p3", "p4", "p5"]
  },
  map: {
    type: "pairs",
    items: [["key", "value"], ["7", "3"], ["cat", "2"]]
  },
  set: {
    type: "cells",
    className: "set-visual",
    items: ["2", "5", "8", "13"]
  },
  recursion: {
    type: "stack",
    items: ["gcd(48,18)", "gcd(18,12)", "gcd(12,6)", "gcd(6,0)"]
  },
  tree: {
    type: "graph",
    nodes: [
      ["1", 48, 12],
      ["2", 20, 82],
      ["3", 76, 82],
      ["4", 9, 148],
      ["5", 37, 148],
      ["6", 67, 148],
      ["7", 94, 148]
    ],
    edges: [[48, 34, 20, 82], [48, 34, 76, 82], [20, 104, 9, 148], [20, 104, 37, 148], [76, 104, 67, 148], [76, 104, 94, 148]]
  },
  struct: {
    type: "pairs",
    items: [["name", "score"], ["An", "9"], ["Binh", "8"]]
  },
  sort: {
    type: "cells",
    className: "array-visual",
    items: ["9", "4", "4", "1", "7", "→", "1", "4", "7", "9"]
  },
  pointers: {
    type: "cells",
    className: "array-visual",
    items: ["L", "4", "6", "9", "R"]
  },
  math: {
    type: "flow",
    items: ["Chia hết", "GCD/LCM", "Modulo", "Tổ hợp"]
  },
  binary: {
    type: "cells",
    className: "array-visual",
    items: ["L", "false", "false", "mid", "true", "R"]
  },
  compress: {
    type: "pairs",
    items: [["1000000", "2"], ["-5", "0"], ["42", "1"]]
  },
  stack: {
    type: "stack",
    items: ["top", "x3", "x2", "x1"]
  },
  queue: {
    type: "cells",
    className: "queue-visual",
    items: ["front", "7", "5", "3", "back"]
  },
  mitm: {
    type: "flow",
    items: ["Nửa trái", "Sinh tổng", "Nửa phải", "Ghép bằng sort"]
  },
  dp: {
    type: "cells",
    className: "dp-visual",
    items: ["dp0", "dp1", "dp2", "dp3", "dp4"]
  },
  graph: {
    type: "graph",
    nodes: [
      ["1", 18, 28],
      ["2", 78, 38],
      ["3", 48, 102],
      ["4", 118, 118],
      ["5", 156, 62]
    ],
    edges: [[39, 49, 78, 58], [78, 58, 48, 123], [48, 123, 118, 139], [99, 58, 156, 83], [118, 139, 156, 83]]
  },
  range: {
    type: "cells",
    className: "array-visual",
    items: ["l", "left", "k", "right", "r"]
  },
  sqrt: {
    type: "cells",
    className: "array-visual",
    items: ["B0", "B0", "B1", "B1", "B2", "B2"]
  },
  hash: {
    type: "cells",
    className: "array-visual",
    items: ["h0", "h1", "h2", "h3", "h4"]
  },
  shortest: {
    type: "graph",
    nodes: [
      ["S", 20, 90],
      ["2", 78, 42],
      ["3", 90, 142],
      ["4", 154, 74],
      ["T", 178, 146]
    ],
    edges: [[40, 107, 78, 58], [40, 107, 90, 158], [99, 58, 154, 91], [111, 158, 178, 162], [154, 91, 178, 162]]
  }
};

const state = {
  levelIndex: 0,
  topicIndex: 0,
  query: ""
};

const levelTabs = document.querySelector("#levelTabs");
const topicList = document.querySelector("#topicList");
const slide = document.querySelector("#slide");
const deckTitle = document.querySelector("#deckTitle");
const levelKicker = document.querySelector("#levelKicker");
const progressBar = document.querySelector("#progressBar");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const searchInput = document.querySelector("#searchInput");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getTopicId(topic) {
  return slugify(topic.title);
}

function getActiveLevel() {
  return levels[state.levelIndex];
}

function getActiveTopic() {
  return getActiveLevel().topics[state.topicIndex];
}

function getLevel2OjProblemText() {
  const modules = window.level2Oj?.modules || [];
  return modules.flatMap((module) => [
    module.title,
    module.href,
    ...(module.problems || []).flatMap((problem) => [
      problem.title,
      problem.href,
      problem.score,
      problem.ac
    ])
  ]);
}

function topicMatches(topic) {
  if (!state.query) return true;
  const guide = getLessonGuide(topic);
  const level2OjText = getActiveLevel().level === 2 && topic.title === "Luyện tập tổng hợp"
    ? getLevel2OjProblemText()
    : [];
  const guideText = [
    ...(guide.deepTheory || []),
    ...(guide.why || []),
    ...(guide.method || []),
    guide.primaryIdea,
    guide.primaryMethod,
    guide.secondExample?.title,
    guide.secondExample?.statement,
    guide.secondExample?.idea,
    guide.secondExample?.method,
    guide.secondExample?.pseudo,
    guide.secondExample?.code,
    ...(guide.quickExamples || []).map((item) => `${item.title} ${item.problem} ${item.steps?.join(" ")} ${item.result}`),
    ...(guide.conceptSections || []).map((item) => [
      item.title,
      ...(item.theory || []),
      item.example?.title,
      item.example?.statement,
      item.example?.idea,
      item.example?.method,
      item.example?.pseudo,
      item.example?.code,
      ...(item.practice || [])
    ].join(" ")),
    ...(guide.practice || []).map((item) => [
      item.title,
      item.focus,
      item.hint,
      item.statement,
      item.idea,
      item.method,
      item.explanation,
      item.sampleInput,
      item.sampleOutput,
      item.pseudo,
      item.code
    ].join(" ")),
    ...(guide.references || []).map((item) => `${item.title} ${item.url}`)
  ].filter(Boolean);
  const haystack = [
    topic.title,
    topic.definition,
    topic.example,
    topic.complexity,
    ...topic.theory,
    ...topic.notes,
    ...level2OjText,
    ...guideText
  ].join(" ").toLowerCase();
  return haystack.includes(state.query);
}

function renderLevelTabs() {
  levelTabs.innerHTML = levels.map((level, index) => `
    <button class="level-tab ${index === state.levelIndex ? "is-active" : ""}" type="button" data-level="${index}">
      ${level.level}
    </button>
  `).join("");
}

function renderTopicList() {
  const level = getActiveLevel();
  topicList.innerHTML = level.topics.map((topic, index) => {
    const hidden = topicMatches(topic) ? "" : "hidden";
    return `
      <button class="topic-button ${index === state.topicIndex ? "is-active" : ""}" type="button" data-topic="${index}" ${hidden}>
        <span class="topic-number">${index + 1}</span>
        <span>
          <span class="topic-name">${escapeHtml(topic.title)}</span>
          <span class="topic-meta">${escapeHtml(topic.complexity)}</span>
        </span>
      </button>
    `;
  }).join("");

  if (!topicList.querySelector(".topic-button:not([hidden])")) {
    topicList.innerHTML = `<p class="empty-state">Không có chủ đề khớp.</p>`;
  }
}

function listMarkup(items, className) {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function getLessonGuide(topic) {
  return window.lessonGuides?.[topic.title] || {};
}

function buildExamples(topic, guide) {
  const first = {
    title: "Ví dụ 1: Bài mẫu nền tảng",
    statement: topic.example,
    idea: guide.primaryIdea || "Dùng đúng cấu trúc dữ liệu hoặc thuật toán của chủ đề để giải bài mẫu.",
    method: guide.primaryMethod || "Xác định input, trạng thái cần xử lý, sau đó cài đặt theo mã giả.",
    pseudo: topic.pseudo,
    code: topic.code
  };

  const second = guide.secondExample || {
    title: "Ví dụ 2: Biến thể luyện tập",
    statement: "Áp dụng cùng kỹ thuật vào một biến thể nhỏ để kiểm tra khả năng nhận dạng dạng bài.",
    idea: "Giữ nguyên tư duy chính của thuật toán, thay đổi điều kiện xử lý theo đề.",
    method: "Viết lại trạng thái, công thức hoặc vòng duyệt cho phù hợp biến thể.",
    pseudo: topic.pseudo,
    code: topic.code
  };

  return [first, second];
}

function detailBlock(title, items, className = "theory-list") {
  if (!items || !items.length) return "";
  return `
    <section>
      <h4 class="section-title">${escapeHtml(title)}</h4>
      ${listMarkup(items, className)}
    </section>
  `;
}

function conceptSectionsMarkup(items, addCode) {
  if (!items || !items.length) return "";
  return `
    <section class="concept-section">
      <h4 class="section-title">Mục riêng cần nắm</h4>
      <div class="concept-grid">
        ${items.map((item) => {
          const example = item.example || {};
          const hasExample = example.title || example.statement || example.idea || example.method || example.pseudo || example.code;
          return `
            <article class="concept-card">
              <h5>${escapeHtml(item.title)}</h5>
              ${listMarkup(item.theory || [], "concept-theory")}
              ${hasExample ? `
                <div class="concept-example">
                  <h6>${escapeHtml(example.title || "Ví dụ minh họa")}</h6>
                  ${example.statement ? `<p>${escapeHtml(example.statement)}</p>` : ""}
                  <div class="concept-detail-grid">
                    ${example.idea ? `
                      <div>
                        <strong>Ý tưởng</strong>
                        <p>${escapeHtml(example.idea)}</p>
                      </div>
                    ` : ""}
                    ${example.method ? `
                      <div>
                        <strong>Phương pháp</strong>
                        <p>${escapeHtml(example.method)}</p>
                      </div>
                    ` : ""}
                  </div>
                  <div class="concept-code-grid">
                    ${example.pseudo ? `
                      <div>
                        <strong>Mã giả</strong>
                        ${addCode(`Mã giả ${item.title}`, example.pseudo, "pseudo")}
                      </div>
                    ` : ""}
                    ${example.code ? `
                      <div>
                        <strong>Code mẫu C++17</strong>
                        ${addCode(`C++17 ${item.title}`, example.code)}
                      </div>
                    ` : ""}
                  </div>
                </div>
              ` : ""}
              ${(item.practice || []).length ? `
                <div class="concept-practice-wrap">
                  <h6>Bài tập luyện riêng</h6>
                  ${listMarkup(item.practice, "concept-practice")}
                </div>
              ` : ""}
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function quickExamplesMarkup(items) {
  if (!items || !items.length) return "";
  return `
    <section class="quick-example-section">
      <h4 class="section-title">Ví dụ nhìn nhanh</h4>
      <div class="quick-example-grid">
        ${items.map((item) => `
          <article class="quick-example-card">
            <h5>${escapeHtml(item.title)}</h5>
            <p class="quick-problem">${escapeHtml(item.problem)}</p>
            <ol>
              ${(item.steps || []).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
            </ol>
            <p class="quick-result"><strong>Kết luận:</strong> ${escapeHtml(item.result)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function practiceMarkup(items, addCode) {
  if (!items || !items.length) return "";
  const hasSolvedItems = items.some((item) => item.statement || item.idea || item.method || item.explanation || item.sampleInput || item.sampleOutput || item.pseudo || item.code);
  return `
    <section class="practice-section">
      <h4 class="section-title">${hasSolvedItems ? "Bài tập giải mẫu" : "Bài tập gợi ý"}</h4>
      <div class="practice-grid ${hasSolvedItems ? "has-solved" : ""}">
        ${items.map((item) => `
          <article class="practice-card">
            <h5>${escapeHtml(item.title)}</h5>
            ${item.statement ? `<p class="practice-statement">${escapeHtml(item.statement)}</p>` : ""}
            ${item.focus ? `<p><strong>Trọng tâm:</strong> ${escapeHtml(item.focus)}</p>` : ""}
            ${item.hint ? `<p><strong>Gợi ý:</strong> ${escapeHtml(item.hint)}</p>` : ""}
            ${item.idea || item.method ? `
              <div class="practice-detail-grid">
                ${item.idea ? `
                  <div>
                    <strong>Ý tưởng</strong>
                    <p>${escapeHtml(item.idea)}</p>
                  </div>
                ` : ""}
                ${item.method ? `
                  <div>
                    <strong>Phương pháp</strong>
                    <p>${escapeHtml(item.method)}</p>
                  </div>
                ` : ""}
              </div>
            ` : ""}
            ${item.sampleInput || item.sampleOutput ? `
              <div class="practice-sample-grid">
                ${item.sampleInput ? `
                  <div>
                    <strong>Input mẫu</strong>
                    ${addCode(`Input mẫu ${item.title}`, item.sampleInput, "sample")}
                  </div>
                ` : ""}
                ${item.sampleOutput ? `
                  <div>
                    <strong>Output mẫu</strong>
                    ${addCode(`Output mẫu ${item.title}`, item.sampleOutput, "sample")}
                  </div>
                ` : ""}
              </div>
            ` : ""}
            ${item.explanation ? `<p><strong>Giải thích mẫu:</strong> ${escapeHtml(item.explanation)}</p>` : ""}
            ${item.pseudo || item.code ? `
              <div class="practice-code-grid">
                ${item.pseudo ? `
                  <div>
                    <strong>Mã giả</strong>
                    ${addCode(`Mã giả ${item.title}`, item.pseudo, "pseudo")}
                  </div>
                ` : ""}
                ${item.code ? `
                  <div>
                    <strong>Code mẫu C++17</strong>
                    ${addCode(`C++17 ${item.title}`, item.code)}
                  </div>
                ` : ""}
              </div>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function referencesMarkup(items) {
  if (!items || !items.length) return "";
  return `
    <section class="reference-section">
      <h4 class="section-title">Nguồn VNOI tham khảo</h4>
      <div class="reference-list">
        ${items.map((item) => `
          <a class="reference-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(item.title)}
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function renderVisual(topic) {
  const visual = visualLibrary[topic.visual] || visualLibrary.flow;
  let body = "";

  if (visual.type === "flow") {
    body = `<div class="flow-visual">${visual.items.map((item, index) => `
      <div class="flow-step">
        <span>${index + 1}</span>
        <span>${escapeHtml(item)}</span>
      </div>
    `).join("")}</div>`;
  }

  if (visual.type === "cells") {
    body = `<div class="${visual.className}">${visual.items.map((item) => `
      <span class="array-cell">${escapeHtml(item)}</span>
    `).join("")}</div>`;
  }

  if (visual.type === "stack") {
    body = `<div class="stack-visual">${visual.items.map((item) => `
      <span class="stack-block">${escapeHtml(item)}</span>
    `).join("")}</div>`;
  }

  if (visual.type === "pairs") {
    body = `<div class="flow-visual">${visual.items.map(([left, right], index) => `
      <div class="flow-step">
        <span>${index + 1}</span>
        <span>${escapeHtml(left)} : ${escapeHtml(right)}</span>
      </div>
    `).join("")}</div>`;
  }

  if (visual.type === "grid") {
    body = `<div class="dp-visual">${visual.items.flat().map((item) => `
      <span class="dp-cell">${escapeHtml(item || ".")}</span>
    `).join("")}</div>`;
  }

  if (visual.type === "graph") {
    const edges = visual.edges.map(([x1, y1, x2, y2]) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      return `<span class="edge" style="left:${x1}px;top:${y1}px;width:${length}px;transform:rotate(${angle}deg)"></span>`;
    }).join("");
    const nodes = visual.nodes.map(([label, x, y]) => `
      <span class="node" style="left:${x}px;top:${y}px">${escapeHtml(label)}</span>
    `).join("");
    body = `<div class="graph-visual">${edges}${nodes}</div>`;
  }

  return `
    <div class="visual-card">
      <div class="visual-stage">${body}</div>
      <p class="visual-caption">${escapeHtml(topic.visualCaption)}</p>
    </div>
  `;
}

function renderCodeBlock(label, codeIndex, className = "") {
  return `
    <div class="code-shell ${className}">
      <div class="code-head">
        <span>${escapeHtml(label)}</span>
        <button class="copy-button" type="button" data-code-index="${codeIndex}">Copy</button>
      </div>
      <pre><code></code></pre>
    </div>
  `;
}

function renderStaticCodeBlock(label, code, className = "") {
  return `
    <div class="code-shell ${className}">
      <div class="code-head">
        <span>${escapeHtml(label)}</span>
      </div>
      <pre><code>${escapeHtml(code || "(trống)")}</code></pre>
    </div>
  `;
}

const level2OjPatternOrder = ["binary", "compression", "stack", "queue", "mitm", "math", "prefix", "general"];

const level2OjPatterns = {
  binary: {
    title: "Binary Search",
    shortGuide: "Tìm tính đơn điệu, viết hàm can(mid) hoặc dùng lower_bound/upper_bound trên dãy đã sort.",
    checklist: [
      "Xác định đang tìm vị trí, số lượng hay đáp án tối ưu.",
      "Nếu là tối ưu, đặt mid là đáp án thử và chứng minh can(mid) đơn điệu.",
      "Chọn biên chắc chắn chứa đáp án, ưu tiên long long cho tổng/giá trị lớn.",
      "Với mảng đã sort, dùng lower_bound/upper_bound để giảm lỗi biên."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

bool can(const vector<long long>& a, long long limit, int k) {
    int parts = 1;
    long long sum = 0;
    for (long long x : a) {
        if (x > limit) return false;
        if (sum + x > limit) {
            parts++;
            sum = 0;
        }
        sum += x;
    }
    return parts <= k;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    long long l = 0, r = 0;
    for (long long &x : a) {
        cin >> x;
        l = max(l, x);
        r += x;
    }

    while (l < r) {
        long long mid = l + (r - l) / 2;
        if (can(a, mid, k)) r = mid;
        else l = mid + 1;
    }

    cout << l << '\n';
    return 0;
}`
  },
  compression: {
    title: "Coordinate Compression",
    shortGuide: "Gom mọi giá trị cần xét, sort unique, rồi ánh xạ giá trị lớn về rank nhỏ để dùng mảng/Fenwick/đếm đoạn.",
    checklist: [
      "Gom đủ các giá trị xuất hiện trong dữ liệu, truy vấn và biên đoạn nếu bài cần.",
      "Sort rồi erase unique để có bảng giá trị phân biệt.",
      "Rank 0-based dùng cho vector, rank 1-based dùng cho Fenwick.",
      "Không dùng rank để tính khoảng cách thật giữa hai tọa độ."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<long long> a(n), values;
    values.reserve(n);

    for (long long &x : a) {
        cin >> x;
        values.push_back(x);
    }

    sort(values.begin(), values.end());
    values.erase(unique(values.begin(), values.end()), values.end());

    for (long long x : a) {
        int rank1 = int(lower_bound(values.begin(), values.end(), x) - values.begin()) + 1;
        cout << rank1 << ' ';
    }
    cout << '\n';
    return 0;
}`
  },
  stack: {
    title: "Stack",
    shortGuide: "Dùng LIFO cho thao tác cuối dãy, ngoặc, undo, hoặc monotonic stack để tìm phần tử gần nhất.",
    checklist: [
      "Nếu bài hỏi phần tử gần nhất lớn/nhỏ hơn, thử stack đơn điệu.",
      "Mỗi phần tử chỉ nên được push/pop tối đa một lần.",
      "Luôn kiểm tra empty() trước khi gọi top().",
      "Nếu cần lưu vị trí, push chỉ số thay vì push giá trị."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<long long> a(n), ans(n, -1);
    for (long long &x : a) cin >> x;

    stack<int> st;
    for (int i = n - 1; i >= 0; --i) {
        while (!st.empty() && a[st.top()] <= a[i]) st.pop();
        if (!st.empty()) ans[i] = a[st.top()];
        st.push(i);
    }

    for (long long x : ans) cout << x << ' ';
    cout << '\n';
    return 0;
}`
  },
  queue: {
    title: "Queue / Deque / Priority Queue",
    shortGuide: "Dùng queue cho thứ tự FIFO, deque cho cửa sổ trượt, priority_queue cho top-k/min-max động.",
    checklist: [
      "Nếu phần tử vào trước ra trước, dùng queue.",
      "Nếu cửa sổ trượt cần max/min, dùng deque đơn điệu lưu chỉ số.",
      "Nếu luôn lấy phần tử tốt nhất hiện tại, dùng priority_queue.",
      "Với min-heap, dùng greater<T> hoặc đảo dấu giá trị."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (long long &x : a) cin >> x;

    deque<int> dq;
    for (int i = 0; i < n; ++i) {
        while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
        dq.push_back(i);

        if (i >= k - 1) cout << a[dq.front()] << ' ';
    }
    cout << '\n';
    return 0;
}`
  },
  mitm: {
    title: "Chia Đôi Tập",
    shortGuide: "Khi n khoảng 30-40 và mỗi phần tử chọn/không chọn, tách mảng làm hai nửa rồi ghép kết quả.",
    checklist: [
      "Chia tập thành hai nửa có kích thước gần bằng nhau.",
      "Sinh toàn bộ tổng/trạng thái của từng nửa.",
      "Sort một nửa để ghép bằng binary search hoặc two pointers.",
      "Dùng long long vì tổng tập con rất dễ vượt int."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

vector<long long> buildSums(const vector<long long>& a) {
    int n = a.size();
    vector<long long> sums;
    sums.reserve(1 << n);
    for (int mask = 0; mask < (1 << n); ++mask) {
        long long s = 0;
        for (int i = 0; i < n; ++i) {
            if (mask >> i & 1) s += a[i];
        }
        sums.push_back(s);
    }
    return sums;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long target;
    cin >> n >> target;
    vector<long long> a(n);
    for (long long &x : a) cin >> x;

    vector<long long> left(a.begin(), a.begin() + n / 2);
    vector<long long> right(a.begin() + n / 2, a.end());
    vector<long long> L = buildSums(left);
    vector<long long> R = buildSums(right);
    sort(R.begin(), R.end());

    long long ans = 0;
    for (long long x : L) {
        auto range = equal_range(R.begin(), R.end(), target - x);
        ans += range.second - range.first;
    }

    cout << ans << '\n';
    return 0;
}`
  },
  math: {
    title: "Math / Modulo",
    shortGuide: "Tách bài về gcd, modulo, lũy thừa nhanh, nhân modulo lớn, đồng dư hoặc công thức số học.",
    checklist: [
      "Đọc giới hạn để biết có cần __int128 khi nhân hay không.",
      "Dùng gcd/extended gcd cho phương trình ax + by = c và nghịch đảo modulo tổng quát.",
      "Dùng lũy thừa nhanh thay vì pow(double).",
      "Chuẩn hóa số âm bằng (x % mod + mod) % mod."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

using int64 = long long;

int64 mulMod(int64 a, int64 b, int64 mod) {
    return (int64)((__int128)a * b % mod);
}

int64 powMod(int64 a, int64 e, int64 mod) {
    int64 res = 1 % mod;
    a %= mod;
    while (e > 0) {
        if (e & 1) res = mulMod(res, a, mod);
        a = mulMod(a, a, mod);
        e >>= 1;
    }
    return res;
}

int64 extGcd(int64 a, int64 b, int64 &x, int64 &y) {
    if (b == 0) {
        x = 1;
        y = 0;
        return a;
    }
    int64 x1, y1;
    int64 g = extGcd(b, a % b, x1, y1);
    x = y1;
    y = x1 - (a / b) * y1;
    return g;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long a, b, mod;
    cin >> a >> b >> mod;
    cout << powMod(a, b, mod) << '\n';
    return 0;
}`
  },
  prefix: {
    title: "Prefix / Sort / Two Pointers",
    shortGuide: "Dùng sắp xếp, prefix sum, đếm tần suất hoặc hai con trỏ để hạ độ phức tạp từ O(n^2).",
    checklist: [
      "Nếu hỏi tổng đoạn, tạo prefix sum.",
      "Nếu hỏi cặp/tập sau khi sort, thử two pointers hoặc lower_bound.",
      "Nếu hỏi số lần xuất hiện, dùng map/unordered_map/vector cnt sau khi nén.",
      "Kiểm tra kỹ chỉ số l, r vì prefix thường lệch 1 đơn vị."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<long long> a(n + 1), pref(n + 1, 0);
    for (int i = 1; i <= n; ++i) {
        cin >> a[i];
        pref[i] = pref[i - 1] + a[i];
    }

    while (q--) {
        int l, r;
        cin >> l >> r;
        cout << pref[r] - pref[l - 1] << '\n';
    }

    return 0;
}`
  },
  general: {
    title: "Khung Tổng Hợp",
    shortGuide: "Dùng khi bài chưa lộ rõ dạng: đọc giới hạn, chọn O(n), O(n log n) hay O(sqrt n), rồi tách solve() để thử từng ý.",
    checklist: [
      "Gạch chân input lớn nhất và kiểu dữ liệu có thể tràn.",
      "Tạo test nhỏ để so với brute force nếu thuật toán tối ưu phức tạp.",
      "Viết solve() độc lập để dễ xử lý nhiều test.",
      "Sau khi AC mẫu, thử biên n = 1, toàn số bằng nhau, số âm và đáp án rỗng."
    ],
    code: String.raw`#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (long long &x : a) cin >> x;

    // Bước 1: đọc giới hạn và chọn cấu trúc dữ liệu phù hợp.
    // Bước 2: thay phần dưới bằng kỹ thuật nhận ra từ đề:
    // sort + two pointers, prefix sum, map đếm, binary search, stack/deque...
    sort(a.begin(), a.end());

    long long answer = 0;
    for (long long x : a) {
        answer += x;
    }

    cout << answer << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}`
  }
};

function normalizeOjText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function inferLevel2OjPattern(problem, moduleTitle) {
  const text = normalizeOjText(`${moduleTitle} ${problem.title} ${problem.href}`);

  if (text.includes("binary search")) return "binary";
  if (text.includes("coordinate")) return "compression";
  if (text.includes("stack")) return "stack";
  if (text.includes("queue") || text.includes("deque") || text.includes("priority")) return "queue";
  if (text.includes("chia doi tap")) return "mitm";
  if (text.includes("math")) return "math";

  if (/(diophantine|chinese|mod|prime|nguyen to|uoc|gcd|lcm|pow|fastpow|eqn|phuong trinh|phan so|duprime|supperprime|threeprimes|sumdiv)/.test(text)) return "math";
  if (/(stack|brack|ngoac|patrik|sortcar)/.test(text)) return "stack";
  if (/(queue|deque|pq|heap|kpair|roomalloc|ropemerge|bfsez|medseg)/.test(text)) return "queue";
  if (/(tknp|timcapso|binary|search|chiamang|xuongnhamay|median|shop|submat|demcap|nearest|capso)/.test(text)) return "binary";
  if (/(compress|cover|segment|doan|upseg|paint_painarea|toa do)/.test(text)) return "compression";
  if (/(sumsub|subset|applediv|bipalin|tap con)/.test(text)) return "mitm";
  if (/(prefix|sum|cnt|count|thong ke|day|mang|array|doancanbang|sumxx|sumrec|tang)/.test(text)) return "prefix";

  return "general";
}

function shouldShowLevel2OjProblemSolution(moduleTitle) {
  return Boolean(moduleTitle);
}

function getLevel2OjSampleInfo(problem) {
  return window.level2OjSamples?.byHref?.[problem.href] || null;
}

function getExactLevel2Solution(problem) {
  return window.level2Solutions?.byHref?.[problem.href] || null;
}

function commentForCodeLine(line, patternTitle) {
  const trimmed = line.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("#include")) return "Nạp thư viện cần dùng cho lời giải.";
  if (trimmed.startsWith("using namespace")) return "Dùng trực tiếp tên trong namespace std.";
  if (trimmed.startsWith("using ")) return "Đặt bí danh kiểu dữ liệu để code gọn hơn.";
  if (trimmed.includes("ios::sync_with_stdio")) return "Tăng tốc nhập xuất C++.";
  if (trimmed.includes("cin.tie")) return "Tách cin khỏi cout để nhập xuất nhanh hơn.";
  if (trimmed.startsWith("int main")) return "Hàm chính của chương trình.";
  if (trimmed.startsWith("void solve")) return "Tách phần xử lý một test vào hàm solve.";
  if (trimmed.startsWith("bool can")) return "Hàm kiểm tra điều kiện thử trong binary search.";
  if (trimmed.startsWith("vector")) return "Khai báo mảng động phục vụ xử lý dữ liệu.";
  if (trimmed.startsWith("stack")) return "Khai báo stack để lưu trạng thái cần xử lý sau cùng.";
  if (trimmed.startsWith("deque")) return "Khai báo deque để thêm/xóa hai đầu khi duyệt.";
  if (trimmed.startsWith("long long") || trimmed.startsWith("int ")) return "Khai báo biến cần dùng trong lời giải.";
  if (trimmed.includes("cin >>")) return "Đọc dữ liệu theo đúng thứ tự input.";
  if (trimmed.includes("cout <<")) return "In kết quả theo đúng định dạng output.";
  if (trimmed.startsWith("for ")) return "Duyệt qua các phần tử hoặc trạng thái cần xét.";
  if (trimmed.startsWith("while ")) return "Lặp cho tới khi điều kiện xử lý kết thúc.";
  if (trimmed.startsWith("if ")) return "Rẽ nhánh theo điều kiện của thuật toán.";
  if (trimmed.startsWith("else")) return "Xử lý trường hợp còn lại.";
  if (trimmed.includes("sort(")) return "Sắp xếp để dùng tìm kiếm, ghép cặp hoặc nén dữ liệu.";
  if (trimmed.includes("lower_bound") || trimmed.includes("upper_bound")) return "Tìm vị trí bằng binary search trong mảng đã sắp xếp.";
  if (trimmed.includes("push_back")) return "Thêm phần tử vào cuối vector.";
  if (trimmed.includes("pop")) return "Loại bỏ phần tử không còn cần dùng.";
  if (trimmed.includes("return")) return "Trả kết quả hoặc kết thúc chương trình.";
  if (trimmed === "{" || trimmed === "}") return "Mở hoặc đóng một khối lệnh.";
  return `Dòng xử lý trong code C++17 theo dạng ${patternTitle}.`;
}

function ensureInlineCodeComments(code, patternTitle) {
  return String(code || "")
    .split("\n")
    .map((line) => {
      if (!line.trim() || line.includes("//")) return line;
      return `${line} // ${commentForCodeLine(line, patternTitle)}`;
    })
    .join("\n");
}

function splitSampleLines(value) {
  if (!value) return [];
  return String(value).replace(/\r/g, "").split("\n");
}

function describeTokenLine(line) {
  const tokens = String(line).trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return "dòng trống";
  if (tokens.length === 1) return `1 giá trị: ${tokens[0]}`;
  return `${tokens.length} giá trị: ${tokens.join(", ")}`;
}

function specificSampleSteps(problem, sample) {
  const title = normalizeOjText(`${problem.title} ${problem.href}`);
  const input = splitSampleLines(sample.input).map((line) => line.trim()).filter(Boolean);
  const tokens = input.join(" ").split(/\s+/).filter(Boolean);

  if (title.includes("phuongtrinh_diophantine") && tokens.length >= 3) {
    const [a, b, c] = tokens.slice(0, 3).map(Number);
    if ([a, b, c].every(Number.isFinite) && c <= 5000) {
      const pairs = [];
      for (let x = 1; x * a < c; x++) {
        const rest = c - a * x;
        if (rest > 0 && rest % b === 0) pairs.push([x, rest / b]);
      }
      return [
        `Đề cần đếm nghiệm nguyên dương của ${a} * x + ${b} * y = ${c}.`,
        `Thử các x dương sao cho ${a} * x < ${c}; với mỗi x, phần còn lại là ${c} - ${a} * x.`,
        pairs.length
          ? `Các cặp hợp lệ tìm được: ${pairs.map(([x, y]) => `(${x}, ${y})`).join(", ")}.`
          : "Không có cặp (x, y) nguyên dương nào làm phần còn lại chia hết.",
        `Vì có ${pairs.length} cặp hợp lệ nên output là ${pairs.length}.`
      ];
    }
  }

  if (title.includes("stackbs")) {
    const q = Number(tokens[0]);
    const operations = input.slice(1);
    const st = [];
    const log = [`q = ${q}, bắt đầu với stack rỗng [].`];
    operations.forEach((line, index) => {
      const parts = line.split(/\s+/).filter(Boolean);
      if (parts[0] === "1") {
        st.push(parts[1]);
        log.push(`Truy vấn ${index + 1}: push ${parts[1]}, stack thành [${st.join(", ")}].`);
      } else if (parts[0] === "2") {
        const removed = st.length ? st.pop() : null;
        log.push(`Truy vấn ${index + 1}: pop${removed === null ? " khi stack rỗng" : ` ${removed}`}, stack thành [${st.join(", ")}].`);
      } else if (parts[0] === "3") {
        log.push(`Truy vấn ${index + 1}: top là ${st.length ? st[st.length - 1] : -1}, in ra giá trị này.`);
      }
    });
    return log;
  }

  if (title.includes("jump") && tokens.length >= 2) {
    const n = Number(tokens[0]);
    const q = Number(tokens[1]);
    const heights = tokens.slice(2, 2 + n).map(Number);
    const queries = tokens.slice(2 + n, 2 + n + q).map(Number);
    if (Number.isFinite(n) && Number.isFinite(q) && heights.length === n && queries.length === q) {
      const next = Array(n + 1).fill(0);
      const jumps = Array(n + 1).fill(0);
      const st = [];
      const steps = [
        `n = ${n}, q = ${q}. Chiều cao các cột theo thứ tự là: ${heights.join(", ")}.`,
        "Duyệt từ phải sang trái, giữ stack các cột có chiều cao giảm dần để tìm cột cao hơn gần nhất bên phải."
      ];
      for (let i = n; i >= 1; i--) {
        const popped = [];
        while (st.length && heights[st[st.length - 1] - 1] <= heights[i - 1]) {
          popped.push(st.pop());
        }
        next[i] = st.length ? st[st.length - 1] : 0;
        jumps[i] = next[i] ? 1 + jumps[next[i]] : 0;
        if (n <= 12) {
          const removed = popped.length ? ` Loại khỏi stack các cột ${popped.join(", ")} vì không cao hơn ${heights[i - 1]}.` : "";
          const target = next[i] ? `cột cao hơn gần nhất là ${next[i]} (cao ${heights[next[i] - 1]})` : "không có cột cao hơn bên phải";
          steps.push(`Xét cột ${i} cao ${heights[i - 1]}.${removed} Kết luận ${target}, nên số bước từ cột ${i} là ${jumps[i]}.`);
        }
        st.push(i);
      }
      queries.forEach((x, index) => {
        const path = [];
        let current = x;
        while (current) {
          path.push(current);
          current = next[current];
        }
        const moves = Math.max(0, path.length - 1);
        steps.push(`Câu hỏi ${index + 1}: bắt đầu ở cột ${x}, đường nhảy là ${path.join(" -> ")}, có ${moves} bước nên in ${jumps[x]}.`);
      });
      steps.push(`Ghép các đáp án theo thứ tự truy vấn được output mẫu: ${queries.map((x) => jumps[x]).join(", ")}.`);
      return steps;
    }
  }

  if (title.includes("dosau")) {
    const s = sample.input.trim();
    const steps = [
      `Chuỗi cần xét là "${s}". depth bắt đầu bằng 0, best bắt đầu bằng 0.`,
      "Gặp '(' thì tăng depth, gặp ')' thì giảm depth, gặp chữ thường thì giữ nguyên."
    ];
    let depth = 0;
    let best = 0;
    let valid = true;
    [...s].forEach((ch, index) => {
      if (ch === "(") {
        depth++;
        best = Math.max(best, depth);
        steps.push(`Ký tự ${index + 1} là '(': depth tăng lên ${depth}, best hiện tại là ${best}.`);
      } else if (ch === ")") {
        depth--;
        if (depth < 0) valid = false;
        steps.push(`Ký tự ${index + 1} là ')': depth giảm còn ${depth}${depth < 0 ? ", chuỗi mất cân bằng" : ""}.`);
      } else {
        steps.push(`Ký tự ${index + 1} là '${ch}': không phải ngoặc nên depth vẫn là ${depth}.`);
      }
    });
    if (depth !== 0) valid = false;
    steps.push(valid ? `Kết thúc chuỗi, depth = 0 nên chuỗi cân bằng; độ sâu lớn nhất là ${best}.` : `Kết thúc chuỗi, depth = ${depth} hoặc từng bị âm nên chuỗi không cân bằng.`);
    steps.push(`Vì vậy output mẫu là ${valid ? best : -1}.`);
    return steps;
  }

  if (title.includes("nearestf") || title.includes("phan_so_gan_nhat")) {
    const x = Number(tokens[0]);
    const n = Number(tokens[1]);
    if (Number.isFinite(x) && Number.isFinite(n)) {
      let bestP = 0;
      let bestQ = 1;
      let bestDiff = Infinity;
      const interesting = [];
      for (let q = 1; q <= n; q++) {
        const candidates = new Set([Math.floor(x * q), Math.round(x * q), Math.ceil(x * q)]);
        for (const p of candidates) {
          if (p < 0) continue;
          const diff = Math.abs(p / q - x);
          if (diff < bestDiff - 1e-15 || (Math.abs(diff - bestDiff) <= 1e-15 && q < bestQ)) {
            bestDiff = diff;
            bestP = p;
            bestQ = q;
          }
        }
        if (n <= 12) interesting.push(`Mẫu q = ${q}: tử gần ${x} * ${q} là ${Math.round(x * q)}, sai số tốt nhất hiện tại là ${bestDiff.toFixed(12)} với ${bestP}/${bestQ}.`);
      }
      const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
      const g = gcd(bestP, bestQ) || 1;
      return [
        `Cần tìm phân số p/q gần ${x} nhất với 1 <= q <= ${n}.`,
        "Với một q cố định, p tốt nhất sẽ nằm quanh x*q, nên chỉ cần thử floor/round/ceil của x*q.",
        ...interesting,
        `Phân số tốt nhất trước khi rút gọn là ${bestP}/${bestQ}, rút gọn được ${bestP / g}/${bestQ / g}.`,
        `Vì vậy output mẫu là "${bestP / g} ${bestQ / g}".`
      ];
    }
  }

  if (title.includes("bai2_ts10_chuyentranphu_haiphong")) {
    const n = Number(tokens[0]);
    const s = tokens[1] || "";
    if (Number.isFinite(n) && s.length === n) {
      const explainTarget = (target) => {
        let prefix = 0;
        const first = new Map([[0, 0]]);
        let best = 0;
        const detail = [];
        for (let i = 1; i <= n; i++) {
          prefix += s[i - 1] === target ? 1 : -1;
          for (const need of [prefix - 1, prefix - 2]) {
            if (first.has(need)) best = Math.max(best, i - first.get(need));
          }
          if (!first.has(prefix)) first.set(prefix, i);
          detail.push(`i = ${i}, ký tự ${s[i - 1]}, prefix theo ${target} là ${prefix}, best tạm cho ${target} là ${best}.`);
        }
        return { target, best, detail };
      };
      const runs = [..."AUGC"].map(explainTarget);
      const bestRun = runs.reduce((best, item) => item.best > best.best ? item : best, runs[0]);
      return [
        `Đề cần đoạn dài nhất sao cho có một nucleotide xuất hiện floor(len/2)+1 lần.`,
        `Với một nucleotide cố định, gán nó là +1, ba loại còn lại là -1. Khi đó đoạn hợp lệ có tổng bằng 1 nếu độ dài lẻ, hoặc bằng 2 nếu độ dài chẵn.`,
        `Chuỗi mẫu là ${s}; ta thử lần lượt A, U, G, C.`,
        ...bestRun.detail,
        `Trong bốn nucleotide, độ dài lớn nhất tìm được là ${Math.max(...runs.map((item) => item.best))}.`,
        `Vì vậy output mẫu là ${Math.max(...runs.map((item) => item.best))}.`
      ];
    }
  }

  if (title.includes("supperprime")) {
    const s = tokens[0] || "";
    const isPrime = (value) => {
      if (value < 2) return false;
      if (value % 2 === 0) return value === 2;
      for (let d = 3; d * d <= value; d += 2) {
        if (value % d === 0) return false;
      }
      return true;
    };
    if (/^\d+$/.test(s)) {
      const checks = [];
      let ok = true;
      for (let start = 0; start < s.length; start++) {
        const suffix = Number(s.slice(start));
        const prime = isPrime(suffix);
        if (!prime) ok = false;
        checks.push(`Bỏ ${start} chữ số bên trái được hậu tố ${s.slice(start)} = ${suffix}, số này ${prime ? "là" : "không phải"} nguyên tố.`);
      }
      return [
        `Kiểm tra số ${s} bằng cách xét lần lượt chính nó và các hậu tố sau khi bỏ dần chữ số bên trái.`,
        ...checks,
        `Tất cả hậu tố ${ok ? "đều nguyên tố" : "không đều nguyên tố"}, nên output là ${ok ? "YES" : "NO"}.`
      ];
    }
  }

  if (title.includes("chinese_modulo") && tokens.length >= 3) {
    const n = Number(tokens[0]);
    const pairs = [];
    for (let i = 0; i < n; i++) {
      pairs.push([Number(tokens[1 + i * 2]), Number(tokens[2 + i * 2])]);
    }
    const limit = pairs.reduce((acc, [, mod]) => acc * mod, 1);
    if (pairs.every(([r, mod]) => Number.isFinite(r) && Number.isFinite(mod)) && limit <= 100000) {
      let answer = 0;
      while (answer < limit && !pairs.every(([r, mod]) => answer % mod === r)) answer++;
      return [
        `Có ${n} điều kiện đồng dư: ${pairs.map(([r, mod]) => `x mod ${mod} = ${r}`).join("; ")}.`,
        `Thử x tăng dần từ 0 và kiểm tra đồng thời tất cả điều kiện.`,
        `Giá trị nhỏ nhất thỏa toàn bộ hệ là ${answer}.`,
        `Vì vậy output mẫu là ${answer}.`
      ];
    }
  }

  if (title.includes("salanchokhach")) {
    const m = Number(tokens[0]);
    const n = Number(tokens[1]);
    const limit = Number(tokens[2]);
    if (Number.isFinite(m) && Number.isFinite(n) && Number.isFinite(limit)) {
      const start = Array.from({ length: n + 1 }, () => []);
      for (let i = 0; i < m; i++) {
        const a = Number(tokens[3 + i * 3]);
        const b = Number(tokens[4 + i * 3]);
        const c = Number(tokens[5 + i * 3]);
        start[a].push([b, c]);
      }
      const active = new Map();
      let onboard = 0;
      let served = 0;
      const steps = [
        `Có ${m} nhóm khách, ${n} bến, sức chứa sà lan L = ${limit}.`,
        "Quét bến từ 1 đến n. Ở mỗi bến cho khách tới nơi xuống trước, nhận khách mới, nếu quá tải thì bỏ bớt khách có bến xuống xa nhất."
      ];
      for (let station = 1; station <= n; station++) {
        if (active.has(station)) {
          const count = active.get(station);
          onboard -= count;
          active.delete(station);
          steps.push(`Bến ${station}: ${count} khách xuống, còn ${onboard} khách trên sà lan.`);
        }
        for (const [to, count] of start[station]) {
          active.set(to, (active.get(to) || 0) + count);
          onboard += count;
          served += count;
          steps.push(`Bến ${station}: tạm nhận ${count} khách đi tới bến ${to}, onboard = ${onboard}, tổng đã nhận = ${served}.`);
        }
        while (onboard > limit) {
          const farthest = Math.max(...active.keys());
          const remove = Math.min(active.get(farthest), onboard - limit);
          active.set(farthest, active.get(farthest) - remove);
          onboard -= remove;
          served -= remove;
          if (active.get(farthest) === 0) active.delete(farthest);
          steps.push(`Bến ${station}: quá sức chứa, bỏ ${remove} khách có bến xuống xa nhất là ${farthest}; onboard = ${onboard}, tổng phục vụ còn ${served}.`);
        }
      }
      steps.push(`Sau khi quét hết các bến, số khách phục vụ tối đa là ${served}.`);
      return steps;
    }
  }

  return [];
}

function buildGenericSampleSteps(problem, patternKey, sample) {
  const pattern = level2OjPatterns[patternKey];
  const inputLines = splitSampleLines(sample.input);
  const outputLines = splitSampleLines(sample.output);
  const inputTokens = inputLines.join(" ").trim().split(/\s+/).filter(Boolean);
  const outputTokens = outputLines.join(" ").trim().split(/\s+/).filter(Boolean);
  const steps = [
    `Sample ${sample.number}: input có ${inputLines.length || 0} dòng, ${inputTokens.length} token; output có ${outputLines.length || 0} dòng, ${outputTokens.length} token.`,
    ...inputLines.map((line, index) => `Đọc dòng input ${index + 1}: "${line}" (${describeTokenLine(line)}).`),
    `Nhận dạng tạm theo nhóm ${pattern.title}: ${pattern.shortGuide}`,
    "Khi chạy tay, tạo bảng biến sau mỗi dòng input: biến nào đọc xong phải ghi giá trị ngay, mảng/truy vấn nào xuất hiện thì xử lý đúng thứ tự.",
    "Đối chiếu từng token output từ trái sang phải; nếu có nhiều dòng output thì thứ tự dòng phải khớp tuyệt đối với sample.",
    ...outputLines.map((line, index) => `Sau khi xử lý, dòng output ${index + 1} phải là "${line}".`),
    "Nếu kết quả khác output mẫu, kiểm tra lại ba lỗi hay gặp: đọc thiếu dữ liệu, lệch chỉ số 0/1-based, hoặc chọn sai độ phức tạp so với giới hạn đề."
  ];
  return steps;
}

function renderLevel2OjSampleAnalysis(problem, patternKey) {
  const sampleInfo = getLevel2OjSampleInfo(problem);
  if (!sampleInfo) {
    return `
      <div class="oj-sample-empty">
        Chưa có dữ liệu sample text cho bài này trong file trích xuất. Mở đề gốc để xem sample và tự đối chiếu theo code mẫu.
      </div>
    `;
  }

  if (!sampleInfo.samples?.length) {
    return `
      <div class="oj-sample-empty">
        OJ không cung cấp sample input/output dạng text cho bài này, hoặc đề được nhúng bằng ảnh nên không thể trích sample tự động. Không bịa test mẫu; hãy mở đề gốc để xem ảnh đề và tự nhập lại sample nếu có.
      </div>
    `;
  }

  return `
    <div class="oj-sample-stack">
      ${sampleInfo.samples.map((sample) => {
        const specific = specificSampleSteps(problem, sample);
        const generic = buildGenericSampleSteps(problem, patternKey, sample);
        const steps = specific.length ? [...specific, ...generic] : generic;
        return `
          <article class="oj-sample-card">
            <h5>Sample ${sample.number}</h5>
            <div class="oj-sample-io">
              <div>
                <strong>Input mẫu ${sample.number}</strong>
                ${renderStaticCodeBlock(`Input ${sample.number}`, sample.input, "sample")}
              </div>
              <div>
                <strong>Output mẫu ${sample.number}</strong>
                ${renderStaticCodeBlock(`Output ${sample.number}`, sample.output, "sample")}
              </div>
            </div>
            <strong>Chạy tay chi tiết</strong>
            <ol class="oj-sample-steps">
              ${steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
            </ol>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function getLevel2OjProblemSolution(problem, patternKey) {
  const cleanTitle = problem.title.replace(/^\s*\d+\.\s*/, "");
  const templates = {
    binary: {
      idea: `Với bài ${cleanTitle}, trước hết hãy tìm xem đề đang hỏi vị trí, số lượng hay một giá trị tối ưu. Nếu khi tăng đáp án thử mà điều kiện chuyển một chiều, dùng binary search on answer; nếu dữ liệu đã sort, dùng lower_bound/upper_bound.`,
      steps: [
        "Đọc giới hạn để quyết định O(log n), O(n log n) hay O(n log V).",
        "Xác định miền tìm kiếm: chỉ số trong mảng, giá trị đáp án, hoặc khoảng cách/chi phí.",
        "Viết hàm kiểm tra can(mid) thật rõ nếu tìm trên đáp án.",
        "Chạy binary search, sau đó tự kiểm tra lại đáp án ở biên trái/phải."
      ],
      testAnalysis: [
        "Test nhỏ nhất: n = 1 hoặc chỉ có một đáp án hợp lệ.",
        "Test biên: đáp án nằm đúng ở l hoặc r.",
        "Test lặp giá trị: nếu dùng lower_bound/upper_bound, kiểm tra phần tử trùng nhau.",
        "Với sample của đề, ghi lại từng lần mid và kết quả can(mid) để xem hướng thu hẹp biên có đúng không."
      ]
    },
    compression: {
      idea: `Bài ${cleanTitle} có dấu hiệu giá trị lớn, tọa độ rời rạc hoặc cần đếm theo đoạn. Ta giữ thứ tự bằng cách nén giá trị về rank nhỏ rồi xử lý bằng mảng, prefix, Fenwick hoặc map.`,
      steps: [
        "Gom tất cả giá trị xuất hiện trong mảng, truy vấn và các mốc biên quan trọng.",
        "Sort, unique để tạo danh sách giá trị phân biệt.",
        "Đổi mỗi giá trị gốc sang rank bằng lower_bound.",
        "Xử lý bài toán trên rank, nhưng khi cần độ dài thật thì dùng lại giá trị gốc trong mảng values."
      ],
      testAnalysis: [
        "Test có số âm, số rất lớn và giá trị trùng nhau.",
        "Test chỉ có một giá trị phân biệt.",
        "Test đoạn chạm nhau ở biên để kiểm tra có cần thêm l - 1 hoặc r + 1 không.",
        "Với sample của đề, tự lập bảng value -> rank rồi so sánh từng thao tác sau nén."
      ]
    },
    stack: {
      idea: `Bài ${cleanTitle} nên nghĩ theo trạng thái mới nhất chưa xử lý. Nếu bài có thao tác cuối dãy, ngoặc, undo hoặc phần tử gần nhất, stack thường giúp thay vòng lặp lồng nhau bằng O(n).`,
      steps: [
        "Xác định stack lưu giá trị hay chỉ số.",
        "Trước mỗi top/pop phải kiểm tra stack có rỗng không.",
        "Nếu là monotonic stack, chọn stack tăng hay giảm theo yêu cầu gần nhất lớn hơn/nhỏ hơn.",
        "Mỗi phần tử chỉ push một lần và pop tối đa một lần."
      ],
      testAnalysis: [
        "Test stack rỗng rồi pop/top để tránh runtime error.",
        "Test dãy tăng hẳn và giảm hẳn để kiểm tra monotonic stack.",
        "Test ngoặc lồng nhau hoặc sai ngay từ ký tự đầu.",
        "Với sample của đề, vẽ cột stack sau từng thao tác push/pop."
      ]
    },
    queue: {
      idea: `Bài ${cleanTitle} có thể cần xử lý theo thứ tự đến trước, cửa sổ trượt hoặc chọn phần tử ưu tiên nhất. Queue, deque và priority_queue giúp giữ đúng thứ tự động trong lúc duyệt.`,
      steps: [
        "Dùng queue nếu phần tử vào trước phải được xử lý trước.",
        "Dùng deque nếu cần thêm/xóa hai đầu hoặc lấy max/min cửa sổ trượt.",
        "Dùng priority_queue nếu mỗi bước cần lấy phần tử nhỏ/lớn nhất hiện tại.",
        "Lưu chỉ số khi cần biết phần tử đã ra khỏi cửa sổ hay chưa."
      ],
      testAnalysis: [
        "Test hàng đợi chỉ có một phần tử.",
        "Test nhiều phần tử cùng độ ưu tiên.",
        "Test cửa sổ k = 1 và k = n.",
        "Với sample của đề, ghi lại nội dung queue/deque/heap sau từng bước xử lý."
      ]
    },
    mitm: {
      idea: `Bài ${cleanTitle} có dạng chọn hoặc không chọn nhiều phần tử nhưng n không quá lớn. Chia đôi tập giúp biến 2^n thành hai danh sách 2^(n/2), sau đó ghép bằng sort và binary search.`,
      steps: [
        "Chia mảng thành hai nửa trái/phải.",
        "Sinh toàn bộ tổng hoặc trạng thái của từng nửa.",
        "Sort một danh sách để ghép nhanh bằng equal_range, lower_bound hoặc two pointers.",
        "Dùng long long cho tổng và số cách."
      ],
      testAnalysis: [
        "Test n nhỏ để so sánh với brute force 2^n.",
        "Test target bằng 0 hoặc lớn hơn tổng toàn bộ.",
        "Test có nhiều tập con cho cùng một tổng để kiểm tra đếm trùng.",
        "Với sample của đề, liệt kê tổng nửa trái và nửa phải rồi ghép từng cặp."
      ]
    },
    math: {
      idea: `Bài ${cleanTitle} nên tách về công thức số học: gcd, đồng dư, lũy thừa nhanh, nhân modulo lớn, nguyên tố hoặc nghiệm phương trình. Điểm quan trọng là tránh tràn số và xử lý điều kiện tồn tại.`,
      steps: [
        "Rút gọn bài toán về công thức hoặc tính chất chia hết.",
        "Dùng gcd/extended gcd khi có phương trình tuyến tính hoặc nghịch đảo modulo.",
        "Dùng __int128 cho phép nhân khi giá trị có thể tới 1e18.",
        "Chuẩn hóa modulo âm bằng (x % mod + mod) % mod."
      ],
      testAnalysis: [
        "Test số nhỏ để tính tay.",
        "Test trường hợp không có nghiệm, ví dụ c không chia hết cho gcd(a, b).",
        "Test giá trị gần 1e18 để phát hiện tràn số.",
        "Với sample của đề, thay từng biến vào công thức trước khi code."
      ]
    },
    prefix: {
      idea: `Bài ${cleanTitle} thường cần trả lời nhanh tổng/đếm trên đoạn, tìm cặp sau khi sort hoặc gom tần suất. Hãy tiền xử lý prefix, sort hoặc bảng đếm để mỗi truy vấn không phải duyệt lại từ đầu.`,
      steps: [
        "Nếu hỏi tổng đoạn, tạo prefix sum 1-based.",
        "Nếu hỏi cặp, sort rồi dùng two pointers hoặc binary search.",
        "Nếu hỏi số lần xuất hiện, dùng map/unordered_map hoặc mảng đếm sau nén.",
        "So sánh với brute force trên test nhỏ để bắt lỗi lệch chỉ số."
      ],
      testAnalysis: [
        "Test đoạn bắt đầu ở 1 hoặc kết thúc ở n.",
        "Test toàn bộ phần tử bằng nhau.",
        "Test số âm nếu đề cho phép, vì tổng/prefix có thể giảm.",
        "Với sample của đề, lập bảng prefix hoặc tần suất rồi đối chiếu từng truy vấn."
      ]
    },
    general: {
      idea: `Bài ${cleanTitle} nằm trong nhóm tổng hợp nên bước quan trọng nhất là nhận dạng dạng bài từ giới hạn dữ liệu. Hãy thử viết brute force cho test nhỏ, sau đó thay bằng sort, prefix, map, stack, queue hoặc binary search tùy dấu hiệu.`,
      steps: [
        "Đọc kỹ input/output và ghi lại n, q, miền giá trị lớn nhất.",
        "Ước lượng độ phức tạp được phép: n <= 1e5 thường cần O(n log n) hoặc O(n).",
        "Tách solve(), đặt tên biến theo đúng ý nghĩa trong đề.",
        "Nếu chưa chắc thuật toán, tạo brute force cho test nhỏ để so đáp án."
      ],
      testAnalysis: [
        "Test nhỏ nhất để kiểm tra đọc/in đúng định dạng.",
        "Test có đáp án rỗng hoặc không tồn tại nếu đề cho phép.",
        "Test toàn giá trị bằng nhau, tăng dần, giảm dần.",
        "Với sample của đề, mô phỏng từng bước bằng bảng trước khi chạy code."
      ]
    }
  };

  return templates[patternKey] || templates.general;
}

function renderLevel2OjProblemSolution(problem, moduleTitle, patternKey, addCode) {
  if (!shouldShowLevel2OjProblemSolution(moduleTitle)) return "";
  const pattern = level2OjPatterns[patternKey];
  const solution = getLevel2OjProblemSolution(problem, patternKey);
  const exactSolution = getExactLevel2Solution(problem);
  return `
    <details class="oj-problem-solution">
      <summary>Hướng dẫn giải bài này</summary>
      <div class="oj-solution-body">
        <div class="oj-solution-block">
          <strong>Ý tưởng</strong>
          <p>${escapeHtml(exactSolution?.idea || solution.idea)}</p>
          ${exactSolution ? `
            <p class="oj-solution-verified">
              Đáp án riêng đã kiểm sample: ${escapeHtml((exactSolution.checkedSamples || []).map((item) => `#${item}`).join(", ") || "có")}.
              Độ phức tạp: ${escapeHtml(exactSolution.complexity || "đã ghi trong code")}.
            </p>
          ` : ""}
        </div>
        <div class="oj-solution-block">
          <strong>Cách làm</strong>
          ${listMarkup(solution.steps, "oj-solution-list")}
        </div>
        <div class="oj-solution-block">
          <strong>Phân tích test case</strong>
          ${renderLevel2OjSampleAnalysis(problem, patternKey)}
        </div>
        <div class="oj-solution-block">
          <strong>${exactSolution ? "Code C++17 đáp án riêng" : "Code C++17"}</strong>
          ${exactSolution ? `
            <p class="oj-solution-code-note">Code dưới đây là lời giải riêng cho bài này, có comment bên cạnh từng dòng và đã chạy qua sample đã trích từ đề.</p>
            ${addCode(`C++17 ${problem.title}`, exactSolution.code)}
          ` : `
            <div class="oj-sample-empty">
              Bài này chưa được đưa code lên vì chưa có lời giải riêng đã compile và chạy sample. Không hiển thị code khung để tránh nhầm với đáp án.
            </div>
          `}
        </div>
      </div>
    </details>
  `;
}

function renderLevel2OjGuide(addCode) {
  const data = window.level2Oj;
  if (!data?.modules?.length) return "";
  const checkedSolutionCount = Object.keys(window.level2Solutions?.byHref || {}).length;

  const patternCounts = Object.fromEntries(level2OjPatternOrder.map((key) => [key, 0]));
  data.modules.forEach((module) => {
    (module.problems || []).forEach((problem) => {
      patternCounts[inferLevel2OjPattern(problem, module.title)]++;
    });
  });

  const patternCards = level2OjPatternOrder.map((key) => {
    const pattern = level2OjPatterns[key];
    return `
      <article class="oj-pattern-card" data-oj-pattern-guide="${key}">
        <div class="oj-pattern-head">
          <h5>${escapeHtml(pattern.title)}</h5>
          <span>${patternCounts[key]} lượt bài</span>
        </div>
        <p>${escapeHtml(pattern.shortGuide)}</p>
        ${listMarkup(pattern.checklist, "oj-check-list")}
        <details class="oj-code-details">
          <summary>Code mẫu C++17</summary>
          ${addCode(`C++17 - ${pattern.title}`, pattern.code)}
        </details>
      </article>
    `;
  }).join("");

  const moduleCards = data.modules.map((module, moduleIndex) => {
    const problems = module.problems || [];
    return `
      <details class="oj-module" data-oj-module ${moduleIndex === 0 ? "open" : ""}>
        <summary>
          <span>${escapeHtml(module.title)}</span>
          <span class="oj-visible-count">${problems.length}/${problems.length} bài</span>
        </summary>
        <div class="oj-problem-list">
          ${problems.map((problem) => {
            const patternKey = inferLevel2OjPattern(problem, module.title);
            const pattern = level2OjPatterns[patternKey];
            const href = `https://oj.uniedu.vn${problem.href}`;
            const searchText = `${module.title} ${problem.title} ${problem.href} ${pattern.title}`.toLowerCase();
            const solutionMarkup = renderLevel2OjProblemSolution(problem, module.title, patternKey, addCode);
            const exactSolution = getExactLevel2Solution(problem);
            return `
              <article class="oj-problem-card ${solutionMarkup ? "has-solution" : ""}" data-oj-card data-oj-pattern="${patternKey}" data-oj-search="${escapeHtml(searchText)}" ${solutionMarkup ? 'role="button" tabindex="0" aria-expanded="false"' : ""}>
                <div class="oj-problem-main">
                  <span class="oj-index">#${problem.index}</span>
                  <div>
                    <h6>${escapeHtml(problem.title)}</h6>
                    <p>${escapeHtml(pattern.shortGuide)}</p>
                    ${solutionMarkup ? `<span class="oj-click-hint">Ấn vào bài để xem hướng dẫn</span>` : ""}
                  </div>
                </div>
                <div class="oj-problem-meta">
                  <span>${escapeHtml(pattern.title)}</span>
                  ${problem.score ? `<span>${escapeHtml(problem.score)} điểm</span>` : ""}
                  ${problem.ac ? `<span>${escapeHtml(problem.ac)} AC</span>` : ""}
                  ${exactSolution ? `<span class="oj-verified-chip">Đáp án đã kiểm</span>` : ""}
                  ${solutionMarkup ? `<span class="oj-guide-chip" data-oj-guide-chip>Hướng dẫn</span>` : ""}
                  <a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">Mở đề gốc</a>
                </div>
                ${solutionMarkup}
              </article>
            `;
          }).join("")}
        </div>
      </details>
    `;
  }).join("");

  return `
    <section class="oj-section">
      <div class="oj-section-head">
        <div>
          <h4 class="section-title">Bài tập OJ Level 2</h4>
          <p>Danh sách lấy từ roadmap Level 2: ${data.uniqueCount} bài duy nhất, ${data.rowCount} lượt xuất hiện trong 8 mô-đun. Chỉ bài có nhãn "Đáp án đã kiểm" mới hiển thị code C++17 vì đó là code riêng đã compile và chạy sample; hiện có ${checkedSolutionCount} bài như vậy.</p>
        </div>
        <a class="oj-source-link" href="${escapeHtml(data.source)}" target="_blank" rel="noopener noreferrer">Roadmap gốc</a>
      </div>

      <div class="oj-controls">
        <label>
          <span>Tìm bài</span>
          <input id="ojSearch" type="search" placeholder="Ví dụ: TKNP, stack, modulo">
        </label>
        <label>
          <span>Lọc dạng</span>
          <select id="ojPatternFilter">
            <option value="">Tất cả dạng</option>
            ${level2OjPatternOrder.map((key) => `<option value="${key}">${escapeHtml(level2OjPatterns[key].title)}</option>`).join("")}
          </select>
        </label>
        <p id="ojResultCount">${data.rowCount} lượt bài</p>
      </div>

      <div class="oj-note">
        <strong>Cách dùng:</strong> mở từng bài để xem ý tưởng, cách làm và phân tích sample thật. Code C++17 chỉ xuất hiện khi bài đã có lời giải riêng được compile và chạy sample; các bài còn lại không dùng code khung để tránh sai đáp án.
      </div>

      <div class="oj-pattern-grid">
        ${patternCards}
      </div>

      <div class="oj-modules">
        ${moduleCards}
      </div>
    </section>
  `;
}

function setupLevel2OjFilters() {
  const search = slide.querySelector("#ojSearch");
  const patternFilter = slide.querySelector("#ojPatternFilter");
  const resultCount = slide.querySelector("#ojResultCount");
  const cards = [...slide.querySelectorAll("[data-oj-card]")];
  const modules = [...slide.querySelectorAll("[data-oj-module]")];
  if (!search || !patternFilter || !cards.length) return;

  const applyFilter = () => {
    const query = normalizeOjText(search.value.trim());
    const pattern = patternFilter.value;
    let visibleTotal = 0;

    cards.forEach((card) => {
      const matchesQuery = !query || normalizeOjText(card.dataset.ojSearch || "").includes(query);
      const matchesPattern = !pattern || card.dataset.ojPattern === pattern;
      const visible = matchesQuery && matchesPattern;
      card.hidden = !visible;
      if (visible) visibleTotal++;
    });

    modules.forEach((module) => {
      const moduleCards = [...module.querySelectorAll("[data-oj-card]")];
      const visibleCards = moduleCards.filter((card) => !card.hidden).length;
      module.hidden = visibleCards === 0;
      const counter = module.querySelector(".oj-visible-count");
      if (counter) counter.textContent = `${visibleCards}/${moduleCards.length} bài`;
    });

    if (resultCount) resultCount.textContent = `${visibleTotal} lượt bài`;
  };

  search.addEventListener("input", applyFilter);
  patternFilter.addEventListener("change", applyFilter);
}

function setupLevel2OjProblemToggles() {
  const solutionCards = [...slide.querySelectorAll(".oj-problem-card.has-solution")];
  if (!solutionCards.length) return;

  const syncCard = (card, details) => {
    const isOpen = details.open;
    card.classList.toggle("is-expanded", isOpen);
    card.setAttribute("aria-expanded", String(isOpen));
    const chip = card.querySelector("[data-oj-guide-chip]");
    if (chip) chip.textContent = isOpen ? "Đang mở" : "Hướng dẫn";
  };

  solutionCards.forEach((card) => {
    const details = card.querySelector(".oj-problem-solution");
    if (!details) return;
    syncCard(card, details);

    details.addEventListener("toggle", () => syncCard(card, details));

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button, summary, .copy-button, .code-shell, pre, code")) return;
      details.open = !details.open;
      syncCard(card, details);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("a, button, summary, .copy-button")) return;
      event.preventDefault();
      details.open = !details.open;
      syncCard(card, details);
    });
  });
}

function renderSlide() {
  const level = getActiveLevel();
  const topic = getActiveTopic();
  const guide = getLessonGuide(topic);
  const detailedTheory = [...topic.theory, ...(guide.deepTheory || [])];
  const examples = buildExamples(topic, guide);
  const codePayloads = [];
  const addCode = (label, code, className = "") => {
    const codeIndex = codePayloads.push(code) - 1;
    return renderCodeBlock(label, codeIndex, className);
  };
  const conceptsMarkup = conceptSectionsMarkup(guide.conceptSections || [], addCode);
  const level2OjMarkup = level.level === 2 && topic.title === "Luyện tập tổng hợp"
    ? renderLevel2OjGuide(addCode)
    : "";
  const theoryMarkup = `
    <div class="full-flow">
      ${detailBlock("Lý thuyết chi tiết", detailedTheory, "theory-list")}
      ${conceptsMarkup}
      ${quickExamplesMarkup(guide.quickExamples || [])}
      ${detailBlock("Vì sao thuật toán hoạt động", guide.why || [], "why-list")}
      ${detailBlock("Phương pháp sử dụng", guide.method || [], "method-list")}
      ${referencesMarkup(guide.references || [])}

      <section>
        <h4 class="section-title">Ghi nhớ</h4>
        ${listMarkup(topic.notes, "note-list")}
      </section>
    </div>
  `;
  const examplesMarkup = examples.map((example, index) => `
    <section class="example-panel">
      <div class="example-heading">
        <span class="example-index">${index + 1}</span>
        <div>
          <h4>${escapeHtml(example.title)}</h4>
          <p>${escapeHtml(example.statement)}</p>
        </div>
      </div>
      <div class="example-detail-grid">
        <div>
          <h5>Ý tưởng</h5>
          <p>${escapeHtml(example.idea)}</p>
        </div>
        <div>
          <h5>Phương pháp</h5>
          <p>${escapeHtml(example.method)}</p>
        </div>
      </div>
      <div class="example-code-grid">
        <div>
          <h5>Mã giả</h5>
          ${addCode(`Mã giả ví dụ ${index + 1}`, example.pseudo, "pseudo")}
        </div>
        <div>
          <h5>Code mẫu C++17</h5>
          ${addCode(`C++17 ví dụ ${index + 1}`, example.code)}
        </div>
      </div>
    </section>
  `).join("");

  deckTitle.textContent = level.title;
  levelKicker.textContent = `LEVEL ${level.level} MODULE`;

  const totalTopics = levels.reduce((sum, item) => sum + item.topics.length, 0);
  const before = levels.slice(0, state.levelIndex).reduce((sum, item) => sum + item.topics.length, 0);
  const current = before + state.topicIndex + 1;
  progressBar.style.width = `${current / totalTopics * 100}%`;

  slide.innerHTML = `
    <header class="slide-head">
      <div>
        <p class="eyebrow">Level ${level.level} / ${state.topicIndex + 1} of ${level.topics.length}</p>
        <h3 class="slide-title">${escapeHtml(topic.title)}</h3>
        <p class="slide-subtitle">${escapeHtml(level.subtitle)}</p>
      </div>
      <div class="badge-stack">
        <span class="badge accent">Level ${level.level}</span>
        <span class="badge">${escapeHtml(topic.complexity)}</span>
      </div>
    </header>

    <div class="slide-grid">
      <div class="content-flow">
        <section>
          <h4 class="section-title">Định nghĩa</h4>
          <p class="definition">${escapeHtml(topic.definition)}</p>
        </section>
      </div>

      <aside class="visual-panel">
        ${renderVisual(topic)}
      </aside>
    </div>

    ${theoryMarkup}

    ${level2OjMarkup}

    <section class="examples-section">
      <h4 class="section-title">2 ví dụ áp dụng</h4>
      <div class="example-stack">
        ${examplesMarkup}
      </div>
    </section>

    ${practiceMarkup(guide.practice || [], addCode)}
  `;

  const copyButtons = slide.querySelectorAll(".copy-button");
  copyButtons.forEach((button) => {
    const codeIndex = Number(button.dataset.codeIndex);
    const block = button.closest(".code-shell")?.querySelector("code");
    if (block) block.textContent = codePayloads[codeIndex] || "";
    button.addEventListener("click", () => copyText(codePayloads[codeIndex] || "", button));
  });
  setupLevel2OjFilters();
  setupLevel2OjProblemToggles();

  prevBtn.disabled = current === 1;
  nextBtn.disabled = current === totalTopics;
  renderLevelTabs();
  renderTopicList();
  updateHash();
}

function selectLevel(index) {
  state.levelIndex = index;
  state.topicIndex = 0;
  renderSlide();
}

function selectTopic(index) {
  state.topicIndex = index;
  renderSlide();
}

function go(delta) {
  let levelIndex = state.levelIndex;
  let topicIndex = state.topicIndex + delta;

  while (levelIndex >= 0 && levelIndex < levels.length) {
    const topics = levels[levelIndex].topics;
    if (topicIndex >= 0 && topicIndex < topics.length) {
      state.levelIndex = levelIndex;
      state.topicIndex = topicIndex;
      renderSlide();
      return;
    }
    if (delta > 0) {
      levelIndex++;
      topicIndex = 0;
    } else {
      levelIndex--;
      topicIndex = levelIndex >= 0 ? levels[levelIndex].topics.length - 1 : -1;
    }
  }
}

async function copyText(text, button) {
  const original = button.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  button.textContent = "Đã copy";
  window.setTimeout(() => {
    button.textContent = original;
  }, 1200);
}

function updateHash() {
  const level = getActiveLevel();
  const topic = getActiveTopic();
  const nextHash = `#${level.id}/${getTopicId(topic)}`;
  if (window.location.hash !== nextHash) {
    history.replaceState(null, "", nextHash);
  }
}

function hydrateFromHash() {
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!hash) return;
  const [levelId, topicId] = hash.split("/");
  const levelIndex = levels.findIndex((level) => level.id === levelId);
  if (levelIndex === -1) return;
  const topicIndex = levels[levelIndex].topics.findIndex((topic) => getTopicId(topic) === topicId);
  state.levelIndex = levelIndex;
  state.topicIndex = topicIndex === -1 ? 0 : topicIndex;
}

levelTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-level]");
  if (!button) return;
  selectLevel(Number(button.dataset.level));
});

topicList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  selectTopic(Number(button.dataset.topic));
});

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderTopicList();
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea")) return;
  if (event.key === "ArrowRight" || event.key === "PageDown") go(1);
  if (event.key === "ArrowLeft" || event.key === "PageUp") go(-1);
});

window.addEventListener("hashchange", () => {
  hydrateFromHash();
  renderSlide();
});

hydrateFromHash();
renderSlide();
