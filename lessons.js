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
      "Mảng là nền cho rất nhiều kỹ thuật sau này như prefix sum, two pointer, DP và segment tree.",
      "Trong C++, hai cách dùng thường gặp nhất ở Level 0 là mảng tĩnh và vector. Mảng tĩnh hợp khi giới hạn rõ ràng, vector hợp khi kích thước phụ thuộc input hoặc cần thêm bớt phần tử."
    ],
    why: [
      "Khi cần dùng lại dữ liệu nhiều lần, mảng giúp lưu toàn bộ dãy thay vì xử lý xong rồi mất.",
      "Truy cập O(1) cho phép so sánh, cập nhật, duyệt và xây các cấu trúc dữ liệu nhanh.",
      "Dãy phần tử nằm liên tiếp về mặt chỉ số, nên một vòng for có thể đi qua toàn bộ dữ liệu theo đúng thứ tự đề bài."
    ],
    method: [
      "Đọc n trước, sau đó chọn kiểu lưu: mảng tĩnh nếu n không vượt quá một hằng MAXN, vector nếu muốn cấp phát đúng n phần tử.",
      "Duyệt để nhập từng phần tử.",
      "Chọn phép xử lý: tổng, min/max, đếm, tìm vị trí, hoặc biến đổi mảng.",
      "Luôn thống nhất 0-based hoặc 1-based trong toàn bài.",
      "Với bài đếm tần suất giá trị nhỏ, có thể dùng mảng tĩnh cnt[value]. Với bài cần tạo danh sách kết quả mới, vector thường gọn hơn."
    ],
    conceptSections: [
      {
        title: "Mảng tĩnh",
        theory: [
          "Mảng tĩnh được khai báo với kích thước cố định, ví dụ int a[1000] hoặc int a[MAXN]. Kích thước này không thay đổi trong lúc chương trình chạy.",
          "Mảng tĩnh phù hợp khi đề cho giới hạn n rõ ràng như n <= 10^5. Ta thường khai báo const int MAXN = 100000 + 5 để có thêm một ít biên an toàn.",
          "Ưu điểm là truy cập nhanh, cú pháp đơn giản và có thể dùng cho mảng đếm tần suất. Nhược điểm là phải tự đảm bảo không dùng vượt kích thước đã khai báo.",
          "Nếu khai báo mảng lớn trong hàm main, có thể bị tràn stack. Khi cần mảng rất lớn, nên khai báo global hoặc dùng vector."
        ],
        example: {
          title: "Ví dụ: Đếm tần suất điểm 0..10",
          statement: "Cho n điểm số, mỗi điểm nằm trong đoạn 0 đến 10. Hãy in số lần xuất hiện của từng điểm.",
          idea: "Miền giá trị chỉ có 11 khả năng, nên dùng mảng tĩnh cnt[11]. Mỗi khi đọc điểm x, tăng cnt[x].",
          method: "Khởi tạo cnt bằng 0, duyệt input một lần để đếm, rồi duyệt điểm từ 0 đến 10 để in kết quả.",
          pseudo: String.raw`read n
cnt[0..10] <- 0
repeat n times:
    read x
    cnt[x] <- cnt[x] + 1
for score from 0 to 10:
    print score, cnt[score]`,
          code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    int cnt[11] = {};
    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        cnt[x]++;
    }

    for (int score = 0; score <= 10; ++score) {
        cout << score << ": " << cnt[score] << '\n';
    }
    return 0;
}`
        },
        practice: [
          "Nhập n số vào mảng tĩnh, in giá trị nhỏ nhất và lớn nhất.",
          "Nhập n chữ số 0..9, đếm tần suất từng chữ số bằng cnt[10].",
          "Cho n điểm 0..10, tìm điểm xuất hiện nhiều nhất.",
          "Nhập mảng a, đếm số phần tử lớn hơn trung bình cộng của mảng."
        ]
      },
      {
        title: "Vector",
        theory: [
          "vector là mảng động trong C++ STL. Ta có thể tạo vector<int> a(n) khi biết n, hoặc tạo vector rỗng rồi thêm phần tử bằng push_back.",
          "vector vẫn cho phép truy cập a[i] trong O(1), duyệt bằng for chỉ số hoặc range-based for giống mảng thường.",
          "Ưu điểm lớn nhất là linh hoạt: kích thước lấy từ input, dễ truyền vào hàm, dễ sort, reverse, push_back, pop_back, clear.",
          "Khi dùng push_back nhiều lần, vector tự mở rộng bộ nhớ. Thao tác này trung bình vẫn nhanh, nhưng nếu biết trước số lượng phần tử có thể dùng reserve để giảm số lần cấp phát lại."
        ],
        example: {
          title: "Ví dụ: Lọc số chẵn",
          statement: "Cho n số nguyên. Hãy lưu các số chẵn vào một dãy mới và in dãy đó.",
          idea: "Không biết trước có bao nhiêu số chẵn, nên dùng vector even và thêm từng số chẵn bằng push_back.",
          method: "Duyệt n số, nếu x chia hết cho 2 thì đưa vào even. Cuối cùng duyệt vector even để in kết quả.",
          pseudo: String.raw`read n
even <- empty list
repeat n times:
    read x
    if x mod 2 = 0:
        append x to even
for each x in even:
    print x`,
          code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> even;
    even.reserve(n);
    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        if (x % 2 == 0) even.push_back(x);
    }

    for (int x : even) cout << x << ' ';
    return 0;
}`
        },
        practice: [
          "Đọc n số vào vector, in dãy theo thứ tự ngược lại.",
          "Lọc các số dương sang vector mới rồi tính tổng vector mới.",
          "Sắp xếp vector tăng dần, sau đó in phần tử đầu và cuối.",
          "Sắp xếp vector rồi xóa các giá trị trùng nhau bằng unique."
        ]
      }
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
    },
    practice: [
      {
        title: "Mảng tĩnh: Đếm giá trị",
        focus: "Dùng mảng cnt có kích thước theo miền giá trị.",
        hint: "Nếu giá trị chỉ nằm trong 0..100, khai báo int cnt[101] = {} rồi tăng cnt[x]."
      },
      {
        title: "Mảng tĩnh: Min, max, tổng",
        focus: "Duyệt một lần qua dãy đã lưu.",
        hint: "Khởi tạo mn và mx bằng a[0], tổng nên dùng long long."
      },
      {
        title: "Vector: Lọc phần tử",
        focus: "Tạo một vector kết quả bằng push_back.",
        hint: "Duyệt input, gặp phần tử thỏa điều kiện thì result.push_back(x)."
      },
      {
        title: "Vector: Sắp xếp và xóa trùng",
        focus: "Kết hợp sort, unique và erase.",
        hint: "sort(a.begin(), a.end()); a.erase(unique(a.begin(), a.end()), a.end());"
      }
    ]
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
      "Thuật toán sinh là cách tạo ra lần lượt tất cả cấu hình thuộc một không gian hữu hạn: xâu nhị phân, tổ hợp, hoán vị, tập con, cách đặt quân, đường đi trong mê cung. Mục tiêu là sinh đủ, đúng và hạn chế trùng.",
      "Có hai hướng sinh hay gặp: sinh tuần tự theo quy luật kế tiếp, ví dụ next_permutation; và sinh bằng đệ quy/backtracking, tức xây cấu hình từng phần rồi quay lui.",
      "Với người mới, backtracking là cách sinh dễ hiểu nhất vì ta chỉ cần trả lời ở mỗi vị trí: hiện tại được chọn những giá trị nào, chọn xong thì đi đâu tiếp, khi nào dừng.",
      "VNOI định nghĩa backtracking là thuật toán dùng để liệt kê các cấu hình. Một cấu hình được xây từng phần tử; tại mỗi phần tử, ta thử tất cả khả năng có thể.",
      "Backtracking dựa trên đệ quy. Một hàm backtrack luôn cần trường hợp cơ sở để dừng và phần đệ quy để thử lựa chọn tiếp theo.",
      "Trạng thái thường gồm vị trí đang xây, cấu hình tạm thời, các đánh dấu đã dùng và thông tin phụ như tổng hiện tại hoặc số quân đã đặt.",
      "Mẫu thao tác quan trọng là chọn - đi sâu - bỏ chọn. Nếu chọn bằng push_back thì bỏ chọn bằng pop_back; nếu chọn bằng used[x] = true thì bỏ chọn bằng used[x] = false.",
      "Backtracking khác brute force thuần ở chỗ ta có thể kiểm tra tính hợp lệ ngay khi đang xây cấu hình. Nhờ vậy các nhánh sai bị dừng sớm.",
      "VNOI cũng đưa nhánh cận như một mở rộng: nếu mọi bước tiếp theo đều không thể làm đáp án tốt hơn đáp án hiện có, ta bỏ qua nhánh đó."
    ],
    why: [
      "Thuật toán sinh đúng vì nó biến mỗi cấu hình cần liệt kê thành một đường đi trong cây quyết định. Nếu tại mỗi nút ta thử đủ mọi lựa chọn hợp lệ, mọi lá hợp lệ đều được sinh ra.",
      "Để không trùng, ta đặt quy tắc sinh. Ví dụ tổ hợp phải chọn số sau lớn hơn số trước; hoán vị dùng used để một số chỉ xuất hiện một lần; phân tích tổng có thể yêu cầu dãy không giảm.",
      "Cây trạng thái của bài toán gồm nhiều nhánh lựa chọn. Đệ quy giúp đi xuống một nhánh, còn thao tác hoàn tác giúp quay về nút cha để thử nhánh khác.",
      "Vì mỗi cấu hình hợp lệ đều tương ứng với một đường đi từ gốc tới lá trong cây trạng thái, duyệt hết các nhánh hợp lệ sẽ không bỏ sót đáp án.",
      "Điều kiện hợp lệ và điều kiện cắt nhánh làm thuật toán nhanh hơn vì không cần đợi xây xong một cấu hình sai mới loại bỏ."
    ],
    method: [
      "Bước 1: xác định cấu hình cần sinh: độ dài bao nhiêu, gồm loại phần tử nào, có được lặp không, thứ tự có quan trọng không.",
      "Bước 2: chọn trạng thái hàm backtrack. Thường dùng pos cho vị trí đang điền, start cho tổ hợp, row cho xếp hậu, sum cho bài tổng.",
      "Bước 3: xác định cấu hình tạm thời lưu ở đâu: string cur, vector<int> cur, mảng board, hoặc các mảng used/mark.",
      "Bước 4: viết điều kiện dừng. Khi cấu hình đủ dài hoặc đạt mục tiêu, in/cập nhật đáp án rồi return.",
      "Bước 5: liệt kê choices. Với xâu nhị phân là {0,1}; với hoán vị là các số chưa dùng; với tổ hợp là các số từ start trở đi.",
      "Bước 6: kiểm tra hợp lệ trước khi chọn. Ví dụ không trùng số, không trùng cột/đường chéo, tổng không vượt S.",
      "Bước 7: thực hiện chọn - gọi đệ quy - bỏ chọn. Đây là lõi của backtracking.",
      "Bước 8: nếu bài tối ưu, thêm cận. Ví dụ số bước hiện tại đã lớn hơn đáp án tốt nhất thì dừng nhánh."
    ],
    quickExamples: [
      {
        title: "Sinh xâu nhị phân n = 3",
        problem: "Cần sinh mọi xâu gồm 0/1 có độ dài 3.",
        steps: [
          "Ở pos = 0, thử 0 rồi đi tiếp; sau đó quay lại thử 1.",
          "Nếu đã chọn prefix 0, pos = 1 lại thử 0 và 1, tạo các prefix 00, 01.",
          "Khi pos = 3 thì xâu đủ dài, in ra rồi pop ký tự cuối để quay lui.",
          "Thứ tự sinh: 000, 001, 010, 011, 100, 101, 110, 111."
        ],
        result: "Mỗi lá của cây lựa chọn là một xâu nhị phân; tổng cộng có 2^3 cấu hình."
      },
      {
        title: "Sinh tổ hợp chọn 2 từ {1,2,3,4}",
        problem: "Cần liệt kê các tập con 2 phần tử, không phân biệt thứ tự.",
        steps: [
          "Giữ vector cur và biến start là số nhỏ nhất được phép chọn tiếp.",
          "Chọn 1 thì lần sau chỉ thử 2,3,4 để tránh sinh lại {2,1}.",
          "Khi cur có 2 phần tử thì in tổ hợp và quay lui.",
          "Các tổ hợp sinh ra: {1,2}, {1,3}, {1,4}, {2,3}, {2,4}, {3,4}."
        ],
        result: "Quy tắc chọn số sau lớn hơn số trước giúp sinh đủ nhưng không trùng."
      }
    ],
    primaryIdea: "Ví dụ 1 theo VNOI: sinh xâu nhị phân độ dài n. Mỗi vị trí có đúng hai lựa chọn là 0 hoặc 1, nên cây trạng thái có 2^n lá.",
    primaryMethod: "Dùng string cur để lưu xâu đang xây. Ở vị trí pos, thử thêm '0' rồi '1', gọi backtrack(pos + 1), sau đó pop_back để quay lui.",
    secondExample: {
      title: "Ví dụ 2: Xếp n quân hậu",
      statement: "Đếm số cách xếp n quân hậu lên bàn cờ n x n sao cho không có hai quân hậu nào ăn nhau.",
      idea: "Đặt mỗi hàng đúng một quân hậu. Khi xét hàng row, thử từng cột col và chỉ đặt nếu cột, đường chéo chính, đường chéo phụ chưa bị chiếm.",
      method: "Dùng ba mảng đánh dấu: usedCol[col], usedDiag1[row - col + n - 1], usedDiag2[row + col]. Sau khi đặt quân thì đánh dấu, gọi đệ quy hàng tiếp theo, rồi bỏ đánh dấu để thử cột khác.",
      pseudo: String.raw`place(row):
    if row = n:
        answer <- answer + 1
        return
    for col from 0 to n - 1:
        if column and two diagonals are free:
            mark column and diagonals
            place(row + 1)
            unmark column and diagonals

read n
place(0)
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int n;
long long answer = 0;
vector<int> usedCol, usedDiag1, usedDiag2;

void placeQueen(int row) {
    if (row == n) {
        answer++;
        return;
    }

    for (int col = 0; col < n; ++col) {
        int d1 = row - col + n - 1;
        int d2 = row + col;
        if (usedCol[col] || usedDiag1[d1] || usedDiag2[d2]) continue;

        usedCol[col] = usedDiag1[d1] = usedDiag2[d2] = 1;
        placeQueen(row + 1);
        usedCol[col] = usedDiag1[d1] = usedDiag2[d2] = 0;
    }
}

int main() {
    cin >> n;
    usedCol.assign(n, 0);
    usedDiag1.assign(2 * n - 1, 0);
    usedDiag2.assign(2 * n - 1, 0);

    placeQueen(0);
    cout << answer << '\n';
    return 0;
}`
    },
    practice: [
      {
        title: "Sinh tổ hợp k phần tử",
        focus: "Liệt kê tập con không tính hoán vị trùng.",
        hint: "Dùng vector cur; mỗi lần chọn số mới lớn hơn số vừa chọn, dừng khi cur.size() == k."
      },
      {
        title: "Phân tích số / đổi tiền tổng S",
        focus: "Liệt kê các cách chọn mệnh giá có tổng bằng S.",
        hint: "Giữ curSum và chỉ chọn mệnh giá không nhỏ hơn mệnh giá trước để tránh hoán vị trùng."
      },
      {
        title: "Nhánh cận tối ưu số tờ tiền",
        focus: "Tìm cách đạt tổng S với số tờ ít nhất.",
        hint: "Lưu bestSet; nếu số tờ hiện tại đã không thể tốt hơn bestSet thì không gọi đệ quy tiếp."
      },
      {
        title: "MNS, Bridge Crossing, Weird Rooks",
        focus: "Các bài luyện backtracking được VNOI gợi ý.",
        hint: "Bắt đầu bằng việc mô tả trạng thái, lựa chọn hợp lệ và điều kiện dừng trước khi code."
      },
      {
        title: "Giải Sudoku",
        focus: "Backtracking trên bảng 9 x 9 với nhiều ràng buộc.",
        hint: "Chọn ô trống, thử số 1..9 hợp lệ theo hàng, cột, ô 3 x 3; đặt số rồi quay lui."
      }
    ]
  },
  "Pair - Struct": {
    deepTheory: [
      "struct là kiểu dữ liệu do mình tự định nghĩa, dùng để gom nhiều thuộc tính thuộc cùng một đối tượng vào một nơi. Ví dụ một học sinh có name, score, className; một cạnh đồ thị có u, v, w.",
      "pair chỉ có first và second, rất nhanh gọn cho dữ liệu đúng hai trường như tọa độ (x, y), đoạn (l, r), cạnh không trọng số (u, v). Khi dữ liệu có từ ba trường hoặc tên trường có ý nghĩa, struct rõ ràng hơn.",
      "Theo tinh thần VNOI về cấu trúc dữ liệu, tổ chức dữ liệu đúng giúp chương trình dễ vận hành hơn: thay vì để nhiều mảng rời nhau name[i], score[i], id[i], ta gom chúng thành vector<Student>.",
      "struct có thể nằm trong vector, map, set; có thể truyền vào hàm; có thể sort bằng comparator lambda hoặc overload operator<.",
      "Nếu struct dùng trong set/map làm key, cần định nghĩa thứ tự nghiêm ngặt bằng operator< hoặc comparator."
    ],
    why: [
      "Máy tính chỉ lưu giá trị, còn người đọc code cần hiểu ý nghĩa của giá trị. struct đặt tên cho từng trường nên giảm nhầm lẫn giữa các thuộc tính.",
      "Khi sort vector struct, comparator quyết định thứ tự. sort chỉ cần biết phần tử nào đứng trước phần tử nào, nên ta có thể ưu tiên score, rồi name, rồi id tùy đề.",
      "Gom dữ liệu liên quan vào một object giúp tránh lỗi lệch chỉ số giữa nhiều mảng song song."
    ],
    method: [
      "Bước 1: xác định một đối tượng trong đề gồm những thuộc tính nào.",
      "Bước 2: tạo struct với tên trường rõ nghĩa, ví dụ Student, Edge, Segment.",
      "Bước 3: đọc dữ liệu vào vector<StructName> thay vì nhiều mảng rời.",
      "Bước 4: nếu cần sort, viết comparator theo đúng thứ tự ưu tiên của đề.",
      "Bước 5: nếu dùng trong set/map, đảm bảo comparator không mâu thuẫn và xử lý trường hợp bằng nhau."
    ],
    primaryIdea: "Ví dụ 1 sort danh sách học sinh theo điểm giảm rồi tên tăng.",
    primaryMethod: "Comparator so sánh score trước; nếu bằng nhau mới so sánh name.",
    secondExample: {
      title: "Ví dụ 2: Sắp xếp cạnh theo trọng số",
      statement: "Đọc n cạnh gồm u, v, w. In các cạnh theo trọng số w tăng dần; nếu bằng w thì u tăng, nếu vẫn bằng thì v tăng.",
      idea: "Mỗi cạnh có ba thuộc tính nên struct Edge rõ nghĩa hơn pair lồng pair.",
      method: "Tạo struct Edge {u, v, w}; sort vector<Edge> bằng comparator ưu tiên w, rồi u, rồi v.",
      pseudo: String.raw`read n
for each edge:
    read u, v, w
sort edges by:
    smaller w first
    if same w, smaller u first
    if same u, smaller v first
print edges`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int u, v, w;
};

int main() {
    int n;
    cin >> n;
    vector<Edge> edges(n);
    for (auto &e : edges) cin >> e.u >> e.v >> e.w;

    sort(edges.begin(), edges.end(), [](const Edge& a, const Edge& b) {
        if (a.w != b.w) return a.w < b.w;
        if (a.u != b.u) return a.u < b.u;
        return a.v < b.v;
    });

    for (const Edge &e : edges) {
        cout << e.u << ' ' << e.v << ' ' << e.w << '\n';
    }
    return 0;
}`
    }
  },
  "Greedy": {
    deepTheory: [
      "Greedy là tư tưởng giải bài toán bằng các lựa chọn cục bộ. Ở mỗi bước, ta chọn phương án tốt nhất hiện tại theo tiêu chí đã đặt ra và không quay lại sửa lựa chọn đó.",
      "Theo VNOI, tham lam thường xuất hiện trong bài tối ưu hóa. Việc code thường ngắn, nhưng phần khó là tìm và chứng minh quy luật chọn.",
      "Nguyên lý cực hạn là cách nghĩ quan trọng: nghiệm tối ưu thường có thể bắt đầu bằng một lựa chọn ở biên như kết thúc sớm nhất, nhỏ nhất, lớn nhất, rẻ nhất, hoặc tạo nhiều không gian nhất cho phần còn lại.",
      "VNOI nhấn mạnh việc tự phản biện. Với Movie Festival, chọn phim bắt đầu sớm nhất hoặc phim ngắn nhất nghe hợp lý nhưng có phản ví dụ; chọn phim kết thúc sớm nhất mới đúng.",
      "Một greedy đúng thường có cấu trúc con tối ưu: sau khi chọn bước tham lam, phần còn lại của bài toán vẫn là một bài toán cùng dạng nhỏ hơn.",
      "Không phải hệ tiền nào cũng đổi tiền bằng tham lam được. VNOI gọi các hệ mà chọn mệnh giá lớn nhất luôn tối ưu là hệ chuẩn tắc; nếu không chuẩn tắc thì thường phải dùng DP."
    ],
    why: [
      "Greedy hoạt động khi có thể chứng minh rằng luôn tồn tại một nghiệm tối ưu chứa lựa chọn tham lam đầu tiên.",
      "Cách chứng minh phổ biến là trao đổi: lấy một nghiệm tối ưu bất kỳ, nếu nó không dùng lựa chọn greedy thì thay phần đầu bằng lựa chọn greedy mà đáp án không tệ hơn.",
      "Một cách khác là chứng minh bằng cận: tìm một cận trên/cận dưới cho đáp án, rồi chỉ ra greedy đạt đúng cận đó.",
      "Nếu không chứng minh được, hãy thử tìm phản ví dụ nhỏ. Phản ví dụ là công cụ rất mạnh để loại bỏ tiêu chí greedy sai."
    ],
    method: [
      "Bước 1: xác định bài toán tối ưu gì: lớn nhất, nhỏ nhất, ít thao tác nhất, nhiều phần tử nhất.",
      "Bước 2: liệt kê vài tiêu chí tham lam có vẻ hợp lý: nhỏ nhất trước, lớn nhất trước, kết thúc sớm nhất, deadline sớm nhất, chi phí thấp nhất.",
      "Bước 3: tự tạo phản ví dụ nhỏ cho từng tiêu chí. Nếu một tiêu chí sai, bỏ ngay.",
      "Bước 4: với tiêu chí còn lại, thử chứng minh bằng trao đổi, cận hoặc bất biến.",
      "Bước 5: cài đặt. Greedy thường cần sort trước, rồi duyệt một lần và cập nhật trạng thái hiện tại.",
      "Bước 6: kiểm tra biên: không chọn được phần tử nào, các phần tử bằng nhau, thời điểm chạm nhau, số âm hoặc dữ liệu đã sắp xếp ngược."
    ],
    quickExamples: [
      {
        title: "Movie Festival nhìn nhanh",
        problem: "Có các phim [1,4], [2,3], [3,5]. Muốn xem nhiều phim nhất, phim chạm thời điểm kết thúc/bắt đầu vẫn xem được.",
        steps: [
          "Nếu chọn phim bắt đầu sớm nhất [1,4], chỉ xem được 1 phim.",
          "Nếu sort theo thời điểm kết thúc, thứ tự là [2,3], [1,4], [3,5].",
          "Chọn [2,3] trước vì kết thúc sớm nhất, sau đó chọn được [3,5].",
          "Đáp án là 2 phim, tốt hơn quy tắc bắt đầu sớm nhất."
        ],
        result: "Chọn kết thúc sớm nhất để để lại nhiều thời gian nhất cho phần còn lại."
      },
      {
        title: "Missing Coin Sum nhìn nhanh",
        problem: "Có coin đã sort: 1, 1, 3, 4. Tìm tổng nhỏ nhất không tạo được.",
        steps: [
          "Ban đầu tạo được mọi tổng trong [1,0], nên reach = 0.",
          "Coin 1 <= reach + 1, mở rộng tạo được [1,1]. Coin 1 tiếp theo mở rộng thành [1,2].",
          "Coin 3 <= reach + 1 = 3, mở rộng thành [1,5]. Coin 4 mở rộng thành [1,9].",
          "Không còn coin, tổng nhỏ nhất chưa tạo được là reach + 1 = 10."
        ],
        result: "Greedy đúng vì nếu coin tiếp theo lớn hơn reach + 1 thì không có cách nào tạo reach + 1."
      }
    ],
    primaryIdea: "Ví dụ 1 chọn đoạn kết thúc sớm nhất để còn nhiều chỗ nhất cho đoạn sau.",
    primaryMethod: "Sort theo r tăng, chọn đoạn đầu tiên không giao với đoạn đã chọn gần nhất.",
    secondExample: {
      title: "Ví dụ 2: Tasks and Deadlines",
      statement: "Có n công việc, công việc i có thời lượng t[i] và hạn d[i]. Nếu hoàn thành tại thời điểm f[i], điểm nhận được là d[i] - f[i]. Hãy sắp xếp thứ tự làm để tổng điểm lớn nhất.",
      idea: "Theo VNOI, quy luật đúng là làm công việc có thời lượng ngắn hơn trước. Hạn chót không ảnh hưởng tới thứ tự tối ưu trong bài này.",
      method: "Sort các công việc theo t tăng dần. Duyệt theo thứ tự đó, cộng thời gian hoàn thành vào currentTime và cộng d - currentTime vào đáp án.",
      pseudo: String.raw`read jobs
sort jobs by duration increasing
currentTime <- 0
answer <- 0
for job in jobs:
    currentTime <- currentTime + job.duration
    answer <- answer + job.deadline - currentTime
print answer`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<long long, long long>> jobs(n);
    for (auto &[duration, deadline] : jobs) {
        cin >> duration >> deadline;
    }

    sort(jobs.begin(), jobs.end());

    long long currentTime = 0;
    long long answer = 0;
    for (auto [duration, deadline] : jobs) {
        currentTime += duration;
        answer += deadline - currentTime;
    }

    cout << answer << '\n';
    return 0;
}`
    },
    practice: [
      {
        title: "Movie Festival - CSES",
        focus: "Chọn nhiều đoạn không giao nhau nhất.",
        hint: "Thử phản ví dụ cho bắt đầu sớm nhất và độ dài ngắn nhất; quy tắc đúng là chọn phim kết thúc sớm nhất."
      },
      {
        title: "Missing Coin Sum - CSES",
        focus: "Tìm tổng nhỏ nhất không tạo được từ tập con các đồng xu.",
        hint: "Sort coin tăng dần. Nếu đã tạo được mọi tổng trong [1, reach], coin tiếp theo <= reach + 1 thì mở rộng reach."
      },
      {
        title: "Đổi tiền với hệ chuẩn tắc",
        focus: "Ít đồng xu nhất bằng cách chọn mệnh giá lớn nhất.",
        hint: "Chỉ đúng với một số hệ tiền chuẩn. Với hệ không chuẩn, hãy tìm phản ví dụ và chuyển sang DP."
      },
      {
        title: "Tasks and Deadlines - CSES",
        focus: "Chứng minh bằng trao đổi thứ tự hai công việc kề nhau.",
        hint: "Nếu a > b mà a đứng trước b, đổi chỗ hai việc sẽ làm tổng điểm tăng thêm a - b."
      }
    ]
  },
  "Map": {
    deepTheory: [
      "map lưu dữ liệu dạng key-value: key dùng để tìm, value là thông tin gắn với key. Ví dụ key là tên học sinh, value là điểm; key là số, value là tần suất.",
      "Mỗi key trong map là duy nhất. Gán mp[key] = value sẽ tạo key nếu chưa có hoặc cập nhật value nếu key đã tồn tại.",
      "map luôn duy trì key theo thứ tự tăng dần bằng comparator. Vì vậy khi duyệt map, dữ liệu xuất hiện theo thứ tự key chứ không theo thứ tự nhập.",
      "Về bản chất cấu trúc dữ liệu, map liên quan tới cây tìm kiếm cân bằng. VNOI nêu rằng cây cân bằng giữ được thao tác O(log n), khác với cây tìm kiếm thường có thể suy biến thành O(n).",
      "map có các thao tác quan trọng: find, count, insert, erase, lower_bound, upper_bound."
    ],
    why: [
      "Nếu key là string hoặc số rất lớn như 10^18, ta không thể tạo mảng đánh dấu trực tiếp theo key. map giải quyết bằng cách lưu chỉ những key thật sự xuất hiện.",
      "map hoạt động như một từ điển có thứ tự: tìm key bằng cây tìm kiếm, mỗi bước loại bỏ một phần dữ liệu nên chi phí là O(log n).",
      "Vì key có thứ tự, map làm được các truy vấn như tìm key đầu tiên >= x bằng lower_bound."
    ],
    method: [
      "Dùng map<K, V> khi cần ánh xạ key K sang value V và cần thứ tự key.",
      "Đếm tần suất: map<T, int> freq; freq[x]++.",
      "Tra cứu an toàn: auto it = mp.find(key); nếu it != mp.end() thì key tồn tại.",
      "Không dùng mp[key] chỉ để kiểm tra tồn tại, vì thao tác này có thể tự tạo key mới.",
      "Dùng lower_bound/upper_bound khi cần tìm phần tử gần một mốc."
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
  "unordered_map": {
    deepTheory: [
      "unordered_map cũng lưu key-value như map, nhưng không dùng cây có thứ tự mà dùng bảng băm.",
      "Theo VNOI, bảng băm xem key giống như chỉ số logic và dùng hàm hash để đưa key vào bucket. Nếu hash phân bố đều, mỗi bucket chỉ có ít phần tử nên tra cứu rất nhanh.",
      "Load factor là tỉ lệ giữa số phần tử và số bucket. Load factor nhỏ và hash tốt giúp thao tác trung bình O(1).",
      "Hash collision xảy ra khi nhiều key rơi vào cùng bucket. Khi collision nhiều, unordered_map có thể chậm hơn rất nhiều so với kỳ vọng trung bình.",
      "unordered_map không giữ thứ tự key, không có lower_bound, upper_bound."
    ],
    why: [
      "Thay vì đi theo cây như map, unordered_map tính hash(key) để nhảy gần như trực tiếp tới bucket cần tìm.",
      "Nếu mỗi bucket ít phần tử, việc tìm trong bucket gần như hằng số thời gian.",
      "Đổi lại, thứ tự duyệt không có ý nghĩa và phụ thuộc vào cách chia bucket nội bộ."
    ],
    method: [
      "Dùng unordered_map khi chỉ cần thêm, xóa, kiểm tra, đếm hoặc tra cứu key nhanh và không cần thứ tự.",
      "Nên gọi reserve khi biết trước số phần tử lớn để giảm rehash.",
      "Dùng find để kiểm tra tồn tại; dùng operator[] khi muốn tạo/cập nhật value.",
      "Nếu bị TLE bất thường do hack hash hoặc dữ liệu xấu, chuyển sang map hoặc dùng custom hash.",
      "Không dùng unordered_map cho bài cần duyệt tăng dần, lower_bound hoặc so sánh thứ tự key."
    ],
    primaryIdea: "Ví dụ 1 đếm tần suất rồi trả lời q truy vấn số lần xuất hiện. Vì không cần thứ tự key, unordered_map cho trung bình O(1) mỗi truy vấn.",
    primaryMethod: "reserve trước khoảng 2n bucket, đọc x thì freq[x]++, mỗi truy vấn in freq[x].",
    secondExample: {
      title: "Ví dụ 2: Two sum bằng unordered_map",
      statement: "Cho n số và S, kiểm tra có hai phần tử khác vị trí có tổng bằng S không.",
      idea: "Khi đang xét x, ta cần biết S - x đã xuất hiện trước đó chưa. Đây là tra cứu tồn tại theo key.",
      method: "Duyệt từ trái sang phải; nếu need = S - x đã có trong seen thì in YES, ngược lại lưu x vào seen.",
      pseudo: String.raw`seen <- empty unordered_map
for x in array:
    need <- S - x
    if seen[need] exists:
        print YES and stop
    seen[x] <- seen[x] + 1
print NO`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long S;
    cin >> n >> S;
    unordered_map<long long, int> seen;
    seen.reserve(n * 2);

    for (int i = 0; i < n; ++i) {
        long long x;
        cin >> x;
        long long need = S - x;
        if (seen.find(need) != seen.end()) {
            cout << "YES\n";
            return 0;
        }
        seen[x]++;
    }
    cout << "NO\n";
    return 0;
}`
    }
  },
  "Set": {
    deepTheory: [
      "set lưu một tập hợp giá trị duy nhất. Nếu insert một giá trị đã tồn tại, set không tạo bản sao thứ hai.",
      "set luôn duy trì thứ tự tăng dần, nên khi duyệt set ta nhận được dãy đã sắp xếp và loại trùng.",
      "Có thể xem set là trường hợp chỉ có key của map. Nếu map lưu key -> value, thì set chỉ lưu key.",
      "Tương tự map, set thường được cài bằng cây tìm kiếm cân bằng nên insert, erase, find, lower_bound có độ phức tạp O(log n).",
      "Nếu cần lưu nhiều giá trị bằng nhau, dùng multiset; nếu chỉ cần tồn tại và không cần thứ tự, dùng unordered_set."
    ],
    why: [
      "set thay thế mảng đánh dấu khi miền giá trị quá lớn hoặc key không liên tiếp.",
      "Tính duy nhất giúp bài loại trùng rất gọn: chỉ cần insert toàn bộ phần tử.",
      "Tính có thứ tự giúp set trả lời được truy vấn phần tử gần x bằng lower_bound."
    ],
    method: [
      "Dùng set<T> s để lưu tập giá trị duy nhất có thứ tự.",
      "Thêm phần tử bằng insert, xóa bằng erase.",
      "Kiểm tra tồn tại bằng find hoặc count.",
      "Lấy số giá trị phân biệt bằng s.size().",
      "Dùng lower_bound(x) để tìm phần tử đầu tiên >= x, nhớ kiểm tra iterator != end()."
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
  "List": {
    deepTheory: [
      "list trong C++ STL là danh sách liên kết đôi: mỗi phần tử là một node và node biết node trước/sau của nó.",
      "VNOI giải thích danh sách liên kết phù hợp khi chưa biết trước số lượng phần tử hoặc dữ liệu thường xuyên thay đổi kích thước.",
      "Khác vector, list không lưu liên tiếp trong bộ nhớ nên không có truy cập ngẫu nhiên O(1). Muốn tới phần tử thứ i phải duyệt từ đầu hoặc cuối.",
      "Nếu đã có iterator trỏ tới vị trí cần thao tác, chèn/xóa tại đó là O(1). Nhưng tìm iterator đó thường vẫn O(n).",
      "list có các thao tác hay dùng: push_front, push_back, pop_front, pop_back, insert, erase, splice, remove."
    ],
    why: [
      "Mảng/vector truy cập chỉ số rất nhanh vì các phần tử nằm liên tiếp trong bộ nhớ, nhưng chèn/xóa giữa mảng phải dời nhiều phần tử.",
      "list chèn/xóa node bằng cách đổi liên kết con trỏ, nên không phải dời toàn bộ phần tử còn lại.",
      "Đổi lại, list tốn thêm bộ nhớ cho con trỏ và duyệt tuần tự chậm hơn do cache locality kém."
    ],
    method: [
      "Dùng list khi bài có nhiều thao tác chèn/xóa ở đầu/cuối hoặc tại iterator đã biết.",
      "Không dùng list nếu cần truy cập a[i], binary search, sort bằng std::sort hoặc duyệt chỉ số liên tục.",
      "Duyệt list bằng iterator hoặc range-for.",
      "erase trả về iterator kế tiếp, rất tiện khi vừa duyệt vừa xóa.",
      "Trong thi đấu, luôn cân nhắc vector/deque trước; chọn list khi thao tác node thật sự là trọng tâm."
    ],
    primaryIdea: "Ví dụ 1 mô phỏng danh sách công việc: thêm việc khẩn cấp vào đầu, việc thường vào cuối, xử lý việc đầu tiên.",
    primaryMethod: "Dùng push_front/push_back để thêm hai đầu và pop_front để xóa đầu, tất cả O(1).",
    secondExample: {
      title: "Ví dụ 2: Xóa tất cả số âm khỏi list",
      statement: "Đọc n số vào list, xóa mọi số âm và in các số còn lại.",
      idea: "list cho phép erase tại iterator hiện tại mà không cần dời các phần tử phía sau.",
      method: "Duyệt bằng iterator; nếu *it < 0 thì it = a.erase(it), ngược lại ++it.",
      pseudo: String.raw`read n
list a <- input values
it <- begin(a)
while it != end(a):
    if value at it < 0:
        it <- erase(it)
    else:
        move it to next
print a`,
      code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    list<int> a;
    for (int i = 0; i < n; ++i) {
        int x;
        cin >> x;
        a.push_back(x);
    }

    for (auto it = a.begin(); it != a.end(); ) {
        if (*it < 0) it = a.erase(it);
        else ++it;
    }

    for (int x : a) cout << x << ' ';
    return 0;
}`
    }
  },
  "Sorting, Counting": {
    deepTheory: [
      "Theo VNOI Wiki, sắp xếp xuất hiện ở rất nhiều nơi và thường được dùng như bước tiền xử lý cho tìm kiếm nhị phân, greedy, two pointer hoặc các bài đồ thị như Kruskal.",
      "Khi học sort, không chỉ học cách gọi std::sort mà còn học các ý tưởng: đổi chỗ cặp kề nhau, chèn vào đoạn đã sort, chia để trị, heap và sort không so sánh.",
      "Cần quan tâm bốn yếu tố: độ phức tạp thời gian, bộ nhớ phụ, tính ổn định và cách định nghĩa thứ tự so sánh.",
      "Counting là nhóm kỹ thuật dùng mảng tần suất. Nếu giá trị nằm trong miền nhỏ, ta có thể thay việc so sánh O(n log n) bằng đếm O(n + K).",
      "Trong bài thi chuyên bổ sung lớp 11 chuyên Tin LHP TP.HCM, nhóm dạng hay gặp là sort theo nhiều tiêu chí, đếm tần suất, loại trùng, tìm cặp sau sort và tối ưu bằng thứ tự."
    ],
    why: [
      "Sắp xếp làm dữ liệu có cấu trúc: phần tử nhỏ đứng trước phần tử lớn, phần tử bằng nhau đứng gần nhau, nên ta dễ phát hiện trùng, khoảng cách nhỏ nhất hoặc ghép cặp.",
      "std::sort O(n log n) thường đủ nhanh với n khoảng 10^5 đến 10^6 trong C++, còn các sort O(n^2) chỉ phù hợp để hiểu ý tưởng hoặc dùng cho n nhỏ.",
      "Counting O(n + K) tốt hơn sort khi K nhỏ vì mỗi giá trị được xử lý qua chỉ số cnt[value], nhưng đổi lại bộ nhớ phụ phụ thuộc K.",
      "Tính ổn định quan trọng khi ta sort nhiều tiêu chí theo nhiều lượt: stable_sort giữ nguyên thứ tự tương đối của các phần tử bằng nhau."
    ],
    method: [
      "Bước 1: đọc đề và xác định cần sort tăng, giảm hay sort theo nhiều khóa như điểm giảm dần, tên tăng dần.",
      "Bước 2: nếu n lớn, ưu tiên std::sort hoặc stable_sort; chỉ tự cài bubble/insertion/merge/quick khi đề yêu cầu hoặc để học.",
      "Bước 3: nếu miền giá trị nhỏ, ví dụ điểm 0..10 hoặc số 0..10^6, cân nhắc mảng cnt thay vì sort so sánh.",
      "Bước 4: sau sort, khai thác tính kề nhau: loại trùng, đếm nhóm bằng nhau, tìm hiệu nhỏ nhất, dùng two pointer cho tổng/cặp.",
      "Bước 5: với comparator, luôn trả về true khi left đứng trước right; không dùng <= hoặc >= vì sort cần thứ tự nghiêm ngặt."
    ],
    conceptSections: [
      {
        title: "std::sort, stable_sort và comparator",
        theory: [
          "std::sort là công cụ chính trong C++ để sort vector, mảng hoặc đoạn iterator. Trong thi đấu, đây là lựa chọn mặc định cho hầu hết bài cần sắp xếp.",
          "Comparator là hàm quy định phần tử nào đứng trước. Ví dụ điểm cao đứng trước, nếu bằng điểm thì tên nhỏ hơn theo từ điển đứng trước.",
          "stable_sort giữ thứ tự tương đối của các phần tử bằng nhau. Điều này hữu ích khi sort nhiều lượt, ví dụ sort tên trước rồi stable_sort theo điểm.",
          "Sai lầm hay gặp là viết return a <= b. Comparator phải là thứ tự nghiêm ngặt, nghĩa là nếu hai phần tử bằng nhau thì phải trả về false."
        ],
        example: {
          title: "Ví dụ: Xếp hạng thí sinh",
          statement: "Cho tên và điểm. In danh sách theo điểm giảm dần, nếu bằng điểm thì tên tăng dần.",
          idea: "Dùng pair hoặc struct để lưu dữ liệu, sau đó viết comparator hai tiêu chí.",
          method: "So sánh điểm trước. Nếu điểm khác nhau, điểm lớn hơn đứng trước. Nếu điểm bằng nhau, tên nhỏ hơn đứng trước.",
          pseudo: String.raw`sort students by:
    if score differs:
        higher score first
    otherwise:
        smaller name first`,
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
    for (auto &x : a) cin >> x.name >> x.score;

    sort(a.begin(), a.end(), [](const Student &u, const Student &v) {
        if (u.score != v.score) return u.score > v.score;
        return u.name < v.name;
    });

    for (const Student &x : a) {
        cout << x.name << ' ' << x.score << '\n';
    }
    return 0;
}`
        },
        practice: [
          "Sort danh sách học sinh theo tổng điểm giảm dần, nếu bằng tổng thì mã học sinh tăng dần.",
          "Sort các cặp (x, y) theo x tăng, nếu x bằng nhau thì y giảm.",
          "Dùng stable_sort để sort tên tăng dần trước, rồi sort ổn định theo điểm giảm dần."
        ]
      },
      {
        title: "Bubble sort",
        theory: [
          "Bubble sort xét các cặp kề nhau. Nếu cặp đang ngược thứ tự thì đổi chỗ.",
          "Sau mỗi lượt quét, một phần tử lớn nhất sẽ bị đẩy dần về cuối dãy. Lặp nhiều lượt thì toàn bộ dãy được sắp xếp.",
          "Ưu điểm là dễ hiểu và không cần bộ nhớ phụ. Nhược điểm là O(n^2), không phù hợp khi n lớn.",
          "Bubble sort giúp người mới hiểu invariant: sau lượt i, đoạn cuối đã đúng thứ tự và không cần đụng tới nữa."
        ],
        example: {
          title: "Ví dụ: Tự cài bubble sort tăng dần",
          statement: "Sắp xếp n số nguyên tăng dần bằng cách đổi chỗ cặp kề nhau.",
          idea: "Nếu a[j] > a[j + 1], hai phần tử này đang sai thứ tự nên swap.",
          method: "Quét j từ 0 đến n - 2 - i. Sau mỗi lượt i, phần tử lớn nhất còn lại nằm đúng ở cuối.",
          pseudo: String.raw`for i from 0 to n - 1:
    for j from 0 to n - 2 - i:
        if a[j] > a[j + 1]:
            swap a[j], a[j + 1]`,
          code: String.raw`for (int i = 0; i < n; ++i) {
    bool changed = false;
    for (int j = 0; j + 1 < n - i; ++j) {
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
            changed = true;
        }
    }
    if (!changed) break;
}`
        },
        practice: [
          "In số lần swap của bubble sort trên một mảng nhỏ.",
          "Dừng sớm khi mảng đã được sort và so sánh số lượt chạy với bản không dừng sớm.",
          "Dùng bubble sort để kiểm tra ý tưởng trên n <= 100."
        ]
      },
      {
        title: "Insertion sort",
        theory: [
          "Insertion sort duy trì đoạn đầu đã sắp xếp. Khi thêm phần tử mới, ta tìm vị trí đúng trong đoạn đầu và chèn vào.",
          "Thuật toán này rất nhanh với dữ liệu gần như đã có thứ tự vì mỗi phần tử chỉ phải dịch ít vị trí.",
          "Độ phức tạp tệ nhất là O(n^2), nhưng bộ nhớ phụ O(1) và cài đặt ngắn.",
          "Tư duy insertion sort xuất hiện lại trong nhiều bài cần chèn phần tử vào cấu trúc đã có thứ tự."
        ],
        example: {
          title: "Ví dụ: Sắp xếp bằng cách chèn",
          statement: "Tự cài insertion sort tăng dần.",
          idea: "Phần tử a[i] được giữ lại trong key, các phần tử lớn hơn key bị dời sang phải.",
          method: "Duyệt i từ 1. Với mỗi i, kéo key về trái đến khi đứng sau phần tử <= key.",
          pseudo: String.raw`for i from 1 to n - 1:
    key <- a[i]
    j <- i - 1
    while j >= 0 and a[j] > key:
        a[j + 1] <- a[j]
        j <- j - 1
    a[j + 1] <- key`,
          code: String.raw`for (int i = 1; i < n; ++i) {
    int key = a[i];
    int j = i - 1;
    while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        --j;
    }
    a[j + 1] = key;
}`
        },
        practice: [
          "Đếm số lần dịch phần tử trong insertion sort.",
          "Kiểm tra insertion sort trên mảng đã tăng, đã giảm và gần tăng.",
          "Dùng insertion sort cho n nhỏ trong một thuật toán lai."
        ]
      },
      {
        title: "Merge sort",
        theory: [
          "Merge sort là thuật toán chia để trị: chia mảng thành hai nửa, sort từng nửa, rồi trộn hai nửa đã sort.",
          "Bước merge hoạt động bằng hai con trỏ, luôn lấy phần tử nhỏ hơn ở đầu hai nửa để đưa vào mảng tạm.",
          "Độ phức tạp luôn O(n log n), ổn định nếu khi bằng nhau ta lấy phần tử bên trái trước.",
          "Nhược điểm chính là cần mảng phụ O(n). Bù lại, merge sort dễ chứng minh và rất hợp để đếm nghịch thế."
        ],
        example: {
          title: "Ví dụ: Merge hai nửa đã sắp xếp",
          statement: "Cài merge sort tăng dần.",
          idea: "Nếu hai nửa đã sort, phần tử nhỏ nhất còn lại chắc chắn nằm ở đầu một trong hai nửa.",
          method: "Đệ quy đến đoạn một phần tử, sau đó merge ngược lên bằng mảng tạm.",
          pseudo: String.raw`mergeSort(l, r):
    if l = r: return
    mid <- (l + r) / 2
    mergeSort(l, mid)
    mergeSort(mid + 1, r)
    merge two sorted halves`,
          code: String.raw`void mergeSort(vector<int> &a, int l, int r, vector<int> &tmp) {
    if (l >= r) return;
    int mid = (l + r) / 2;
    mergeSort(a, l, mid, tmp);
    mergeSort(a, mid + 1, r, tmp);

    int i = l, j = mid + 1, k = l;
    while (i <= mid && j <= r) {
        if (a[i] <= a[j]) tmp[k++] = a[i++];
        else tmp[k++] = a[j++];
    }
    while (i <= mid) tmp[k++] = a[i++];
    while (j <= r) tmp[k++] = a[j++];
    for (int p = l; p <= r; ++p) a[p] = tmp[p];
}`
        },
        practice: [
          "Dùng merge sort để đếm số cặp nghịch thế i < j nhưng a[i] > a[j].",
          "Trộn hai mảng đã sắp xếp thành một mảng tăng dần.",
          "So sánh bộ nhớ phụ của merge sort với std::sort."
        ]
      },
      {
        title: "Quick sort",
        theory: [
          "Quick sort chọn một pivot, đưa phần tử nhỏ hơn pivot về một phía và lớn hơn pivot về phía còn lại, rồi đệ quy hai phía.",
          "Trung bình O(n log n), nhưng nếu chọn pivot xấu liên tục có thể thành O(n^2). Vì vậy thường chọn pivot ngẫu nhiên hoặc dùng thư viện.",
          "Quick sort thường chạy nhanh trong thực tế vì thao tác tại chỗ và cache tốt.",
          "Khi tự cài, cần cẩn thận vòng while để không kẹt với nhiều phần tử bằng pivot."
        ],
        example: {
          title: "Ví dụ: Partition bằng hai con trỏ",
          statement: "Cài quick sort tăng dần với pivot giữa đoạn.",
          idea: "Dịch i đến phần tử >= pivot, dịch j đến phần tử <= pivot, nếu i <= j thì swap để đưa về đúng phía.",
          method: "Sau partition, đệ quy [l, j] và [i, r].",
          pseudo: String.raw`quickSort(l, r):
    i <- l, j <- r, pivot <- a[(l + r) / 2]
    while i <= j:
        while a[i] < pivot: i++
        while a[j] > pivot: j--
        if i <= j:
            swap a[i], a[j]
            i++, j--
    quickSort(l, j)
    quickSort(i, r)`,
          code: String.raw`void quickSort(vector<int> &a, int l, int r) {
    int i = l, j = r;
    int pivot = a[l + (r - l) / 2];
    while (i <= j) {
        while (a[i] < pivot) ++i;
        while (a[j] > pivot) --j;
        if (i <= j) {
            swap(a[i], a[j]);
            ++i;
            --j;
        }
    }
    if (l < j) quickSort(a, l, j);
    if (i < r) quickSort(a, i, r);
}`
        },
        practice: [
          "Thử quick sort trên mảng đã tăng và mảng nhiều phần tử bằng nhau.",
          "Random pivot để giảm rủi ro rơi vào O(n^2).",
          "Giải thích vì sao partition xong không nhất thiết pivot nằm đúng một vị trí cố định trong bản hai con trỏ."
        ]
      },
      {
        title: "Heap sort và priority_queue",
        theory: [
          "Heap sort đưa các phần tử vào heap, sau đó liên tục lấy phần tử nhỏ nhất hoặc lớn nhất để tạo dãy đã sort.",
          "Độ phức tạp O(n log n), bộ nhớ có thể O(1) nếu cài heap tại chỗ; dùng priority_queue thì code ngắn nhưng có bộ nhớ phụ.",
          "Trong thi đấu, heap thường xuất hiện dưới dạng priority_queue cho bài lấy min/max động hơn là yêu cầu tự cài heap sort.",
          "So với std::sort, heap có cùng bậc O(n log n) nhưng thường chậm hơn nếu chỉ cần sort một lần."
        ],
        example: {
          title: "Ví dụ: Sort bằng min-heap",
          statement: "Đọc n số, in tăng dần bằng priority_queue min-heap.",
          idea: "Min-heap luôn đưa phần tử nhỏ nhất còn lại lên đầu.",
          method: "Đẩy toàn bộ số vào heap, rồi pop từng phần tử để in.",
          pseudo: String.raw`push all values into min heap
while heap is not empty:
    print heap minimum
    pop heap minimum`,
          code: String.raw`priority_queue<int, vector<int>, greater<int>> pq;
for (int x : a) pq.push(x);
while (!pq.empty()) {
    cout << pq.top() << ' ';
    pq.pop();
}`
        },
        practice: [
          "Dùng priority_queue để in k số lớn nhất.",
          "So sánh sort toàn bộ với heap khi chỉ cần top k.",
          "Cài max-heap bằng priority_queue<int> và min-heap bằng greater<int>."
        ]
      },
      {
        title: "Counting sort và đếm tần suất",
        theory: [
          "Counting sort không so sánh hai phần tử. Nó đếm mỗi giá trị xuất hiện bao nhiêu lần rồi trải lại theo thứ tự giá trị.",
          "Nếu giá trị nằm trong [0, K], dùng cnt[K + 1]. Nếu có số âm nhưng miền nhỏ, dùng offset: cnt[x - minValue].",
          "Bản đơn giản chỉ in lại theo tần suất. Bản ổn định dùng prefix count để tính vị trí cuối cùng của từng giá trị.",
          "Counting hiệu quả khi K không quá lớn so với n; nếu K rất lớn và dữ liệu thưa, nên dùng sort hoặc nén số."
        ],
        example: {
          title: "Ví dụ: Sắp xếp điểm 0..10",
          statement: "Cho n điểm trong đoạn 0..10, in dãy điểm tăng dần.",
          idea: "Miền giá trị chỉ có 11 số, nên cnt[score] là đủ.",
          method: "Đếm điểm, rồi duyệt score từ 0 đến 10 và in score cnt[score] lần.",
          pseudo: String.raw`cnt[0..10] <- 0
for each score:
    cnt[score]++
for score from 0 to 10:
    repeat cnt[score] times:
        print score`,
          code: String.raw`int cnt[11] = {};
for (int i = 0; i < n; ++i) {
    int score;
    cin >> score;
    cnt[score]++;
}
for (int score = 0; score <= 10; ++score) {
    while (cnt[score]--) cout << score << ' ';
}`
        },
        practice: [
          "Đếm tần suất chữ số 0..9 trong một dãy.",
          "Tìm giá trị xuất hiện nhiều nhất khi mọi a[i] nằm trong 0..10^6.",
          "Sắp xếp các số trong đoạn [-1000, 1000] bằng offset."
        ]
      }
    ],
    references: [
      {
        title: "VNOI Wiki - Thuật toán sắp xếp",
        url: "https://wiki.vnoi.info/algo/basic/sorting"
      },
      {
        title: "VNOI Wiki - Độ phức tạp thời gian",
        url: "https://wiki.vnoi.info/algo/basic/computational-complexity.md"
      }
    ],
    primaryIdea: "Ví dụ 1 sort danh sách thí sinh bằng comparator hai tiêu chí: điểm giảm dần, tên tăng dần.",
    primaryMethod: "Comparator so sánh khóa quan trọng nhất trước; nếu điểm bằng nhau mới so sánh tên.",
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
    },
    practice: [
      {
        title: "Ôn thi LHP 11: Sort nhiều tiêu chí",
        focus: "Comparator, thứ tự giảm/tăng xen kẽ, xử lý tie-break.",
        hint: "Viết rõ khóa 1, khóa 2, khóa 3; khóa nào quan trọng hơn thì so sánh trước."
      },
      {
        title: "Ôn thi LHP 11: Đếm tần suất",
        focus: "Counting với miền nhỏ, tìm mode, tìm số thiếu hoặc số lặp.",
        hint: "Nếu min/max của giá trị nhỏ, dùng cnt; nếu giá trị lớn nhưng ít phần tử, dùng map hoặc sort rồi đếm nhóm."
      },
      {
        title: "Ôn thi LHP 11: Sort rồi two pointer",
        focus: "Tìm cặp có tổng S, đếm số cặp thỏa điều kiện.",
        hint: "Sort tăng dần, đặt l ở đầu và r ở cuối, di chuyển theo tổng hiện tại."
      },
      {
        title: "Ôn thi LHP 11: Loại trùng",
        focus: "sort + unique hoặc đếm nhóm bằng nhau.",
        hint: "Sau sort, các phần tử bằng nhau nằm liên tiếp nên chỉ cần duyệt một lần."
      }
    ]
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
      "Theo VNOI Wiki, nhóm Math ở mức cơ bản thường xoay quanh chia hết, gcd/lcm, số nguyên tố, sàng, phân tích thừa số và modulo.",
      "Điểm quan trọng là biến một điều kiện tưởng như phải thử rất nhiều khả năng thành công thức hoặc thuật toán nhanh: Euclid O(log n), sàng O(n log log n), phân tích thừa số O(sqrt n).",
      "GCD là nền cho rút gọn phân số, LCM, kiểm tra nguyên tố cùng nhau và nhiều bài đếm theo chu kỳ.",
      "Modulo giúp giữ số nhỏ khi tính tổng, tích, lũy thừa hoặc quy hoạch động có đáp án lớn. Các phép cộng, trừ, nhân bảo toàn được theo modulo.",
      "Trong bài thi chuyên bổ sung lớp 11 chuyên Tin LHP TP.HCM, Math thường xuất hiện dưới dạng kiểm tra chia hết, đếm ước, nguyên tố, gcd của dãy, lcm an toàn và biểu thức lấy modulo."
    ],
    why: [
      "Nếu kiểm tra ước bằng cách duyệt 1..n thì rất chậm; nhận ra ước đi theo cặp d và n/d giúp giảm còn O(sqrt n).",
      "Thuật toán Euclid hoạt động vì tập ước chung của (a, b) giống tập ước chung của (b, a mod b), nên mỗi bước làm số nhỏ đi rất nhanh.",
      "Sàng Eratosthenes hiệu quả vì mỗi hợp số bị loại bởi một ước nguyên tố nhỏ; ta không cần kiểm tra từng số bằng phép chia đến sqrt.",
      "Modulo đúng vì nếu hai số có cùng số dư khi chia cho m, các phép cộng, trừ, nhân với chúng cũng cho cùng số dư theo m."
    ],
    method: [
      "Nếu bài hỏi gcd/lcm của hai số hoặc nhiều số, dùng gcd Euclid hoặc std::gcd trong C++17.",
      "Nếu chỉ kiểm tra một số có nguyên tố không, thử ước đến sqrt(n). Nếu cần nhiều số nguyên tố đến n, dùng sàng.",
      "Nếu cần phân tích thừa số, chia thử các p từ 2 đến sqrt(n), mỗi khi chia được thì đếm số mũ của p.",
      "Nếu đề yêu cầu modulo, lấy modulo sau mỗi phép cộng hoặc nhân, và chuẩn hóa phép trừ bằng (x - y + MOD) % MOD.",
      "Khi tính lcm, dùng a / gcd(a,b) * b thay vì a * b / gcd(a,b) để giảm nguy cơ tràn."
    ],
    conceptSections: [
      {
        title: "Chia hết, ước số và cặp ước",
        theory: [
          "b là ước của a khi a chia hết cho b, tức a % b == 0. Đây là phép kiểm tra nền tảng của hầu hết bài số học cơ bản.",
          "Nếu d là ước của n thì n / d cũng là ước của n. Vì vậy chỉ cần duyệt d đến sqrt(n), ta đã tìm được cả cặp ước.",
          "Khi d * d == n, chỉ cộng một ước vì d và n / d trùng nhau.",
          "Cặp ước giúp giảm duyệt 1..n xuống O(sqrt n), rất quan trọng trong bài thi có n lớn."
        ],
        example: {
          title: "Ví dụ: Đếm số ước của n",
          statement: "Đọc n, in số lượng ước dương của n.",
          idea: "Duyệt d từ 1 đến sqrt(n). Nếu d chia hết n, ta có cặp d và n / d.",
          method: "Cộng 2 cho mỗi cặp khác nhau, cộng 1 nếu d * d == n.",
          pseudo: String.raw`read n
answer <- 0
for d from 1 while d * d <= n:
    if n mod d = 0:
        if d * d = n: answer <- answer + 1
        else: answer <- answer + 2
print answer`,
          code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    long long ans = 0;
    for (long long d = 1; d * d <= n; ++d) {
        if (n % d == 0) {
            ans += (d * d == n ? 1 : 2);
        }
    }
    cout << ans << '\n';
    return 0;
}`
        },
        practice: [
          "In tất cả ước của n theo thứ tự tăng dần.",
          "Kiểm tra n có đúng 3 ước hay không.",
          "Tìm ước lớn nhất nhỏ hơn n."
        ]
      },
      {
        title: "GCD, LCM và thuật toán Euclid",
        theory: [
          "GCD của a và b là ước dương lớn nhất chia hết cả hai số.",
          "Thuật toán Euclid dùng công thức gcd(a,b)=gcd(b,a mod b) và dừng khi b = 0.",
          "Độ phức tạp O(log min(a,b)), nhanh hơn rất nhiều so với thử mọi ước.",
          "LCM liên hệ với GCD qua công thức lcm(a,b)=a/gcd(a,b)*b. Nên chia trước rồi nhân để tránh tràn."
        ],
        example: {
          title: "Ví dụ: GCD của cả dãy",
          statement: "Cho n số, tìm gcd của toàn bộ dãy.",
          idea: "gcd có tính kết hợp: gcd(a,b,c)=gcd(gcd(a,b),c).",
          method: "Khởi tạo g = 0, lần lượt cập nhật g = gcd(g, x).",
          pseudo: String.raw`g <- 0
for each x in array:
    g <- gcd(g, x)
print g`,
          code: String.raw`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    long long g = 0;
    for (int i = 0; i < n; ++i) {
        long long x;
        cin >> x;
        g = gcd(g, x);
    }
    cout << g << '\n';
    return 0;
}`
        },
        practice: [
          "Rút gọn phân số a/b.",
          "Tìm lcm của hai số bằng a / gcd(a,b) * b.",
          "Cho dãy n số, kiểm tra gcd của cả dãy có lớn hơn 1 không."
        ]
      },
      {
        title: "Kiểm tra số nguyên tố",
        theory: [
          "Số nguyên tố là số tự nhiên có đúng hai ước dương: 1 và chính nó.",
          "Nếu n có một ước khác 1 và n, thì n có ít nhất một ước không vượt sqrt(n). Do đó chỉ cần thử d * d <= n.",
          "Cần loại n < 2 trước, vì 0 và 1 không phải số nguyên tố.",
          "Kiểm tra từng số bằng O(sqrt n) hợp khi số lượng truy vấn ít. Nếu có nhiều truy vấn, nên dùng sàng."
        ],
        example: {
          title: "Ví dụ: Hàm isPrime",
          statement: "Đọc n, in YES nếu n là số nguyên tố.",
          idea: "Không cần thử đến n - 1, chỉ thử đến sqrt(n).",
          method: "Nếu n < 2 trả false. Duyệt d từ 2, nếu n % d == 0 thì không nguyên tố.",
          pseudo: String.raw`isPrime(n):
    if n < 2: return false
    for d from 2 while d * d <= n:
        if n mod d = 0: return false
    return true`,
          code: String.raw`bool isPrime(long long n) {
    if (n < 2) return false;
    for (long long d = 2; d * d <= n; ++d) {
        if (n % d == 0) return false;
    }
    return true;
}`
        },
        practice: [
          "Đếm số nguyên tố trong n số đã nhập.",
          "Tìm số nguyên tố nhỏ nhất lớn hơn hoặc bằng x.",
          "Kiểm tra một số có đúng 3 ước hay không bằng căn bậc hai và isPrime."
        ]
      },
      {
        title: "Sàng Eratosthenes",
        theory: [
          "Sàng dùng mảng isPrime để đánh dấu số nào còn là nguyên tố trong đoạn 0..n.",
          "Ban đầu coi mọi số từ 2 trở lên là nguyên tố. Với mỗi p còn nguyên tố, đánh dấu các bội của p là hợp số.",
          "Bắt đầu đánh dấu từ p * p vì các bội nhỏ hơn đã có ước nguyên tố nhỏ hơn p xử lý trước đó.",
          "Độ phức tạp thường dùng là O(n log log n), rất phù hợp khi cần trả lời nhiều truy vấn nguyên tố."
        ],
        example: {
          title: "Ví dụ: In số nguyên tố đến n",
          statement: "Đọc n, in mọi số nguyên tố không vượt quá n.",
          idea: "Sàng trước toàn bộ đoạn 0..n, sau đó duyệt in các vị trí còn true.",
          method: "Đánh dấu 0 và 1 là false, rồi với mỗi p từ 2 đến sqrt(n), đánh dấu bội từ p * p.",
          pseudo: String.raw`isPrime[0] <- false, isPrime[1] <- false
for p from 2 while p * p <= n:
    if isPrime[p]:
        for x from p * p to n step p:
            isPrime[x] <- false
print all i where isPrime[i] is true`,
          code: String.raw`vector<bool> isPrime(n + 1, true);
if (n >= 0) isPrime[0] = false;
if (n >= 1) isPrime[1] = false;

for (long long p = 2; p * p <= n; ++p) {
    if (isPrime[p]) {
        for (long long x = p * p; x <= n; x += p) {
            isPrime[x] = false;
        }
    }
}`
        },
        practice: [
          "Có q truy vấn x, trả lời x có nguyên tố không.",
          "Đếm số nguyên tố trong đoạn [l, r] bằng prefix trên isPrime.",
          "Tìm tổng các số nguyên tố không vượt n."
        ]
      },
      {
        title: "Modulo cơ bản",
        theory: [
          "a mod m là số dư của a khi chia cho m. Hai số đồng dư modulo m nếu chúng có cùng số dư khi chia cho m.",
          "Nếu a và b được thay bằng số dư của chúng, phép cộng, trừ, nhân vẫn cho cùng kết quả modulo m.",
          "Với biểu thức lớn, nên lấy modulo sau từng phép toán để tránh tràn số và giữ giá trị nhỏ.",
          "Phép trừ cần chuẩn hóa: (a - b + MOD) % MOD để không bị số âm trong C++."
        ],
        example: {
          title: "Ví dụ: Tính tổng bình phương modulo",
          statement: "Cho n số, tính tổng x^2 modulo 1e9+7.",
          idea: "Mỗi x có thể lớn, nên lấy x %= MOD rồi nhân bằng long long.",
          method: "Cộng từng x*x vào ans và lấy modulo sau mỗi lần cộng.",
          pseudo: String.raw`MOD <- 1000000007
answer <- 0
for each x:
    x <- x mod MOD
    answer <- (answer + x * x) mod MOD
print answer`,
          code: String.raw`const long long MOD = 1000000007;
long long ans = 0;
for (int i = 0; i < n; ++i) {
    long long x;
    cin >> x;
    x %= MOD;
    ans = (ans + x * x) % MOD;
}
cout << ans << '\n';`
        },
        practice: [
          "Tính tổng n số modulo MOD.",
          "Tính tích n số modulo MOD.",
          "Tính biểu thức (a - b + c) modulo MOD, chú ý kết quả không âm."
        ]
      },
      {
        title: "Phân tích thừa số nguyên tố",
        theory: [
          "Phân tích thừa số nguyên tố viết n thành tích p1^e1 * p2^e2 * ... với các p là nguyên tố.",
          "Cách cơ bản là thử chia p từ 2 đến sqrt(n). Khi n chia hết cho p, chia liên tục để đếm số mũ.",
          "Sau vòng lặp, nếu n > 1 thì phần còn lại là một thừa số nguyên tố.",
          "Từ phân tích thừa số, số ước của n là tích (ei + 1)."
        ],
        example: {
          title: "Ví dụ: Tính số ước bằng phân tích thừa số",
          statement: "Đọc n, in số lượng ước dương của n.",
          idea: "Nếu n = p1^e1 * p2^e2 * ... thì mỗi ước chọn số mũ từ 0..ei, nên có tích (ei + 1) cách.",
          method: "Phân tích n, nhân đáp án với exp + 1 cho từng thừa số.",
          pseudo: String.raw`answer <- 1
for p from 2 while p * p <= n:
    if n mod p = 0:
        exp <- 0
        while n mod p = 0:
            n <- n / p
            exp <- exp + 1
        answer <- answer * (exp + 1)
if n > 1:
    answer <- answer * 2
print answer`,
          code: String.raw`long long countDivisors(long long n) {
    long long ans = 1;
    for (long long p = 2; p * p <= n; ++p) {
        if (n % p == 0) {
            int exp = 0;
            while (n % p == 0) {
                n /= p;
                exp++;
            }
            ans *= (exp + 1);
        }
    }
    if (n > 1) ans *= 2;
    return ans;
}`
        },
        practice: [
          "Phân tích n và in từng cặp p^e.",
          "Tính số ước của từng số trong một danh sách nhỏ.",
          "Kiểm tra n có phải số chính phương bằng số mũ trong phân tích thừa số."
        ]
      }
    ],
    references: [
      {
        title: "VNOI Wiki - Thuật toán Euclid",
        url: "https://wiki.vnoi.info/algo/algebra/euclid"
      },
      {
        title: "VNOI Wiki - Modulo cơ bản",
        url: "https://wiki.vnoi.info/algo/math/modulo"
      },
      {
        title: "VNOI Wiki - Kiểm tra số nguyên tố",
        url: "https://wiki.vnoi.info/algo/algebra/primality_check.md"
      },
      {
        title: "VNOI Wiki - Sàng nguyên tố",
        url: "https://wiki.vnoi.info/algo/algebra/prime_sieve.md"
      },
      {
        title: "VNOI Wiki - Phân tích thừa số nguyên tố",
        url: "https://wiki.vnoi.info/algo/math/integer-factorization"
      },
      {
        title: "VNOI Wiki - Số các ước và Tổng các ước",
        url: "https://wiki.vnoi.info/algo/math/divisors"
      }
    ],
    primaryIdea: "Ví dụ 1 dùng gcd để rút gọn phân số a/b, vì chia cả tử và mẫu cho cùng ƯCLN sẽ giữ giá trị phân số.",
    primaryMethod: "Tính g = gcd(abs(a), abs(b)), chia cả a và b cho g, sau đó chuẩn hóa mẫu dương.",
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
    },
    practice: [
      {
        title: "Ôn thi LHP 11: GCD của dãy",
        focus: "Dùng gcd kết hợp, rút gọn hoặc kiểm tra chia hết chung.",
        hint: "Khởi tạo g = 0, với mỗi x cập nhật g = gcd(g, x)."
      },
      {
        title: "Ôn thi LHP 11: Nguyên tố và sàng",
        focus: "Kiểm tra nhiều số có nguyên tố không, đếm số nguyên tố trong đoạn.",
        hint: "Nếu có nhiều truy vấn đến cùng giới hạn n, sàng một lần rồi trả lời O(1)."
      },
      {
        title: "Ôn thi LHP 11: Số ước",
        focus: "Duyệt cặp ước hoặc phân tích thừa số nguyên tố.",
        hint: "Với một n đơn lẻ, duyệt d*d <= n là đủ; với nhiều số, cân nhắc sàng ước nhỏ nhất."
      },
      {
        title: "Ôn thi LHP 11: Biểu thức modulo",
        focus: "Cộng, trừ, nhân và chuẩn hóa số dư.",
        hint: "Sau phép trừ dùng (x - y + MOD) % MOD để tránh kết quả âm."
      }
    ]
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
