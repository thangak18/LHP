window.lessonGuides = {
  "Nhập, xuất": {
    deepTheory: [
      "Nhập xuất là lớp giao tiếp đầu tiên giữa đề bài và chương trình. Sai định dạng input hoặc output thường làm bài sai hoàn toàn dù thuật toán đúng.",
      "cin tách dữ liệu theo khoảng trắng, còn getline đọc cả dòng. Vì vậy khi đề có chuỗi chứa dấu cách, cần chọn đúng cách đọc.",
      "Tối ưu I/O không đổi thuật toán, nhưng giúp chương trình không bị nghẽn khi dữ liệu lớn."
    ],
    why: [
      "Máy chấm so sánh output theo định dạng rất chặt, nên chương trình cần in đúng thứ tự, đúng khoảng trắng và đúng số chữ số.",
      "Kiểu dữ liệu quyết định miền giá trị lưu được; dùng int cho tổng lớn có thể tràn và tạo đáp án sai âm thầm."
    ],
    method: [
      "Bước 1: đọc đề để liệt kê chính xác các biến input.",
      "Bước 2: chọn kiểu dữ liệu theo giới hạn, ưu tiên long long cho tổng, tích, số đếm lớn.",
      "Bước 3: in đúng format đề yêu cầu, không thêm lời giải thích.",
      "Bước 4: với số thực, dùng fixed và setprecision."
    ],
    primaryIdea: "Ví dụ 1 luyện thao tác đọc hai số và xuất nhiều kết quả theo từng dòng.",
    primaryMethod: "Chỉ cần lưu a, b bằng long long rồi lần lượt in tổng, hiệu, tích.",
    secondExample: {
      title: "Ví dụ 2: Tính diện tích hình chữ nhật",
      statement: "Đọc chiều dài và chiều rộng là số thực, in diện tích với 2 chữ số sau dấu phẩy.",
      idea: "Bài này minh họa nhập số thực và định dạng output.",
      method: "Dùng double để lưu cạnh, nhân hai cạnh, in bằng fixed << setprecision(2).",
      pseudo: String.raw`read width, height
area <- width * height
print area rounded to 2 decimal places`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    double width, height;
    cin >> width >> height;
    cout << fixed << setprecision(2) << width * height << '\n';
    return 0;
}`
    }
  },
  "Vòng lặp for": {
    deepTheory: [
      "for phù hợp khi số lượt lặp được xác định bằng chỉ số hoặc một đoạn giá trị rõ ràng.",
      "Ba phần của for gồm khởi tạo, điều kiện tiếp tục và cập nhật. Nếu một trong ba phần sai, lỗi thường là thiếu một lượt hoặc thừa một lượt.",
      "Khi mỗi lượt xử lý độc lập và chỉ đi một chiều, for giúp code ngắn và dễ kiểm soát hơn while."
    ],
    why: [
      "Vòng lặp biến thao tác lặp lại thành một khối code duy nhất, giảm lỗi copy-paste.",
      "Độ phức tạp thường tỉ lệ với số lượt lặp, nên nhìn vòng for có thể ước lượng thời gian chạy."
    ],
    method: [
      "Xác định chỉ số bắt đầu và kết thúc.",
      "Chọn điều kiện dừng theo chỉ số 0-based hoặc 1-based.",
      "Cập nhật đáp án trong thân vòng lặp.",
      "Kiểm tra biên n = 0, n = 1 nếu đề cho phép."
    ],
    primaryIdea: "Ví dụ 1 dùng for để cộng dồn một dãy số liên tiếp.",
    primaryMethod: "Khởi tạo sum = 0, duyệt i từ 1 đến n và cộng i vào sum.",
    secondExample: {
      title: "Ví dụ 2: Đếm ước của n",
      statement: "Đọc n, đếm có bao nhiêu số i từ 1 đến n chia hết n.",
      idea: "Dùng for để thử từng ứng viên ước.",
      method: "Duyệt i từ 1 đến n, nếu n % i == 0 thì tăng biến đếm.",
      pseudo: String.raw`read n
count <- 0
for i from 1 to n:
    if n mod i = 0:
        count <- count + 1
print count`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int countDivisor = 0;
    for (int i = 1; i <= n; ++i) {
        if (n % i == 0) countDivisor++;
    }
    cout << countDivisor << '\n';
    return 0;
}`
    }
  },
  "Vòng lặp while, nhiều vòng for lồng nhau": {
    deepTheory: [
      "while dùng khi số lượt lặp phụ thuộc vào trạng thái thay đổi trong quá trình chạy, ví dụ tách chữ số đến khi số còn 0.",
      "Vòng lặp lồng nhau duyệt nhiều chiều quyết định: cặp phần tử, ô trong bảng, hoặc mọi tổ hợp nhỏ.",
      "Mỗi tầng lặp nhân thêm độ phức tạp, nên hai vòng for trên n thường là O(n^2)."
    ],
    why: [
      "while diễn đạt tốt quá trình lặp đến khi đạt điều kiện dừng thay vì lặp theo số lượt cố định.",
      "Vòng lặp lồng nhau cần thiết khi mỗi lựa chọn ngoài phải thử nhiều lựa chọn bên trong."
    ],
    method: [
      "Với while: xác định điều kiện dừng trước, rồi đảm bảo thân vòng lặp làm điều kiện tiến gần tới sai.",
      "Với for lồng: xác định rõ mỗi tầng đại diện cho quyết định nào.",
      "Tính độ phức tạp bằng tích số lượt của các tầng lặp.",
      "Nếu O(n^2) quá lớn, tìm cách dùng đếm tần suất, prefix sum hoặc two pointer."
    ],
    primaryIdea: "Ví dụ 1 duyệt mọi cặp i, j để kiểm tra một điều kiện trên cặp.",
    primaryMethod: "Vòng ngoài chọn i, vòng trong chọn j > i để tránh đếm trùng.",
    secondExample: {
      title: "Ví dụ 2: Tổng chữ số",
      statement: "Đọc số nguyên n, tính tổng các chữ số của n.",
      idea: "Dùng while vì số lượt lặp phụ thuộc vào số chữ số.",
      method: "Lấy chữ số cuối bằng n % 10, cộng vào tổng, bỏ chữ số cuối bằng n /= 10.",
      pseudo: String.raw`read n
sum <- 0
while n > 0:
    sum <- sum + n mod 10
    n <- n / 10
print sum`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    long long sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    cout << sum << '\n';
    return 0;
}`
    }
  },
  "Mảng - Array": {
    deepTheory: [
      "Mảng lưu các phần tử cùng kiểu trên vùng chỉ số liên tiếp, nên truy cập theo chỉ số là rất nhanh.",
      "Đổi lại, người lập trình phải kiểm soát chỉ số hợp lệ. Truy cập vượt biên có thể gây sai ngẫu nhiên hoặc crash.",
      "Mảng là nền cho rất nhiều kỹ thuật sau này như prefix sum, two pointer, DP và segment tree."
    ],
    why: [
      "Khi cần dùng lại dữ liệu nhiều lần, mảng giúp lưu toàn bộ dãy thay vì xử lý xong rồi mất.",
      "Truy cập O(1) cho phép so sánh, cập nhật, duyệt và xây các cấu trúc dữ liệu nhanh."
    ],
    method: [
      "Đọc n trước, cấp phát vector có n phần tử.",
      "Duyệt để nhập từng phần tử.",
      "Chọn phép xử lý: tổng, min/max, đếm, tìm vị trí, hoặc biến đổi mảng.",
      "Luôn thống nhất 0-based hoặc 1-based trong toàn bài."
    ],
    primaryIdea: "Ví dụ 1 duyệt mảng một lần để lấy min, max và tổng.",
    primaryMethod: "Khởi tạo min/max bằng phần tử đầu, sau đó cập nhật khi duyệt từng x.",
    secondExample: {
      title: "Ví dụ 2: Đảo ngược mảng",
      statement: "Đọc n số rồi in mảng theo thứ tự ngược lại.",
      idea: "Mảng cho phép truy cập trực tiếp từ cuối về đầu.",
      method: "Lưu dãy vào vector, duyệt chỉ số từ n - 1 về 0 và in a[i].",
      pseudo: String.raw`read n
read array a
for i from n - 1 downto 0:
    print a[i]`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int &x : a) cin >> x;
    for (int i = n - 1; i >= 0; --i) cout << a[i] << ' ';
    return 0;
}`
    }
  },
  "Xâu cơ bản": {
    deepTheory: [
      "Xâu là mảng ký tự có thêm nhiều hàm tiện ích như size, substr, push_back và so sánh từ điển.",
      "Bài xâu thường biến đổi về duyệt ký tự, đếm tần suất, so sánh hai đầu hoặc xử lý từng từ.",
      "Cần phân biệt char và string: char là một ký tự, string là cả dãy ký tự."
    ],
    why: [
      "Dữ liệu văn bản xuất hiện nhiều trong đề thi, từ kiểm tra palindrome đến mã hóa đơn giản.",
      "Hiểu chỉ số trong xâu giúp chuyển sang các thuật toán xâu nâng cao như KMP và hashing."
    ],
    method: [
      "Chọn cin nếu xâu không có dấu cách, chọn getline nếu đọc cả dòng.",
      "Duyệt từng ký tự bằng for hoặc hai con trỏ.",
      "Nếu cần đếm chữ cái, dùng mảng tần suất 26 hoặc 256.",
      "Chuẩn hóa hoa thường nếu đề không phân biệt chữ hoa và chữ thường."
    ],
    primaryIdea: "Ví dụ 1 kiểm tra palindrome bằng cách so sánh ký tự đối xứng.",
    primaryMethod: "Dùng hai chỉ số l và r, nếu có cặp khác nhau thì kết luận NO.",
    secondExample: {
      title: "Ví dụ 2: Đếm nguyên âm",
      statement: "Đọc một xâu không có khoảng trắng, đếm số ký tự nguyên âm.",
      idea: "Duyệt từng ký tự và kiểm tra có thuộc tập nguyên âm không.",
      method: "Đưa ký tự về chữ thường, nếu nằm trong a, e, i, o, u thì tăng đếm.",
      pseudo: String.raw`read s
count <- 0
for each character c in s:
    c <- lowercase(c)
    if c is a/e/i/o/u:
        count <- count + 1
print count`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    int ans = 0;
    for (char c : s) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') ans++;
    }
    cout << ans << '\n';
    return 0;
}`
    }
  },
  "Hàm, Truy vấn": {
    deepTheory: [
      "Hàm tách chương trình thành các khối có nhiệm vụ rõ ràng, giúp code dễ đọc và dễ kiểm thử.",
      "Truy vấn là mô hình có nhiều câu hỏi trên cùng một dữ liệu. Nếu mỗi câu hỏi xử lý lại từ đầu, chương trình thường chậm.",
      "Tư duy quan trọng là tiền xử lý một lần để trả lời mỗi truy vấn nhanh hơn."
    ],
    why: [
      "Hàm giảm trùng lặp, khi sửa logic chỉ cần sửa một nơi.",
      "Tiền xử lý đổi thời gian từ q lần làm n việc thành một lần làm n việc và q lần trả lời nhanh."
    ],
    method: [
      "Tách bài thành hàm nhỏ: đọc dữ liệu, tiền xử lý, trả lời truy vấn.",
      "Chọn dữ liệu phụ trợ như prefix sum, mảng tần suất hoặc map.",
      "Định nghĩa rõ chỉ số truy vấn là 0-based hay 1-based.",
      "Nếu truyền vector lớn vào hàm, dùng const vector<int>& để tránh copy."
    ],
    primaryIdea: "Ví dụ 1 dùng hàm rangeSum để trả lời tổng đoạn bằng prefix sum.",
    primaryMethod: "Xây pref[i] là tổng đến i, sau đó tổng l..r bằng pref[r] - pref[l - 1].",
    secondExample: {
      title: "Ví dụ 2: Truy vấn kiểm tra số nguyên tố",
      statement: "Cho q truy vấn x, in YES nếu x là số nguyên tố.",
      idea: "Đóng gói kiểm tra nguyên tố vào hàm isPrime.",
      method: "Với mỗi x, thử các ước từ 2 đến sqrt(x); nếu không chia hết thì x nguyên tố.",
      pseudo: String.raw`isPrime(x):
    if x < 2: return false
    for d from 2 to sqrt(x):
        if x mod d = 0: return false
    return true

read q
repeat q times:
    read x
    print YES if isPrime(x), otherwise NO`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

bool isPrime(long long x) {
    if (x < 2) return false;
    for (long long d = 2; d * d <= x; ++d) {
        if (x % d == 0) return false;
    }
    return true;
}

int main() {
    int q;
    cin >> q;
    while (q--) {
        long long x;
        cin >> x;
        cout << (isPrime(x) ? "YES" : "NO") << '\n';
    }
    return 0;
}`
    }
  },
  "Vector": {
    deepTheory: [
      "vector là mảng động: vẫn lưu liên tiếp trong bộ nhớ nhưng có thể thay đổi kích thước.",
      "Khi push_back vượt sức chứa hiện tại, vector cấp phát vùng lớn hơn và copy phần tử sang, nên một lần push có thể đắt nhưng trung bình vẫn O(1).",
      "vector là lựa chọn mặc định cho dãy dữ liệu trong C++ thi đấu vì an toàn và linh hoạt hơn mảng tĩnh."
    ],
    why: [
      "Không phải bài nào cũng biết trước số phần tử cuối cùng, vector xử lý tốt việc thêm dần.",
      "Vì dữ liệu liên tiếp, vector tương thích tốt với sort, lower_bound và nhiều thuật toán STL."
    ],
    method: [
      "Dùng vector<T> a(n) nếu biết n, hoặc vector<T> a rồi push_back nếu đọc đến hết.",
      "Dùng begin/end với các thuật toán STL.",
      "Dùng erase(unique(...)) sau sort để xóa trùng.",
      "Tránh insert/erase ở giữa nếu dữ liệu lớn."
    ],
    primaryIdea: "Ví dụ 1 sort vector rồi dùng unique để loại giá trị trùng.",
    primaryMethod: "Sắp xếp làm các phần tử bằng nhau nằm cạnh nhau, unique gom chúng lại.",
    secondExample: {
      title: "Ví dụ 2: Lọc số dương",
      statement: "Đọc n số, lưu và in ra các số dương theo thứ tự xuất hiện.",
      idea: "Dùng vector để thêm linh hoạt những phần tử đạt điều kiện.",
      method: "Duyệt input, nếu x > 0 thì push_back vào vector kết quả.",
      pseudo: String.raw`read n
result <- empty vector
for i from 1 to n:
    read x
    if x > 0:
        append x to result
print result`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> positive;
    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        if (x > 0) positive.push_back(x);
    }
    for (int x : positive) cout << x << ' ';
    return 0;
}`
    }
  },
  "Đệ quy": {
    deepTheory: [
      "Đệ quy giải bài toán bằng cách gọi lại chính nó trên bài toán nhỏ hơn.",
      "Mỗi lời gọi lưu biến cục bộ và vị trí quay lại trên call stack, vì vậy đệ quy có chi phí bộ nhớ theo độ sâu.",
      "Một lời giải đệ quy đúng luôn có hai phần: điều kiện dừng và công thức quy về trạng thái nhỏ hơn."
    ],
    why: [
      "Nhiều cấu trúc như cây, biểu thức ngoặc và quay lui có bản chất phân nhánh, viết đệ quy tự nhiên hơn vòng lặp.",
      "Nếu bài toán con lặp lại nhiều lần, đệ quy có thể kết hợp memoization để thành DP."
    ],
    method: [
      "Định nghĩa hàm trả về gì hoặc xử lý trạng thái nào.",
      "Viết điều kiện dừng trước.",
      "Viết lời gọi đệ quy trên dữ liệu nhỏ hơn.",
      "Kiểm tra độ sâu tối đa để tránh tràn stack."
    ],
    primaryIdea: "Ví dụ 1 dùng Euclid vì gcd(a, b) = gcd(b, a mod b).",
    primaryMethod: "Mỗi bước giảm số thứ hai, dừng khi b = 0.",
    secondExample: {
      title: "Ví dụ 2: Tính giai thừa",
      statement: "Đọc n, tính n! bằng đệ quy.",
      idea: "n! = n * (n - 1)! và 0! = 1.",
      method: "Hàm factorial(n) trả 1 khi n <= 1, ngược lại trả n * factorial(n - 1).",
      pseudo: String.raw`factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

read n
print factorial(n)`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

long long factorial(int n) {
    if (n <= 1) return 1;
    return 1LL * n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << '\n';
    return 0;
}`
    }
  },
  "Brute Force - Backtracking": {
    deepTheory: [
      "Brute force duyệt toàn bộ không gian lời giải nên dễ đúng nhưng thường chậm.",
      "Backtracking xây nghiệm từng phần, đánh dấu lựa chọn, đi sâu, rồi hoàn tác để thử nhánh khác.",
      "Cắt nhánh là phần làm backtracking mạnh hơn brute force thuần: bỏ nhánh chắc chắn không thể tạo đáp án tốt."
    ],
    why: [
      "Khi n nhỏ, thử hết có thể là lời giải tốt nhất vì đơn giản và ít rủi ro.",
      "Backtracking phù hợp với bài chọn, xếp, sinh cấu hình, mê cung và ràng buộc tổ hợp."
    ],
    method: [
      "Mô tả trạng thái hiện tại gồm vị trí, lựa chọn đã dùng và đáp án tạm.",
      "Nếu trạng thái hoàn chỉnh, cập nhật hoặc in đáp án.",
      "Duyệt từng lựa chọn hợp lệ, chọn, gọi đệ quy, rồi bỏ chọn.",
      "Thêm điều kiện cắt nhánh nếu có giới hạn hoặc mục tiêu tối ưu."
    ],
    primaryIdea: "Ví dụ 1 sinh hoán vị bằng cách chọn lần lượt số chưa dùng.",
    primaryMethod: "Mảng used ngăn chọn trùng, pop_back và reset used để quay lui.",
    secondExample: {
      title: "Ví dụ 2: Sinh xâu nhị phân độ dài n",
      statement: "In tất cả xâu chỉ gồm 0 và 1 có độ dài n.",
      idea: "Mỗi vị trí có hai lựa chọn, thử 0 rồi thử 1.",
      method: "Dùng đệ quy theo vị trí pos, khi pos == n thì in xâu hiện tại.",
      pseudo: String.raw`backtrack(pos):
    if pos = n:
        print s
        return
    for bit in {0, 1}:
        s[pos] <- bit
        backtrack(pos + 1)`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int n;
string s;

void backtrack(int pos) {
    if (pos == n) {
        cout << s << '\n';
        return;
    }
    for (char bit : {'0', '1'}) {
        s[pos] = bit;
        backtrack(pos + 1);
    }
}

int main() {
    cin >> n;
    s.assign(n, '0');
    backtrack(0);
    return 0;
}`
    }
  },
  "Pair - Struct": {
    deepTheory: [
      "pair gom đúng hai giá trị, còn struct tạo kiểu dữ liệu có nhiều trường được đặt tên.",
      "Khi dữ liệu có ý nghĩa rõ, struct giúp code tự giải thích tốt hơn first/second.",
      "Comparator cho sort quyết định thứ tự ưu tiên giữa các trường."
    ],
    why: [
      "Nhiều bài cần lưu một thực thể gồm nhiều thuộc tính: tọa độ, đoạn, học sinh, cạnh đồ thị.",
      "Gom dữ liệu liên quan vào một object giúp truyền qua hàm và sắp xếp dễ hơn."
    ],
    method: [
      "Dùng pair khi chỉ có hai trường đơn giản, ví dụ {l, r}.",
      "Dùng struct khi số trường nhiều hoặc cần tên rõ nghĩa.",
      "Viết comparator theo thứ tự ưu tiên của đề.",
      "Kiểm tra trường hợp bằng nhau để tránh thứ tự không ổn định ngoài ý muốn."
    ],
    primaryIdea: "Ví dụ 1 sort danh sách học sinh theo điểm giảm rồi tên tăng.",
    primaryMethod: "Comparator so sánh score trước; nếu bằng nhau mới so sánh name.",
    secondExample: {
      title: "Ví dụ 2: Sắp xếp đoạn theo điểm bắt đầu",
      statement: "Đọc n đoạn [l, r], in các đoạn theo l tăng, nếu bằng thì r tăng.",
      idea: "Dùng pair để lưu hai đầu đoạn.",
      method: "pair mặc định sort theo first rồi second, đúng với yêu cầu.",
      pseudo: String.raw`read intervals
sort intervals
for each interval:
    print l, r`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int, int>> seg(n);
    for (auto &p : seg) cin >> p.first >> p.second;
    sort(seg.begin(), seg.end());
    for (auto [l, r] : seg) cout << l << ' ' << r << '\n';
    return 0;
}`
    }
  },
  "Greedy": {
    deepTheory: [
      "Greedy đưa ra lựa chọn tốt nhất ở hiện tại và không quay lại sửa lựa chọn đó.",
      "Một thuật toán greedy chỉ đúng khi có tính chất lựa chọn tham lam: luôn tồn tại nghiệm tối ưu chứa lựa chọn hiện tại.",
      "Chứng minh greedy thường dùng lập luận trao đổi: thay một phần của nghiệm tối ưu bằng lựa chọn greedy mà không làm tệ hơn."
    ],
    why: [
      "Greedy thường nhanh, dễ cài, độ phức tạp hay là O(n) hoặc O(n log n) do bước sắp xếp.",
      "Nhiều bài tối ưu có cấu trúc đơn điệu hoặc chọn theo hạn chót/kết thúc/số nhỏ nhất."
    ],
    method: [
      "Xác định mục tiêu tối ưu và ràng buộc.",
      "Tìm tiêu chí chọn cục bộ, thường bằng cách sort.",
      "Thử phản ví dụ nhỏ để loại greedy sai.",
      "Chứng minh bằng trao đổi hoặc bất biến trước khi tin lời giải."
    ],
    primaryIdea: "Ví dụ 1 chọn đoạn kết thúc sớm nhất để còn nhiều chỗ nhất cho đoạn sau.",
    primaryMethod: "Sort theo r tăng, chọn đoạn đầu tiên không giao với đoạn đã chọn gần nhất.",
    secondExample: {
      title: "Ví dụ 2: Đổi tiền ít đồng nhất",
      statement: "Với mệnh giá chuẩn 1, 5, 10, 20, 50, đếm ít đồng nhất để tạo số tiền n.",
      idea: "Với hệ tiền chuẩn này, luôn lấy mệnh giá lớn nhất có thể là tối ưu.",
      method: "Duyệt mệnh giá giảm dần, lấy n / coin đồng rồi giảm n %= coin.",
      pseudo: String.raw`coins <- [50, 20, 10, 5, 1]
read n
answer <- 0
for coin in coins:
    answer <- answer + n / coin
    n <- n mod coin
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> coins = {50, 20, 10, 5, 1};
    int ans = 0;
    for (int coin : coins) {
        ans += n / coin;
        n %= coin;
    }
    cout << ans << '\n';
    return 0;
}`
    }
  },
  "Map": {
    deepTheory: [
      "map lưu cặp key-value và tự duy trì key theo thứ tự tăng.",
      "Mỗi thao tác insert, erase, find của map thường O(log n) vì bên trong là cây cân bằng.",
      "unordered_map dùng hash nên nhanh trung bình O(1), nhưng không có thứ tự và có rủi ro va chạm."
    ],
    why: [
      "Khi miền giá trị lớn hoặc key là string, không thể dùng mảng tần suất trực tiếp.",
      "Map cho phép biến một giá trị bất kỳ thành chỉ số logic để đếm, gom nhóm hoặc tra cứu."
    ],
    method: [
      "Chọn map nếu cần thứ tự key, chọn unordered_map nếu chỉ cần nhanh trung bình.",
      "Dùng freq[x]++ để đếm tần suất.",
      "Dùng find khi chỉ muốn kiểm tra tồn tại mà không tạo key mới.",
      "Duyệt map bằng for (auto [key, value] : mp)."
    ],
    primaryIdea: "Ví dụ 1 đếm số lần xuất hiện của từng từ.",
    primaryMethod: "Mỗi lần đọc word thì tăng freq[word].",
    secondExample: {
      title: "Ví dụ 2: Tra điểm theo tên",
      statement: "Đọc danh sách tên và điểm, sau đó trả lời điểm của từng tên được hỏi.",
      idea: "Tên là key, điểm là value.",
      method: "Lưu score[name] = point, mỗi truy vấn tìm name trong map.",
      pseudo: String.raw`read n
for each student:
    read name, point
    score[name] <- point
read q
for each query name:
    print score[name] if exists, otherwise -1`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    map<string, int> score;
    for (int i = 0; i < n; ++i) {
        string name;
        int point;
        cin >> name >> point;
        score[name] = point;
    }
    int q;
    cin >> q;
    while (q--) {
        string name;
        cin >> name;
        auto it = score.find(name);
        cout << (it == score.end() ? -1 : it->second) << '\n';
    }
    return 0;
}`
    }
  },
  "Set": {
    deepTheory: [
      "set lưu các phần tử không trùng và luôn giữ thứ tự.",
      "Vì mỗi giá trị chỉ tồn tại một lần, set rất hợp để kiểm tra đã gặp hay chưa.",
      "Các hàm lower_bound và upper_bound trên set giúp tìm phần tử gần một giá trị."
    ],
    why: [
      "Set thay thế mảng đánh dấu khi miền giá trị lớn hoặc không liên tiếp.",
      "Tự loại trùng giúp code gọn cho bài đếm giá trị phân biệt."
    ],
    method: [
      "Dùng insert để thêm, count/find để kiểm tra.",
      "Dùng size để lấy số phần tử phân biệt.",
      "Dùng lower_bound(x) để tìm phần tử đầu tiên >= x.",
      "Nếu cần lưu trùng, dùng multiset."
    ],
    primaryIdea: "Ví dụ 1 đếm số giá trị phân biệt bằng cách insert tất cả vào set.",
    primaryMethod: "Sau khi đọc xong, size của set chính là số giá trị khác nhau.",
    secondExample: {
      title: "Ví dụ 2: Kiểm tra phần tử đã xuất hiện",
      statement: "Đọc n số, in YES nếu có số bị lặp lại.",
      idea: "Nếu x đã có trong set trước khi insert, dãy có phần tử trùng.",
      method: "Duyệt từng x, nếu seen.count(x) > 0 thì đánh dấu có trùng.",
      pseudo: String.raw`seen <- empty set
duplicate <- false
for each x:
    if x in seen:
        duplicate <- true
    insert x into seen
print YES if duplicate else NO`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    set<int> seen;
    bool duplicate = false;
    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        if (seen.count(x)) duplicate = true;
        seen.insert(x);
    }
    cout << (duplicate ? "YES" : "NO") << '\n';
    return 0;
}`
    }
  },
  "Sortings, Counting": {
    deepTheory: [
      "Sắp xếp đưa dữ liệu về trật tự có cấu trúc, giúp các phần tử liên quan nằm gần nhau.",
      "Counting tận dụng miền giá trị nhỏ để thay so sánh bằng đếm tần suất.",
      "Sau sort, nhiều bài từ khó thành dễ vì có thể dùng two pointer, greedy hoặc loại trùng."
    ],
    why: [
      "Sort O(n log n) thường đủ nhanh với n khoảng 10^5 đến 10^6 trong C++.",
      "Counting O(n + K) tốt hơn sort khi K nhỏ, nhưng tốn bộ nhớ theo K."
    ],
    method: [
      "Nếu cần thứ tự tùy chỉnh, viết comparator.",
      "Nếu giá trị nằm trong 0..K nhỏ, dùng mảng cnt.",
      "Sau khi sort, kiểm tra phần tử kề nhau để tìm trùng hoặc khoảng cách nhỏ nhất.",
      "Không dùng counting nếu K quá lớn so với n."
    ],
    primaryIdea: "Ví dụ 1 counting sort bằng cách đếm mỗi giá trị rồi in theo thứ tự.",
    primaryMethod: "cnt[value] cho biết cần in value bao nhiêu lần.",
    secondExample: {
      title: "Ví dụ 2: Khoảng cách nhỏ nhất giữa hai số",
      statement: "Đọc n số, tìm giá trị nhỏ nhất của |a[i] - a[j]| với i != j.",
      idea: "Sau khi sort, hai số gần nhau nhất sẽ nằm cạnh nhau.",
      method: "Sort mảng, duyệt cặp kề a[i] và a[i - 1], lấy min hiệu.",
      pseudo: String.raw`read array a
sort a
answer <- infinity
for i from 1 to n - 1:
    answer <- min(answer, a[i] - a[i - 1])
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    sort(a.begin(), a.end());
    long long ans = LLONG_MAX;
    for (int i = 1; i < n; ++i) ans = min(ans, a[i] - a[i - 1]);
    cout << ans << '\n';
    return 0;
}`
    }
  },
  "PrefixSum, Difference array": {
    deepTheory: [
      "Prefix sum lưu tổng tích lũy để biến tổng đoạn từ O(length) thành O(1).",
      "Difference array lưu sự thay đổi tại biên đoạn, nên nhiều cập nhật đoạn có thể gộp lại rồi khôi phục một lần.",
      "Hai kỹ thuật này là ví dụ điển hình của tiền xử lý: làm thêm việc trước để truy vấn hoặc cập nhật nhanh hơn."
    ],
    why: [
      "Nếu có q truy vấn tổng đoạn, làm trực tiếp O(nq) rất dễ quá thời gian.",
      "Nếu có nhiều cập nhật cộng đoạn và chỉ cần kết quả cuối, difference array tránh cập nhật từng phần tử."
    ],
    method: [
      "Với prefix: xây pref[0] = 0, pref[i] = pref[i - 1] + a[i].",
      "Tổng l..r bằng pref[r] - pref[l - 1].",
      "Với diff: cộng v vào [l, r] bằng diff[l] += v và diff[r + 1] -= v.",
      "Duyệt tích lũy diff để lấy lượng cộng tại từng vị trí."
    ],
    primaryIdea: "Ví dụ 1 dùng difference array để cộng nhiều đoạn rồi in mảng cuối.",
    primaryMethod: "Mỗi cập nhật chỉ thay đổi hai biên, sau đó prefix của diff cho biết giá trị cộng thêm.",
    secondExample: {
      title: "Ví dụ 2: Tổng đoạn nhiều truy vấn",
      statement: "Cho mảng a và q truy vấn l, r, in tổng a[l..r].",
      idea: "Prefix sum trả lời mỗi tổng đoạn trong O(1).",
      method: "Xây pref 1-based, dùng công thức pref[r] - pref[l - 1].",
      pseudo: String.raw`pref[0] <- 0
for i from 1 to n:
    pref[i] <- pref[i - 1] + a[i]
for each query l, r:
    print pref[r] - pref[l - 1]`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

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
        cout << pref[r] - pref[l - 1] << '\n';
    }
    return 0;
}`
    }
  },
  "Two pointer": {
    deepTheory: [
      "Two pointer giữ hai chỉ số để mô tả một đoạn, một cặp hoặc hai đầu của cấu trúc.",
      "Kỹ thuật này hiệu quả khi con trỏ chỉ tiến một chiều, khiến tổng số lần di chuyển là O(n).",
      "Điều kiện sử dụng thường là dữ liệu đã sort hoặc trạng thái cửa sổ có tính đơn điệu."
    ],
    why: [
      "Nhiều bài duyệt cặp O(n^2) có thể giảm xuống O(n) hoặc O(n log n) nếu khai thác thứ tự.",
      "Cửa sổ trượt tránh tính lại toàn bộ đoạn khi dịch biên."
    ],
    method: [
      "Xác định hai con trỏ biểu diễn gì: left/right của cửa sổ hoặc hai đầu mảng.",
      "Khi thêm phần tử làm trạng thái vi phạm, dịch con trỏ còn lại để khôi phục.",
      "Cập nhật đáp án sau khi trạng thái hợp lệ.",
      "Chỉ dùng khi điều kiện không bị phá bởi số âm hoặc dữ liệu thiếu thứ tự."
    ],
    primaryIdea: "Ví dụ 1 tìm cửa sổ dài nhất có tổng không vượt S khi mọi số không âm.",
    primaryMethod: "right mở rộng cửa sổ, left thu hẹp khi tổng vượt S.",
    secondExample: {
      title: "Ví dụ 2: Hai số có tổng bằng S",
      statement: "Cho mảng đã sắp xếp tăng, kiểm tra có hai phần tử tổng bằng S không.",
      idea: "Nếu tổng nhỏ thì cần tăng left, nếu tổng lớn thì cần giảm right.",
      method: "Đặt left ở đầu, right ở cuối, di chuyển theo so sánh tổng với S.",
      pseudo: String.raw`left <- 0, right <- n - 1
while left < right:
    sum <- a[left] + a[right]
    if sum = S: print YES and stop
    if sum < S: left <- left + 1
    else: right <- right - 1
print NO`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long S;
    cin >> n >> S;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    int l = 0, r = n - 1;
    while (l < r) {
        long long sum = a[l] + a[r];
        if (sum == S) {
            cout << "YES\n";
            return 0;
        }
        if (sum < S) l++;
        else r--;
    }
    cout << "NO\n";
    return 0;
}`
    }
  },
  "Math": {
    deepTheory: [
      "Toán cơ bản trong lập trình gồm chia hết, ước chung, bội chung, nguyên tố và modulo.",
      "Các tính chất số học giúp thay thử từng khả năng bằng công thức hoặc thuật toán nhanh.",
      "Modulo giữ số không quá lớn và bảo toàn phép cộng, trừ, nhân theo mod."
    ],
    why: [
      "Nhiều bài có giới hạn lớn nhưng bản chất là tính chất chia hết hoặc đếm theo công thức.",
      "Hiểu gcd, lcm và prime giúp xử lý phân số, chu kỳ, tối giản và sàng."
    ],
    method: [
      "Dùng gcd Euclid thay vì thử ước.",
      "Dùng sàng khi cần nhiều số nguyên tố đến n.",
      "Lấy modulo sau mỗi phép cộng hoặc nhân lớn.",
      "Kiểm tra tràn số khi tính lcm hoặc tích."
    ],
    primaryIdea: "Ví dụ 1 dùng sàng Eratosthenes để loại bội số của các số nguyên tố.",
    primaryMethod: "Nếu p còn prime, đánh dấu các bội từ p * p.",
    secondExample: {
      title: "Ví dụ 2: Tính LCM",
      statement: "Đọc a, b, in bội chung nhỏ nhất của hai số.",
      idea: "LCM liên hệ với GCD qua công thức lcm(a,b)=a/gcd(a,b)*b.",
      method: "Tính gcd bằng hàm __gcd, chia trước rồi nhân để giảm rủi ro tràn.",
      pseudo: String.raw`read a, b
g <- gcd(a, b)
answer <- a / g * b
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    long long g = gcd(a, b);
    cout << a / g * b << '\n';
    return 0;
}`
    }
  },
  "Binary Search": {
    deepTheory: [
      "Binary search khai thác tính đơn điệu: khi một điểm đã thỏa, toàn bộ phía sau hoặc phía trước cũng thỏa.",
      "Không chỉ tìm trong mảng, binary search còn tìm đáp án nhỏ nhất/lớn nhất thỏa điều kiện.",
      "Phần khó nhất là viết hàm kiểm tra can(mid) đúng và chọn biên chứa chắc đáp án."
    ],
    why: [
      "Mỗi lần kiểm tra loại bỏ nửa miền tìm kiếm, nên số bước chỉ khoảng log2(range).",
      "Binary search on answer biến bài tối ưu thành nhiều bài kiểm tra yes/no dễ hơn."
    ],
    method: [
      "Xác định miền đáp án [l, r].",
      "Viết predicate can(x) có tính đơn điệu.",
      "Nếu tìm nhỏ nhất thỏa, khi can(mid) đúng thì r = mid, ngược lại l = mid + 1.",
      "Dùng mid = l + (r - l) / 2 để tránh tràn."
    ],
    primaryIdea: "Ví dụ 1 tìm sức chứa nhỏ nhất bằng cách kiểm tra một capacity có chở kịp trong d ngày không.",
    primaryMethod: "Nếu capacity đủ thì thử nhỏ hơn, nếu không đủ thì tăng biên trái.",
    secondExample: {
      title: "Ví dụ 2: Tìm vị trí đầu tiên >= x",
      statement: "Cho mảng tăng và giá trị x, tìm chỉ số đầu tiên có a[i] >= x.",
      idea: "Điều kiện a[i] >= x là false ở đầu và true ở cuối.",
      method: "Binary search trên chỉ số; khi a[mid] >= x thì lưu mid và tìm tiếp bên trái.",
      pseudo: String.raw`answer <- -1
l <- 0, r <- n - 1
while l <= r:
    mid <- (l + r) / 2
    if a[mid] >= x:
        answer <- mid
        r <- mid - 1
    else:
        l <- mid + 1
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (int &v : a) cin >> v;
    int l = 0, r = n - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (a[mid] >= x) ans = mid, r = mid - 1;
        else l = mid + 1;
    }
    cout << ans << '\n';
    return 0;
}`
    }
  },
  "Coordinate Compression": {
    deepTheory: [
      "Nén tọa độ thay giá trị lớn bằng thứ hạng nhỏ gọn dựa trên thứ tự sau khi sort unique.",
      "Kỹ thuật này giữ quan hệ so sánh <, >, = nhưng không giữ khoảng cách thật giữa các giá trị.",
      "Nén tọa độ thường là bước chuẩn bị cho mảng tần suất, Fenwick tree, segment tree hoặc DP theo giá trị."
    ],
    why: [
      "Nếu giá trị tới 10^9, không thể tạo mảng kích thước 10^9.",
      "Nhưng nếu chỉ có n giá trị xuất hiện, ta chỉ cần m chỉ số với m <= n."
    ],
    method: [
      "Copy toàn bộ giá trị cần nén vào vector values.",
      "Sort values rồi erase unique.",
      "Rank của x là lower_bound(values, x) - values.begin().",
      "Nếu cần chỉ số 1-based, cộng thêm 1 vào rank."
    ],
    primaryIdea: "Ví dụ 1 nén từng giá trị để đếm tần suất bằng mảng nhỏ.",
    primaryMethod: "lower_bound tìm đúng thứ hạng của giá trị trong danh sách unique đã sort.",
    secondExample: {
      title: "Ví dụ 2: Nén tọa độ điểm trên trục số",
      statement: "Đọc n tọa độ rất lớn, in rank 1-based của từng tọa độ.",
      idea: "Rank biểu diễn vị trí của tọa độ trong danh sách tọa độ phân biệt tăng dần.",
      method: "Sort unique các tọa độ, sau đó lower_bound từng tọa độ gốc.",
      pseudo: String.raw`values <- copy coordinates
sort values and remove duplicates
for each coordinate x:
    rank <- lower_bound(values, x) + 1
    print rank`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> x(n), values;
    for (auto &v : x) cin >> v, values.push_back(v);
    sort(values.begin(), values.end());
    values.erase(unique(values.begin(), values.end()), values.end());
    for (long long v : x) {
        int rank = lower_bound(values.begin(), values.end(), v) - values.begin() + 1;
        cout << rank << ' ';
    }
    return 0;
}`
    }
  },
  "STACK": {
    deepTheory: [
      "Stack là cấu trúc LIFO: vào sau ra trước, chỉ thao tác trực tiếp ở đỉnh.",
      "Monotonic stack giữ các phần tử theo thứ tự tăng hoặc giảm để loại bỏ phần tử không còn có ích.",
      "Vì mỗi phần tử bị push và pop tối đa một lần, nhiều bài nhìn như O(n^2) được giảm thành O(n)."
    ],
    why: [
      "Stack mô hình hóa tự nhiên các quá trình cần quay lại trạng thái gần nhất: ngoặc, DFS, undo.",
      "Monotonic stack trả lời câu hỏi phần tử gần nhất lớn hơn/nhỏ hơn rất hiệu quả."
    ],
    method: [
      "Trước khi gọi top, luôn kiểm tra empty.",
      "Xác định stack cần tăng hay giảm.",
      "Khi phần tử mới làm vi phạm tính đơn điệu, pop đến khi hợp lệ.",
      "Sau khi lấy đáp án cho vị trí hiện tại, push phần tử hiện tại."
    ],
    primaryIdea: "Ví dụ 1 tìm phần tử lớn hơn gần nhất bên phải bằng stack giảm khi duyệt từ phải sang trái.",
    primaryMethod: "Pop mọi phần tử <= a[i] vì chúng không thể là đáp án cho i hoặc các vị trí bên trái.",
    secondExample: {
      title: "Ví dụ 2: Kiểm tra ngoặc đúng",
      statement: "Đọc xâu gồm (, ), [, ], kiểm tra dãy ngoặc hợp lệ.",
      idea: "Ngoặc đóng phải khớp với ngoặc mở gần nhất, đúng tính LIFO của stack.",
      method: "Gặp ngoặc mở thì push; gặp ngoặc đóng thì kiểm tra top có khớp không.",
      pseudo: String.raw`stack <- empty
for c in s:
    if c is opening bracket:
        push c
    else:
        if stack empty or top does not match c:
            print NO and stop
        pop stack
print YES if stack empty else NO`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[') st.push(c);
        else {
            if (st.empty()) { cout << "NO\n"; return 0; }
            if ((c == ')' && st.top() != '(') || (c == ']' && st.top() != '[')) {
                cout << "NO\n";
                return 0;
            }
            st.pop();
        }
    }
    cout << (st.empty() ? "YES" : "NO") << '\n';
    return 0;
}`
    }
  },
  "Queue - Deque - Priority Queue": {
    deepTheory: [
      "Queue là FIFO, dùng khi cần xử lý theo thứ tự vào trước ra trước.",
      "Deque hỗ trợ hai đầu nên phù hợp với cửa sổ trượt và hàng đợi đơn điệu.",
      "Priority queue là heap, luôn lấy phần tử có độ ưu tiên cao nhất hoặc thấp nhất."
    ],
    why: [
      "BFS cần queue vì đỉnh đến trước có khoảng cách nhỏ hơn trong đồ thị không trọng số.",
      "Deque và heap giúp duy trì min/max động mà không cần sort lại sau mỗi bước."
    ],
    method: [
      "Dùng queue cho BFS hoặc mô phỏng dòng chờ.",
      "Dùng deque khi cần pop cả đầu và cuối.",
      "Dùng priority_queue khi cần liên tục lấy min/max hiện tại.",
      "Với min-heap, dùng greater<pair/type>."
    ],
    primaryIdea: "Ví dụ 1 dùng deque đơn điệu để lấy max cửa sổ độ dài k.",
    primaryMethod: "Deque lưu chỉ số ứng viên, loại chỉ số hết hạn ở đầu và phần tử nhỏ hơn ở cuối.",
    secondExample: {
      title: "Ví dụ 2: Lấy k số lớn nhất",
      statement: "Đọc n số và k, in k số lớn nhất theo thứ tự giảm dần.",
      idea: "priority_queue mặc định là max-heap, luôn lấy số lớn nhất còn lại.",
      method: "Push tất cả số vào heap, pop k lần.",
      pseudo: String.raw`read n, k
heap <- empty max heap
for each x:
    push x into heap
repeat k times:
    print heap.top
    pop heap`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    priority_queue<int> pq;
    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        pq.push(x);
    }
    while (k-- && !pq.empty()) {
        cout << pq.top() << ' ';
        pq.pop();
    }
    return 0;
}`
    }
  },
  "Chia đôi tập": {
    deepTheory: [
      "Meet-in-the-middle chia tập n phần tử thành hai nửa để giảm số trạng thái từ 2^n xuống 2^(n/2) cho mỗi nửa.",
      "Sau khi sinh kết quả của từng nửa, ta ghép hai danh sách bằng sort, binary search hoặc two pointer.",
      "Kỹ thuật này rất mạnh khi n khoảng 30-40, nơi DP theo tổng không khả thi và brute force 2^n quá lớn."
    ],
    why: [
      "2^40 khoảng một nghìn tỷ, nhưng 2^20 chỉ khoảng một triệu, khác biệt rất lớn.",
      "Tách bài thành hai nửa vẫn duyệt đủ mọi tập con khi ghép lại."
    ],
    method: [
      "Chia mảng thành left và right.",
      "Sinh mọi subset sum của từng nửa.",
      "Sort một danh sách để tìm phần bù nhanh.",
      "Với bài đếm, dùng equal_range; với bài tối ưu, dùng lower_bound hoặc two pointer."
    ],
    primaryIdea: "Ví dụ 1 đếm subset có tổng S bằng cách sinh tổng hai nửa.",
    primaryMethod: "Với mỗi tổng x bên trái, đếm số tổng S - x bên phải.",
    secondExample: {
      title: "Ví dụ 2: Tồn tại subset tổng S",
      statement: "Cho n <= 40 số, kiểm tra có tập con nào tổng bằng S không.",
      idea: "Nếu có x từ nửa trái và y từ nửa phải sao cho x + y = S thì tồn tại đáp án.",
      method: "Sinh sums của hai nửa, sort nửa phải, binary_search S - x.",
      pseudo: String.raw`generate L subset sums
generate R subset sums
sort R
for x in L:
    if S - x exists in R:
        print YES and stop
print NO`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

void gen(const vector<long long>& a, vector<long long>& sums) {
    int n = a.size();
    for (int mask = 0; mask < (1 << n); ++mask) {
        long long s = 0;
        for (int i = 0; i < n; ++i) if (mask >> i & 1) s += a[i];
        sums.push_back(s);
    }
}

int main() {
    int n;
    long long S;
    cin >> n >> S;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    vector<long long> left(a.begin(), a.begin() + n / 2), right(a.begin() + n / 2, a.end());
    vector<long long> L, R;
    gen(left, L); gen(right, R);
    sort(R.begin(), R.end());
    for (long long x : L) {
        if (binary_search(R.begin(), R.end(), S - x)) {
            cout << "YES\n";
            return 0;
        }
    }
    cout << "NO\n";
    return 0;
}`
    }
  },
  "Math_2": {
    deepTheory: [
      "Math_2 xử lý các phép số học lớn hơn như lũy thừa nhanh, nghịch đảo modulo và tổ hợp.",
      "Lũy thừa nhanh dựa trên biểu diễn nhị phân của số mũ: a^b được tạo từ các lũy thừa a^(2^i).",
      "Nghịch đảo modulo chỉ tồn tại khi số và modulo nguyên tố cùng nhau."
    ],
    why: [
      "Tính a^b trực tiếp O(b) quá chậm khi b lớn.",
      "Modulo giúp tính tổ hợp và kết quả lớn trong giới hạn số nguyên."
    ],
    method: [
      "Dùng binary exponentiation cho a^b mod m.",
      "Nếu mod nguyên tố, inv(a) = a^(mod - 2) mod mod.",
      "Tiền xử lý factorial và inverse factorial nếu cần nhiều C(n, k).",
      "Cẩn thận mod = 1 và tràn khi nhân."
    ],
    primaryIdea: "Ví dụ 1 dùng bit của b: nếu bit hiện tại là 1 thì nhân vào kết quả, sau đó bình phương cơ sở.",
    primaryMethod: "Mỗi vòng chia b cho 2 nên chỉ cần O(log b).",
    secondExample: {
      title: "Ví dụ 2: Tính nghịch đảo modulo",
      statement: "Với mod nguyên tố, đọc a và in a^(-1) modulo mod.",
      idea: "Theo Fermat, a^(mod - 1) = 1 nên a^(mod - 2) là nghịch đảo của a.",
      method: "Dùng lũy thừa nhanh để tính modPow(a, mod - 2, mod).",
      pseudo: String.raw`modPow(a, b):
    result <- 1
    while b > 0:
        if b is odd: result <- result * a mod MOD
        a <- a * a mod MOD
        b <- b / 2
    return result

print modPow(a, MOD - 2)`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;
const long long MOD = 1000000007;

long long modPow(long long a, long long b) {
    long long res = 1;
    while (b) {
        if (b & 1) res = res * a % MOD;
        a = a * a % MOD;
        b >>= 1;
    }
    return res;
}

int main() {
    long long a;
    cin >> a;
    cout << modPow(a, MOD - 2) << '\n';
    return 0;
}`
    }
  },
  "DP": {
    deepTheory: [
      "DP dùng khi bài toán có bài toán con chồng lặp và cấu trúc tối ưu con.",
      "Trạng thái DP cần đủ thông tin để quyết định tương lai, nhưng không nên chứa thông tin thừa làm tăng độ phức tạp.",
      "Công thức chuyển phải dựa trên các trạng thái đã biết, nên thứ tự duyệt rất quan trọng."
    ],
    why: [
      "Nếu đệ quy brute force tính lại cùng bài toán con nhiều lần, DP lưu kết quả để mỗi trạng thái chỉ tính một lần.",
      "DP biến cây lời gọi lớn thành bảng trạng thái hữu hạn."
    ],
    method: [
      "Định nghĩa dp[...] có ý nghĩa gì.",
      "Xác định trạng thái gốc.",
      "Viết công thức chuyển từ trạng thái nhỏ hơn.",
      "Chọn thứ tự duyệt và kiểm tra độ phức tạp số trạng thái nhân số chuyển."
    ],
    primaryIdea: "Ví dụ 1 coin change: dp[sum] là ít đồng nhất để tạo tổng sum.",
    primaryMethod: "Thử thêm từng coin vào lời giải của sum - coin.",
    secondExample: {
      title: "Ví dụ 2: Fibonacci bằng DP",
      statement: "Tính F(n) với F(0)=0, F(1)=1.",
      idea: "F(n) phụ thuộc F(n-1) và F(n-2), các giá trị này lặp lại rất nhiều nếu đệ quy thuần.",
      method: "Tính dần từ 0 đến n và lưu vào mảng dp.",
      pseudo: String.raw`dp[0] <- 0
dp[1] <- 1
for i from 2 to n:
    dp[i] <- dp[i - 1] + dp[i - 2]
print dp[n]`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> dp(max(2, n + 1), 0);
    dp[1] = 1;
    for (int i = 2; i <= n; ++i) dp[i] = dp[i - 1] + dp[i - 2];
    cout << dp[n] << '\n';
    return 0;
}`
    }
  },
  "KMP": {
    deepTheory: [
      "KMP tìm pattern trong text bằng cách ghi nhớ độ dài phần tiền tố đã khớp.",
      "Prefix function cho biết khi mismatch thì có thể giữ lại bao nhiêu ký tự đã khớp thay vì quay về 0.",
      "Nhờ mỗi con trỏ chỉ tiến hoặc lùi theo prefix có kiểm soát, tổng thời gian là tuyến tính."
    ],
    why: [
      "So khớp naive có thể O(nm) vì so sánh lại nhiều ký tự.",
      "KMP tận dụng cấu trúc tự lặp của pattern để không làm lại việc đã biết."
    ],
    method: [
      "Tính prefix function cho pattern hoặc chuỗi pattern + separator + text.",
      "Khi mismatch, gán j = pi[j - 1] cho đến khi khớp hoặc j = 0.",
      "Khi pi đạt độ dài pattern, tìm được một lần xuất hiện.",
      "Chọn separator không xuất hiện trong input."
    ],
    primaryIdea: "Ví dụ 1 ghép pattern#text, vị trí nào có pi bằng độ dài pattern thì pattern xuất hiện.",
    primaryMethod: "Prefix function chạy một lần trên chuỗi ghép.",
    secondExample: {
      title: "Ví dụ 2: Kiểm tra pattern có xuất hiện không",
      statement: "Đọc pattern và text, in YES nếu pattern là xâu con của text.",
      idea: "Nếu trong mảng pi của pattern#text có giá trị bằng độ dài pattern thì có khớp.",
      method: "Tính pi, duyệt tìm giá trị bằng m.",
      pseudo: String.raw`combined <- pattern + # + text
pi <- prefix_function(combined)
if any pi[i] = length(pattern):
    print YES
else:
    print NO`,
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
    string p, t;
    cin >> p >> t;
    auto pi = prefixFunction(p + "#" + t);
    cout << (find(pi.begin(), pi.end(), (int)p.size()) != pi.end() ? "YES" : "NO") << '\n';
    return 0;
}`
    }
  },
  "BFS, DFS": {
    deepTheory: [
      "BFS duyệt theo lớp bằng queue, nên trong đồ thị không trọng số nó tìm số cạnh ít nhất từ nguồn.",
      "DFS đi sâu hết một nhánh rồi quay lui, phù hợp để tìm thành phần liên thông, chu trình hoặc duyệt cây.",
      "Đồ thị nên lưu bằng adjacency list khi số cạnh ít hơn n^2."
    ],
    why: [
      "BFS đúng cho shortest path không trọng số vì mọi đỉnh ở lớp d được xử lý trước lớp d + 1.",
      "DFS tự nhiên cho bài cần khám phá toàn bộ vùng liên thông."
    ],
    method: [
      "Xây danh sách kề adj.",
      "Dùng visited hoặc dist để tránh duyệt lặp.",
      "BFS dùng queue, DFS dùng recursion hoặc stack.",
      "Độ phức tạp là O(n + m) vì mỗi đỉnh/cạnh được xét hữu hạn lần."
    ],
    primaryIdea: "Ví dụ 1 BFS từ đỉnh 1 để tính khoảng cách theo số cạnh.",
    primaryMethod: "Khi thăm v lần đầu từ u, dist[v] = dist[u] + 1.",
    secondExample: {
      title: "Ví dụ 2: Đếm thành phần liên thông",
      statement: "Cho đồ thị vô hướng, đếm có bao nhiêu thành phần liên thông.",
      idea: "Mỗi lần gặp một đỉnh chưa thăm, DFS/BFS từ đó sẽ thăm trọn một thành phần.",
      method: "Duyệt mọi đỉnh, nếu chưa visited thì tăng đáp án và DFS.",
      pseudo: String.raw`answer <- 0
for u from 1 to n:
    if not visited[u]:
        answer <- answer + 1
        DFS(u)
print answer`,
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
    vector<int> visited(n + 1, 0);
    int components = 0;
    function<void(int)> dfs = [&](int u) {
        visited[u] = 1;
        for (int v : adj[u]) if (!visited[v]) dfs(v);
    };
    for (int u = 1; u <= n; ++u) {
        if (!visited[u]) components++, dfs(u);
    }
    cout << components << '\n';
    return 0;
}`
    }
  },
  "Segment Tree": {
    deepTheory: [
      "Segment tree chia mảng thành các đoạn, mỗi node lưu thông tin gộp của một đoạn.",
      "Truy vấn đoạn được tách thành O(log n) node không giao nhau, cập nhật điểm chỉ ảnh hưởng các node trên đường từ lá lên gốc.",
      "Phép gộp phải có tính kết hợp như sum, min, max, gcd."
    ],
    why: [
      "Prefix sum trả lời tổng đoạn nhanh nhưng không xử lý tốt cập nhật xen kẽ.",
      "Segment tree cân bằng giữa truy vấn và cập nhật, mỗi thao tác O(log n)."
    ],
    method: [
      "Chọn thông tin node cần lưu và phép merge.",
      "Build cây từ mảng ban đầu.",
      "Update lá tương ứng vị trí thay đổi rồi cập nhật tổ tiên.",
      "Query đoạn bằng cách gộp các node nằm hoàn toàn trong đoạn hỏi."
    ],
    primaryIdea: "Ví dụ 1 segment tree iterative hỗ trợ update điểm và query tổng đoạn.",
    primaryMethod: "Lá nằm ở n + i, node cha là tổng hai con.",
    secondExample: {
      title: "Ví dụ 2: Truy vấn min đoạn",
      statement: "Cho mảng, trả lời nhiều truy vấn min trên đoạn l..r, không cập nhật.",
      idea: "Segment tree có thể đổi phép gộp từ sum sang min.",
      method: "Build cây min, khi query gộp bằng min và dùng INF làm phần tử trung hòa.",
      pseudo: String.raw`build tree with min merge
query(l, r):
    answer <- INF
    while l <= r:
        if l is right child: answer <- min(answer, tree[l])
        if r is left child: answer <- min(answer, tree[r])
        move l and r to parents
    return answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;
    const int INF = 1e9;
    vector<int> tree(2 * n, INF);
    for (int i = 0; i < n; ++i) cin >> tree[n + i];
    for (int i = n - 1; i > 0; --i) tree[i] = min(tree[i << 1], tree[i << 1 | 1]);
    while (q--) {
        int l, r;
        cin >> l >> r;
        int ans = INF;
        for (l += n, r += n; l <= r; l >>= 1, r >>= 1) {
            if (l & 1) ans = min(ans, tree[l++]);
            if (!(r & 1)) ans = min(ans, tree[r--]);
        }
        cout << ans << '\n';
    }
    return 0;
}`
    }
  },
  "Inclusion-Exclusion": {
    deepTheory: [
      "Bao hàm loại trừ sửa lỗi đếm trùng khi đếm hợp của nhiều tập.",
      "Phần thuộc giao của hai tập bị cộng hai lần nên phải trừ một lần; giao của ba tập sau đó bị trừ quá nên cộng lại.",
      "Dấu của từng giao phụ thuộc vào số tập tham gia: lẻ thì cộng, chẵn thì trừ."
    ],
    why: [
      "Khi điều kiện là hoặc, các nhóm phần tử có thể chồng lên nhau.",
      "Nếu không xử lý giao, đáp án sẽ đếm một phần tử nhiều lần."
    ],
    method: [
      "Xác định các tập cần lấy hợp.",
      "Tính kích thước từng giao bằng công thức phù hợp.",
      "Cộng giao kích thước lẻ, trừ giao kích thước chẵn.",
      "Với bài chia hết, giao tương ứng với bội của lcm."
    ],
    primaryIdea: "Ví dụ 1 đếm số chia hết cho a hoặc b hoặc c bằng cộng bội đơn, trừ bội của lcm đôi, cộng lcm ba.",
    primaryMethod: "n / x là số bội của x không vượt n.",
    secondExample: {
      title: "Ví dụ 2: Chia hết cho 2 hoặc 3",
      statement: "Đếm số từ 1 đến n chia hết cho 2 hoặc 3.",
      idea: "Số chia hết cho cả 2 và 3 bị đếm hai lần.",
      method: "Đáp án = n/2 + n/3 - n/lcm(2,3).",
      pseudo: String.raw`read n
answer <- n / 2 + n / 3 - n / 6
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    cout << n / 2 + n / 3 - n / 6 << '\n';
    return 0;
}`
    }
  },
  "DP Knapsack": {
    deepTheory: [
      "Knapsack mô hình hóa việc chọn hoặc không chọn vật dưới ràng buộc sức chứa.",
      "Trong 0/1 knapsack, mỗi vật chỉ dùng một lần, nên duyệt sức chứa giảm để không dùng lại vật trong cùng lượt.",
      "Nếu được dùng vô hạn, duyệt tăng để cho phép trạng thái vừa cập nhật được dùng tiếp."
    ],
    why: [
      "Thử mọi tập con là O(2^n), trong khi DP theo sức chứa là O(nW).",
      "Trạng thái dp[w] gom rất nhiều cách chọn khác nhau có cùng sức chứa thành giá trị tốt nhất."
    ],
    method: [
      "Định nghĩa dp[cap] là giá trị tốt nhất với sức chứa cap.",
      "Với từng vật, duyệt cap từ W xuống weight.",
      "Cập nhật dp[cap] = max(dp[cap], dp[cap - weight] + value).",
      "Đọc kỹ đề để biết 0/1, unbounded hay bounded knapsack."
    ],
    primaryIdea: "Ví dụ 1 chọn vật để tối đa giá trị trong giới hạn W.",
    primaryMethod: "Duyệt cap giảm để vật hiện tại chỉ được đóng góp một lần.",
    secondExample: {
      title: "Ví dụ 2: Subset sum",
      statement: "Cho n số và S, kiểm tra có tập con nào tổng đúng S không.",
      idea: "Đây là knapsack boolean, dp[sum] cho biết có tạo được tổng sum hay không.",
      method: "Với mỗi x, duyệt sum giảm và cập nhật dp[sum] |= dp[sum - x].",
      pseudo: String.raw`dp[0] <- true
for x in array:
    for sum from S downto x:
        dp[sum] <- dp[sum] OR dp[sum - x]
print YES if dp[S] else NO`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, S;
    cin >> n >> S;
    vector<int> dp(S + 1, 0);
    dp[0] = 1;
    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        for (int sum = S; sum >= x; --sum) dp[sum] |= dp[sum - x];
    }
    cout << (dp[S] ? "YES" : "NO") << '\n';
    return 0;
}`
    }
  },
  "DP LIS": {
    deepTheory: [
      "LIS tìm dãy con tăng dài nhất, không yêu cầu các phần tử liên tiếp.",
      "Cách O(n log n) dùng tail[len] là giá trị kết thúc nhỏ nhất có thể của một dãy tăng độ dài len + 1.",
      "Giữ kết thúc càng nhỏ càng tốt vì nó tạo nhiều cơ hội nối thêm phần tử sau."
    ],
    why: [
      "DP O(n^2) dễ hiểu nhưng chậm khi n lớn.",
      "lower_bound trong tail thay thế việc thử mọi j trước i."
    ],
    method: [
      "Duyệt từng x trong mảng.",
      "Tìm vị trí đầu tiên trong tail >= x.",
      "Nếu không có, thêm x để tăng độ dài LIS.",
      "Nếu có, thay bằng x để có kết thúc nhỏ hơn cho độ dài đó."
    ],
    primaryIdea: "Ví dụ 1 tính độ dài LIS bằng mảng tail.",
    primaryMethod: "tail không nhất thiết là dãy thật, nhưng kích thước tail là đáp án.",
    secondExample: {
      title: "Ví dụ 2: LIS O(n^2)",
      statement: "Tính độ dài LIS bằng công thức DP cơ bản.",
      idea: "dp[i] là LIS kết thúc tại i.",
      method: "Với mỗi i, thử mọi j < i có a[j] < a[i] để nối.",
      pseudo: String.raw`for i from 0 to n - 1:
    dp[i] <- 1
    for j from 0 to i - 1:
        if a[j] < a[i]:
            dp[i] <- max(dp[i], dp[j] + 1)
print max dp[i]`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n), dp(n, 1);
    for (int &x : a) cin >> x;
    int ans = 0;
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < i; ++j) {
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
        }
        ans = max(ans, dp[i]);
    }
    cout << ans << '\n';
    return 0;
}`
    }
  },
  "DP LCS": {
    deepTheory: [
      "LCS tìm dãy con chung dài nhất giữa hai dãy, cho phép bỏ qua ký tự nhưng giữ thứ tự.",
      "dp[i][j] xét tiền tố độ dài i của A và tiền tố độ dài j của B.",
      "Khi hai ký tự cuối bằng nhau, ta có thể nối chúng vào LCS của hai tiền tố trước đó."
    ],
    why: [
      "Hai lựa chọn bỏ ký tự cuối của A hoặc B tạo ra cấu trúc tối ưu con rõ ràng.",
      "Bảng DP tránh thử mọi dãy con, vốn có số lượng lũy thừa."
    ],
    method: [
      "Tạo bảng (n + 1) x (m + 1) để có hàng/cột tiền tố rỗng.",
      "Nếu a[i-1] == b[j-1], dp[i][j] = dp[i-1][j-1] + 1.",
      "Nếu khác, lấy max của việc bỏ một ký tự ở một trong hai xâu.",
      "Muốn truy vết, đi ngược từ dp[n][m]."
    ],
    primaryIdea: "Ví dụ 1 tính độ dài LCS bằng bảng hai chiều.",
    primaryMethod: "Mỗi ô phụ thuộc vào ô chéo, trên và trái.",
    secondExample: {
      title: "Ví dụ 2: In một LCS",
      statement: "Đọc hai xâu, in ra một dãy con chung dài nhất.",
      idea: "Sau khi có bảng dp, truy vết ngược để lấy ký tự được chọn.",
      method: "Nếu ký tự cuối bằng nhau thì lấy ký tự đó và đi chéo; nếu không đi về ô có giá trị lớn hơn.",
      pseudo: String.raw`compute dp table
i <- n, j <- m
answer <- empty
while i > 0 and j > 0:
    if a[i-1] = b[j-1]:
        append a[i-1]
        i--, j--
    else move to neighbor with larger dp
reverse answer and print`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1));
    for (int i = 1; i <= n; ++i)
        for (int j = 1; j <= m; ++j)
            dp[i][j] = (a[i - 1] == b[j - 1]) ? dp[i - 1][j - 1] + 1 : max(dp[i - 1][j], dp[i][j - 1]);
    string ans;
    for (int i = n, j = m; i > 0 && j > 0;) {
        if (a[i - 1] == b[j - 1]) ans.push_back(a[i - 1]), i--, j--;
        else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
        else j--;
    }
    reverse(ans.begin(), ans.end());
    cout << ans << '\n';
    return 0;
}`
    }
  },
  "DP Path On Grids": {
    deepTheory: [
      "DP trên lưới xem mỗi ô là một trạng thái và hướng đi quyết định các trạng thái phụ thuộc.",
      "Nếu chỉ được đi xuống/phải, đồ thị trạng thái không có chu trình nên duyệt từ trên xuống dưới, trái sang phải là hợp lệ.",
      "Có vật cản thì trạng thái của ô bị chặn thường bằng 0 hoặc INF tùy bài."
    ],
    why: [
      "Số đường đi có thể rất lớn, nhưng số trạng thái chỉ là n*m.",
      "Mỗi ô nhận kết quả từ một số ô kề trước đó, tạo công thức chuyển đơn giản."
    ],
    method: [
      "Xác định dp[i][j] là gì: số cách, chi phí nhỏ nhất hay điểm lớn nhất.",
      "Đặt trạng thái xuất phát.",
      "Duyệt các ô theo thứ tự mà trạng thái trước đã được tính.",
      "Xử lý biên hàng đầu, cột đầu và ô chặn."
    ],
    primaryIdea: "Ví dụ 1 đếm số đường đi với chướng ngại bằng cách cộng từ ô trên và ô trái.",
    primaryMethod: "Ô bị chặn có dp = 0, ô trống nhận tổng số cách từ hai hướng đến.",
    secondExample: {
      title: "Ví dụ 2: Chi phí nhỏ nhất trên lưới",
      statement: "Mỗi ô có chi phí, đi từ góc trên trái đến góc dưới phải chỉ sang phải hoặc xuống, tìm tổng chi phí nhỏ nhất.",
      idea: "dp[i][j] là chi phí nhỏ nhất để tới ô đó.",
      method: "dp[i][j] = cost[i][j] + min(dp[i-1][j], dp[i][j-1]).",
      pseudo: String.raw`dp[0][0] <- cost[0][0]
for each cell i, j:
    dp[i][j] <- cost[i][j] + min(from top, from left)
print dp[n-1][m-1]`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<long long>> cost(n, vector<long long>(m)), dp(n, vector<long long>(m, 4e18));
    for (auto &row : cost) for (auto &x : row) cin >> x;
    dp[0][0] = cost[0][0];
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            if (i) dp[i][j] = min(dp[i][j], dp[i - 1][j] + cost[i][j]);
            if (j) dp[i][j] = min(dp[i][j], dp[i][j - 1] + cost[i][j]);
        }
    }
    cout << dp[n - 1][m - 1] << '\n';
    return 0;
}`
    }
  },
  "DP Range": {
    deepTheory: [
      "Interval DP xử lý bài toán trên đoạn [l, r] bằng cách ghép các đoạn con.",
      "Thứ tự duyệt theo độ dài đoạn đảm bảo mọi đoạn con ngắn hơn đã có kết quả.",
      "Công thức thường thử điểm chia k, nên độ phức tạp cơ bản là O(n^3)."
    ],
    why: [
      "Các bài ghép/xóa/ngoặc hóa phụ thuộc vào cả hai đầu đoạn, không thể chỉ dùng một chiều.",
      "Chia đoạn tại k tạo cấu trúc tối ưu con tự nhiên."
    ],
    method: [
      "Định nghĩa dp[l][r] là đáp án tối ưu cho đoạn l..r.",
      "Khởi tạo đoạn độ dài 1 hoặc 0.",
      "Duyệt len tăng dần.",
      "Thử mọi k để ghép [l,k] và [k+1,r]."
    ],
    primaryIdea: "Ví dụ 1 ghép đá: chi phí đoạn lớn bằng chi phí hai đoạn con cộng tổng đoạn.",
    primaryMethod: "Prefix sum giúp lấy tổng đoạn trong O(1).",
    secondExample: {
      title: "Ví dụ 2: Nhân chuỗi ma trận",
      statement: "Cho kích thước các ma trận, tìm số phép nhân vô hướng ít nhất.",
      idea: "Chọn vị trí k để chia chuỗi ma trận thành hai phần.",
      method: "dp[l][r] = min(dp[l][k] + dp[k+1][r] + p[l-1]*p[k]*p[r]).",
      pseudo: String.raw`for len from 2 to n:
    for l:
        r <- l + len - 1
        dp[l][r] <- INF
        for k from l to r - 1:
            dp[l][r] <- min(dp[l][r], dp[l][k] + dp[k+1][r] + p[l-1]*p[k]*p[r])`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> p(n + 1);
    for (auto &x : p) cin >> x;
    const long long INF = 4e18;
    vector<vector<long long>> dp(n + 1, vector<long long>(n + 1, 0));
    for (int len = 2; len <= n; ++len) {
        for (int l = 1; l + len - 1 <= n; ++l) {
            int r = l + len - 1;
            dp[l][r] = INF;
            for (int k = l; k < r; ++k) {
                dp[l][r] = min(dp[l][r], dp[l][k] + dp[k + 1][r] + p[l - 1] * p[k] * p[r]);
            }
        }
    }
    cout << dp[1][n] << '\n';
    return 0;
}`
    }
  },
  "Chia căn": {
    deepTheory: [
      "Sqrt decomposition chia mảng thành các block kích thước xấp xỉ căn n.",
      "Truy vấn đoạn gồm phần dư hai đầu xử lý trực tiếp và các block nguyên xử lý bằng dữ liệu gộp.",
      "Kỹ thuật này cân bằng giữa số block và kích thước mỗi block, nên thường đạt O(sqrt n)."
    ],
    why: [
      "Dễ cài hơn segment tree trong nhiều bài, nhất là khi thông tin mỗi block phức tạp.",
      "Khi cập nhật và truy vấn không quá nặng, O(sqrt n) đủ nhanh."
    ],
    method: [
      "Chọn blockSize khoảng sqrt(n).",
      "Tiền xử lý thông tin cho từng block.",
      "Khi update, sửa phần tử và cập nhật block chứa nó.",
      "Khi query, xử lý lẻ ở biên và gộp block nguyên ở giữa."
    ],
    primaryIdea: "Ví dụ 1 query tổng đoạn và update điểm bằng blockSum.",
    primaryMethod: "Update chỉ ảnh hưởng một block, query dùng tổng block cho phần giữa.",
    secondExample: {
      title: "Ví dụ 2: Đếm số phần tử <= x trong đoạn nhỏ",
      statement: "Với mỗi truy vấn l, r, x, đếm a[i] <= x bằng cách duyệt trực tiếp nếu n nhỏ.",
      idea: "Đây là phiên bản nền để hiểu phần dư trước khi tối ưu block có sort.",
      method: "Duyệt i từ l đến r và đếm điều kiện; sau đó có thể thay phần giữa bằng block đã sort.",
      pseudo: String.raw`answer <- 0
for i from l to r:
    if a[i] <= x:
        answer <- answer + 1
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;
    vector<int> a(n);
    for (int &x : a) cin >> x;
    while (q--) {
        int l, r, x;
        cin >> l >> r >> x;
        int ans = 0;
        for (int i = l; i <= r; ++i) if (a[i] <= x) ans++;
        cout << ans << '\n';
    }
    return 0;
}`
    }
  },
  "Hashing": {
    deepTheory: [
      "Rolling hash biến xâu thành số bằng công thức đa thức theo base.",
      "Hash prefix cho phép lấy hash substring trong O(1), tương tự prefix sum nhưng có nhân base.",
      "Hash có xác suất va chạm, nên bài quan trọng có thể dùng double hash."
    ],
    why: [
      "So sánh hai substring trực tiếp O(length), nếu truy vấn nhiều sẽ chậm.",
      "Hash biến so sánh đoạn thành so sánh một hoặc hai số."
    ],
    method: [
      "Chọn base và mod lớn.",
      "Tiền xử lý power[i] và pref[i].",
      "Hash l..r = pref[r] - pref[l-1] * power[len].",
      "Chuẩn hóa về số không âm sau khi trừ modulo."
    ],
    primaryIdea: "Ví dụ 1 lấy hash substring bằng prefix hash và power.",
    primaryMethod: "Trừ phần trước đoạn sau khi nhân lên đúng độ dài.",
    secondExample: {
      title: "Ví dụ 2: Đếm số substring phân biệt độ dài k",
      statement: "Cho xâu s và k, đếm có bao nhiêu substring độ dài k khác nhau.",
      idea: "Mỗi substring được đại diện bằng hash, set loại trùng.",
      method: "Tiền xử lý hash, lấy hash mọi đoạn độ dài k rồi insert vào set.",
      pseudo: String.raw`precompute hash
set hashes <- empty
for l from 1 to n-k+1:
    r <- l + k - 1
    insert hash(l, r)
print size of set`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;
const long long MOD = 1000000007, BASE = 911382323;

int main() {
    string s;
    int k;
    cin >> s >> k;
    int n = s.size();
    vector<long long> pref(n + 1), power(n + 1, 1);
    for (int i = 1; i <= n; ++i) {
        power[i] = power[i - 1] * BASE % MOD;
        pref[i] = (pref[i - 1] * BASE + s[i - 1]) % MOD;
    }
    auto getHash = [&](int l, int r) {
        long long val = (pref[r] - pref[l - 1] * power[r - l + 1]) % MOD;
        return (val + MOD) % MOD;
    };
    set<long long> hashes;
    for (int l = 1; l + k - 1 <= n; ++l) hashes.insert(getHash(l, l + k - 1));
    cout << hashes.size() << '\n';
    return 0;
}`
    }
  },
  "Shortest Path": {
    deepTheory: [
      "Shortest path tìm đường đi có tổng trọng số nhỏ nhất từ nguồn đến các đỉnh.",
      "Dijkstra đúng với trọng số không âm vì khi đỉnh có dist nhỏ nhất được lấy ra, không còn đường nào sau đó làm nó nhỏ hơn.",
      "Nếu có cạnh âm, cần Bellman-Ford hoặc kỹ thuật khác vì giả thiết của Dijkstra bị phá."
    ],
    why: [
      "Nhiều bài mô hình hóa thành đồ thị trọng số: đường đi, chi phí, thời gian, rủi ro.",
      "priority_queue giúp chọn đỉnh có dist tạm thời nhỏ nhất trong O(log n)."
    ],
    method: [
      "Xây adjacency list chứa cặp {đỉnh kề, trọng số}.",
      "Khởi tạo dist[source] = 0, các đỉnh khác INF.",
      "Dùng min-heap để lấy đỉnh có dist nhỏ nhất.",
      "Relax từng cạnh: nếu dist[v] > dist[u] + w thì cập nhật."
    ],
    primaryIdea: "Ví dụ 1 dùng Dijkstra từ đỉnh 1 cho đồ thị trọng số không âm.",
    primaryMethod: "Trạng thái cũ trong heap bị bỏ qua bằng điều kiện du != dist[u].",
    secondExample: {
      title: "Ví dụ 2: Đường đi ngắn nhất trên lưới không trọng số",
      statement: "Lưới có ô trống và tường, tìm số bước ít nhất từ S đến T.",
      idea: "Mỗi bước có trọng số 1 nên dùng BFS thay vì Dijkstra.",
      method: "BFS từ S, mỗi ô trống chưa thăm nhận dist + 1.",
      pseudo: String.raw`push S into queue
dist[S] <- 0
while queue not empty:
    pop cell
    for 4 neighbors:
        if inside and free and not visited:
            dist[next] <- dist[current] + 1
            push next
print dist[T]`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<string> g(n);
    for (auto &row : g) cin >> row;
    queue<pair<int,int>> q;
    vector<vector<int>> dist(n, vector<int>(m, -1));
    pair<int,int> target;
    for (int i = 0; i < n; ++i) for (int j = 0; j < m; ++j) {
        if (g[i][j] == 'S') q.push({i,j}), dist[i][j] = 0;
        if (g[i][j] == 'T') target = {i,j};
    }
    int dx[4] = {1, -1, 0, 0}, dy[4] = {0, 0, 1, -1};
    while (!q.empty()) {
        auto [x, y] = q.front(); q.pop();
        for (int dir = 0; dir < 4; ++dir) {
            int nx = x + dx[dir], ny = y + dy[dir];
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if (g[nx][ny] == '#' || dist[nx][ny] != -1) continue;
            dist[nx][ny] = dist[x][y] + 1;
            q.push({nx, ny});
        }
    }
    cout << dist[target.first][target.second] << '\n';
    return 0;
}`
    }
  }
};
