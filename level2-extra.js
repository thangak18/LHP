(() => {
  const guides = window.lessonGuides || {};
  window.lessonGuides = guides;

  function extend(title, data) {
    guides[title] = Object.assign(guides[title] || {}, data);
  }

  extend("Binary Search", {
    deepTheory: [
      "Binary search dùng khi miền xét có tính đơn điệu: sau một ranh giới nào đó, kết quả chuyển hẳn từ sai sang đúng hoặc từ đúng sang sai.",
      "Với mảng đã sắp xếp, tính đơn điệu đến từ thứ tự tăng dần. Nếu a[mid] < x thì mọi vị trí bên trái mid cũng không thể là vị trí đầu tiên có giá trị >= x.",
      "Với binary search on answer, ta không tìm cấu hình tối ưu trực tiếp. Ta đoán một đáp án mid rồi kiểm tra mid có đủ tốt không.",
      "Hàm kiểm tra can(mid) là phần quan trọng nhất. Nếu can không đơn điệu, binary search sẽ loại nhầm nửa chứa đáp án.",
      "Dạng tìm nhỏ nhất thỏa điều kiện thường có mẫu false...false true...true. Nếu can(mid) đúng thì đáp án nằm ở bên trái hoặc chính mid.",
      "Dạng tìm lớn nhất thỏa điều kiện thường có mẫu true...true false...false. Nếu can(mid) đúng thì còn có thể thử lớn hơn.",
      "Biên trái và biên phải phải chắc chắn chứa đáp án. Với bài tối ưu, biên thường là giá trị nhỏ nhất có thể và giá trị lớn nhất chắc chắn đủ.",
      "Trong C++, lower_bound và upper_bound là hai hàm binary search chuẩn trên dãy đã sort, giúp giảm lỗi biên khi đếm hoặc tìm vị trí."
    ],
    why: [
      "Mỗi bước kiểm tra mid loại bỏ được một nửa miền tìm kiếm nhờ tính đơn điệu.",
      "Binary search on answer biến bài toán tối ưu thành nhiều bài toán yes/no, thường dễ chứng minh và dễ cài hơn.",
      "Nếu can(mid) chạy O(n), tổng thời gian thường là O(n log R), với R là độ rộng miền đáp án.",
      "Các lỗi phổ biến là chọn sai biên, cập nhật l/r ngược, hoặc viết can(mid) không thật sự đơn điệu."
    ],
    method: [
      "Bước 1: nhận diện đại lượng cần tối ưu: nhỏ nhất, lớn nhất, nhanh nhất, chậm nhất, sức chứa nhỏ nhất, khoảng cách lớn nhất.",
      "Bước 2: thử đặt câu hỏi yes/no: với giá trị mid, có làm được không?",
      "Bước 3: kiểm tra tính đơn điệu: mid tăng thì bài dễ hơn hay khó hơn?",
      "Bước 4: chọn biên [l, r] sao cho đáp án chắc chắn nằm trong đó.",
      "Bước 5: tìm nhỏ nhất thỏa thì dùng if (can(mid)) r = mid; else l = mid + 1.",
      "Bước 6: tìm lớn nhất thỏa thì dùng mid = l + (r - l + 1) / 2; nếu can(mid) đúng thì l = mid, ngược lại r = mid - 1.",
      "Bước 7: tự tạo test biên: n = 1, đáp án bằng l, đáp án bằng r, tất cả phần tử bằng nhau."
    ],
    conceptSections: [
      {
        title: "Tìm trên mảng đã sort",
        theory: [
          "Dạng này tìm vị trí hoặc số lượng phần tử thỏa điều kiện trong dãy đã sắp xếp.",
          "lower_bound(a, x) trả vị trí đầu tiên có giá trị >= x.",
          "upper_bound(a, x) trả vị trí đầu tiên có giá trị > x.",
          "Số phần tử bằng x là upper_bound(x) - lower_bound(x). Số phần tử trong [L, R] là upper_bound(R) - lower_bound(L)."
        ],
        example: {
          title: "Ví dụ: Đếm phần tử trong đoạn",
          statement: "Cho mảng đã sort và nhiều truy vấn [L, R], đếm số phần tử nằm trong đoạn.",
          idea: "Đầu đoạn là lower_bound(L), sau cuối đoạn là upper_bound(R).",
          method: "Trừ hai iterator để lấy số lượng phần tử hợp lệ.",
          pseudo: String.raw`sort a
for each query L, R:
    left <- lower_bound(a, L)
    right <- upper_bound(a, R)
    print right - left`
        },
        practice: [
          "Tìm vị trí đầu tiên a[i] >= x.",
          "Đếm số lần xuất hiện của x trong mảng đã sort.",
          "Đếm số phần tử thuộc [L, R] cho q truy vấn."
        ]
      },
      {
        title: "Binary search on answer",
        theory: [
          "Dạng này tìm trên miền giá trị đáp án, không nhất thiết có sẵn một mảng để tìm.",
          "Cần viết can(mid) càng rõ càng tốt: chỉ trả true hoặc false.",
          "Ví dụ sức chứa càng lớn càng dễ chở hết hàng, nên tìm sức chứa nhỏ nhất thỏa điều kiện."
        ],
        example: {
          title: "Ví dụ: Chia sách",
          statement: "Chia n cuốn sách theo thứ tự thành không quá k nhóm liên tiếp, tối thiểu hóa tổng lớn nhất của một nhóm.",
          idea: "Nếu giới hạn là X, tham lam gom sách từ trái sang phải sẽ dùng số nhóm ít nhất.",
          method: "Binary search X nhỏ nhất sao cho số nhóm cần dùng không vượt k.",
          pseudo: String.raw`can(limit):
    groups <- 1
    sum <- 0
    for pages in books:
        if sum + pages > limit:
            groups <- groups + 1
            sum <- 0
        sum <- sum + pages
    return groups <= k`
        },
        practice: [
          "Tìm tốc độ nhỏ nhất để hoàn thành công việc trong h giờ.",
          "Tìm sức chứa nhỏ nhất của xe để chở hết hàng trong d ngày.",
          "Tìm khoảng cách lớn nhất nhỏ nhất khi đặt k điểm."
        ]
      }
    ],
    quickExamples: [
      {
        title: "Dấu hiệu nhận biết",
        problem: "Đề hỏi giá trị nhỏ nhất sao cho vẫn làm được.",
        steps: [
          "Đặt mid là đáp án thử.",
          "Viết can(mid) để kiểm tra có làm được không.",
          "Nếu mid tăng làm bài dễ hơn, dùng mẫu tìm nhỏ nhất thỏa."
        ],
        result: "Đây thường là binary search on answer."
      },
      {
        title: "Đếm trong đoạn",
        problem: "Mảng đã sort, cần đếm phần tử trong [3, 10].",
        steps: [
          "left = lower_bound(3).",
          "right = upper_bound(10).",
          "answer = right - left."
        ],
        result: "Mỗi truy vấn O(log n)."
      }
    ],
    practice: [
      {
        title: "Bài mẫu: Chia sách cho k nhóm",
        statement: "Cho n cuốn sách theo thứ tự và k nhóm. Chia sách thành các đoạn liên tiếp sao cho tổng trang lớn nhất của một nhóm là nhỏ nhất.",
        focus: "Binary search on answer và greedy kiểm tra.",
        hint: "Đáp án nằm từ max(a[i]) đến sum(a[i]).",
        idea: "Với giới hạn X, gom sách từ trái sang phải. Khi thêm sách làm vượt X thì mở nhóm mới. Cách này dùng ít nhóm nhất với X.",
        method: "Binary search X nhỏ nhất sao cho greedy dùng không quá k nhóm.",
        sampleInput: String.raw`5 3
10 20 30 40 50`,
        sampleOutput: String.raw`60`,
        explanation: "Có thể chia [10,20,30], [40], [50], tổng lớn nhất là 60. Không thể nhỏ hơn 60 với thứ tự này.",
        pseudo: String.raw`l <- max(a)
r <- sum(a)
while l < r:
    mid <- (l + r) / 2
    if can(mid): r <- mid
    else l <- mid + 1
print l`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

bool canDivide(const vector<int>& a, int k, long long limit) {
    int groups = 1;
    long long sum = 0;
    for (int x : a) {
        if (x > limit) return false;
        if (sum + x > limit) {
            groups++;
            sum = 0;
        }
        sum += x;
    }
    return groups <= k;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    long long l = 0, r = 0;
    for (int &x : a) {
        cin >> x;
        l = max(l, (long long)x);
        r += x;
    }
    while (l < r) {
        long long mid = l + (r - l) / 2;
        if (canDivide(a, k, mid)) r = mid;
        else l = mid + 1;
    }
    cout << l << '\n';
    return 0;
}`
      }
    ],
    references: [
      { title: "VNOI - Tìm kiếm nhị phân", url: "https://wiki.vnoi.info/algo/basic/Binary-Search" }
    ]
  });

  extend("Coordinate Compression", {
    deepTheory: [
      "Coordinate compression, hay rời rạc hóa, biến các giá trị lớn hoặc thưa thành chỉ số nhỏ liên tiếp.",
      "Kỹ thuật này giữ quan hệ bằng nhau và thứ tự tương đối. Nếu x < y thì rank(x) < rank(y).",
      "Nén tọa độ không giữ khoảng cách thật. Hai giá trị 10 và 1000000 có thể thành rank 1 và rank 2, nhưng khoảng cách thật không phải 1.",
      "Cách chuẩn là copy toàn bộ giá trị cần nén vào values, sort, erase unique, rồi lower_bound từng giá trị gốc.",
      "Nếu cần dùng Fenwick hoặc Segment Tree theo giá trị, nén giúp biến chỉ số từ 1..1e9 thành 1..m với m <= n.",
      "Nếu chỉ cần phân nhóm bằng nhau và không cần thứ tự, map hoặc unordered_map có thể đủ. Nếu cần so sánh lớn nhỏ, nên sort unique.",
      "Khi nén đoạn [l, r], có bài cần thêm cả l, r, l - 1 hoặc r + 1 vào danh sách nén để không mất thông tin biên."
    ],
    why: [
      "Không thể tạo mảng cnt kích thước 1e9, nhưng có thể tạo cnt kích thước số giá trị phân biệt.",
      "Sort unique tạo bảng ánh xạ từ giá trị gốc sang rank duy nhất.",
      "lower_bound trả đúng vị trí của giá trị trong bảng đã sort, nên các giá trị bằng nhau có cùng rank.",
      "Sau nén, ta vẫn có thể duyệt theo thứ tự giá trị tăng dần bằng cách duyệt rank tăng dần."
    ],
    method: [
      "Bước 1: gom mọi giá trị cần nén vào vector values.",
      "Bước 2: sort values.",
      "Bước 3: xóa trùng bằng erase(unique()).",
      "Bước 4: rank 0-based của x là lower_bound(values, x) - values.begin().",
      "Bước 5: nếu dùng Fenwick, đổi sang 1-based bằng rank + 1.",
      "Bước 6: muốn lấy giá trị gốc từ rank 0-based r thì dùng values[r].",
      "Bước 7: không dùng rank để tính khoảng cách hình học hoặc chênh lệch giá trị thật."
    ],
    conceptSections: [
      {
        title: "Rank 0-based và 1-based",
        theory: [
          "Rank 0-based hợp với vector thường vì chỉ số chạy từ 0 đến m - 1.",
          "Rank 1-based hợp với Fenwick Tree vì Fenwick không dùng chỉ số 0.",
          "Hai cách chỉ lệch nhau 1 đơn vị, nhưng phải thống nhất trong toàn bài."
        ],
        example: {
          title: "Ví dụ: 100, 20, 100, 7",
          statement: "Danh sách phân biệt tăng là 7, 20, 100.",
          idea: "Rank 1-based lần lượt là 3, 2, 3, 1.",
          method: "lower_bound trong values rồi cộng 1.",
          pseudo: String.raw`values <- sort unique of a
for x in a:
    print lower_bound(values, x) + 1`
        },
        practice: [
          "Nén dãy có số âm.",
          "In giá trị gốc từ rank.",
          "Đếm tần suất theo rank."
        ]
      },
      {
        title: "Nén để đếm tần suất",
        theory: [
          "Sau khi nén, cnt[rank] là số lần xuất hiện của values[rank].",
          "Cách này thường nhanh và gọn hơn map khi cần in theo thứ tự tăng.",
          "Nếu số giá trị phân biệt là m, bộ nhớ chỉ O(m)."
        ],
        example: {
          title: "Ví dụ: Đếm tọa độ lớn",
          statement: "Cho các tọa độ có thể tới 1e9, in từng tọa độ phân biệt và số lần xuất hiện.",
          idea: "Nén để tạo cnt nhỏ.",
          method: "Duyệt a để tăng cnt[rank], sau đó duyệt values để in.",
          pseudo: String.raw`compress a into values
cnt[rank(x)]++ for every x
for i from 0 to m - 1:
    print values[i], cnt[i]`
        },
        practice: [
          "Đếm tần suất màu áo mã số lớn.",
          "Nén điểm số để xếp hạng.",
          "Nén tọa độ trước khi dùng Fenwick."
        ]
      }
    ],
    quickExamples: [
      {
        title: "Khi nào nên nén?",
        problem: "n = 2e5, a[i] <= 1e9, cần cnt[a[i]].",
        steps: [
          "Không tạo cnt kích thước 1e9.",
          "Sort unique các giá trị xuất hiện.",
          "Dùng rank làm chỉ số cnt."
        ],
        result: "Bộ nhớ giảm xuống O(n)."
      },
      {
        title: "Cảnh báo",
        problem: "10 và 1000 sau nén thành 1 và 2.",
        steps: [
          "Thứ tự vẫn đúng.",
          "Khoảng cách rank là 1.",
          "Khoảng cách thật là 990."
        ],
        result: "Không dùng rank để thay khoảng cách thật."
      }
    ],
    practice: [
      {
        title: "Bài mẫu: In tần suất tọa độ lớn",
        statement: "Cho n số nguyên có thể âm hoặc rất lớn. In các giá trị phân biệt theo thứ tự tăng dần, kèm số lần xuất hiện.",
        focus: "Nén tọa độ kết hợp mảng đếm.",
        hint: "values sau sort unique vừa là bảng giải nén vừa là thứ tự in.",
        idea: "Mỗi giá trị được ánh xạ về một rank nhỏ. Tần suất của giá trị nằm ở cnt[rank].",
        method: "Nén toàn bộ a, duyệt a để tăng cnt, duyệt values để in đáp án.",
        sampleInput: String.raw`7
1000000000 -5 7 -5 7 7 1000000000`,
        sampleOutput: String.raw`-5 2
7 3
1000000000 2`,
        explanation: "Có ba giá trị phân biệt: -5 xuất hiện 2 lần, 7 xuất hiện 3 lần, 1000000000 xuất hiện 2 lần.",
        pseudo: String.raw`values <- copy a
sort unique values
cnt[0..m-1] <- 0
for x in a:
    cnt[rank(x)]++
for i from 0 to m - 1:
    print values[i], cnt[i]`,
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

    vector<int> cnt(values.size(), 0);
    for (long long x : a) {
        int rank = lower_bound(values.begin(), values.end(), x) - values.begin();
        cnt[rank]++;
    }
    for (int i = 0; i < (int)values.size(); ++i) {
        cout << values[i] << ' ' << cnt[i] << '\n';
    }
    return 0;
}`
      }
    ],
    references: [
      { title: "VNOI - Rời rạc hóa và ứng dụng", url: "https://wiki.vnoi.info/algo/trick/Roi-rac-hoa-va-ung-dung" }
    ]
  });

  extend("STACK", {
    deepTheory: [
      "Stack là cấu trúc LIFO: phần tử thêm sau cùng được lấy ra trước.",
      "Các thao tác push, pop, top, empty, size đều O(1), nhưng top và pop chỉ hợp lệ khi stack không rỗng.",
      "Stack hợp với bài cần xử lý phần tử gần nhất chưa ghép cặp: ngoặc, undo, DFS lặp, đường đi tạm thời.",
      "Monotonic stack giữ stack tăng hoặc giảm để tìm phần tử gần nhất lớn hơn/nhỏ hơn.",
      "Khi một phần tử bị pop khỏi monotonic stack, nó không còn cơ hội trở thành đáp án cho các vị trí tiếp theo.",
      "Mỗi phần tử được push một lần và pop tối đa một lần, nên tổng thời gian O(n) dù bên trong có while.",
      "Khi cần tính khoảng cách hoặc độ dài đoạn, stack nên lưu chỉ số thay vì chỉ lưu giá trị."
    ],
    why: [
      "Tính LIFO khớp với việc ngoặc đóng phải ghép với ngoặc mở gần nhất.",
      "Monotonic stack loại bỏ ứng viên bị phần tử mới che khuất.",
      "Tổng số lần pop không vượt quá n, nên thuật toán tuyến tính.",
      "Lưu chỉ số giúp biết phần tử nằm ở đâu và tính được độ dài đoạn."
    ],
    method: [
      "Bước 1: xác định cần phần tử gần nhất bên trái hay bên phải.",
      "Bước 2: chọn chiều duyệt phù hợp.",
      "Bước 3: quyết định stack tăng hay giảm.",
      "Bước 4: trong while, luôn kiểm tra !st.empty() trước khi dùng top.",
      "Bước 5: pop các phần tử không còn hữu ích.",
      "Bước 6: lấy đáp án từ top nếu có, rồi push phần tử hiện tại.",
      "Bước 7: với histogram, thêm cột 0 ở cuối để ép stack xả hết."
    ],
    conceptSections: [
      {
        title: "Stack kiểm tra ngoặc",
        theory: [
          "Gặp ngoặc mở thì push.",
          "Gặp ngoặc đóng thì đỉnh stack phải là ngoặc mở tương ứng.",
          "Kết thúc chuỗi, stack phải rỗng."
        ],
        example: {
          title: "Ví dụ: Dãy ngoặc đúng",
          statement: "Chuỗi (()()) hợp lệ vì mỗi ngoặc đóng đều khớp ngoặc mở gần nhất.",
          idea: "Ngoặc đóng xử lý phần tử ở đỉnh stack.",
          method: "Sai ngay nếu gặp ngoặc đóng khi stack rỗng.",
          pseudo: String.raw`for c in s:
    if c is opening: push c
    else:
        if stack empty or top does not match c: invalid
        pop
valid if stack empty`
        },
        practice: [
          "Kiểm tra ngoặc gồm (), [], {}.",
          "Tìm độ sâu lớn nhất của dãy ngoặc.",
          "Tìm vị trí lỗi đầu tiên."
        ]
      },
      {
        title: "Monotonic stack",
        theory: [
          "Stack đơn điệu giữ các ứng viên theo thứ tự tăng hoặc giảm.",
          "Dùng nhiều trong next greater, previous smaller, span chứng khoán và histogram.",
          "Điểm mấu chốt là phần tử bị pop sẽ không cần xét lại."
        ],
        example: {
          title: "Ví dụ: Phần tử lớn hơn gần nhất bên phải",
          statement: "Duyệt từ phải sang trái, stack giữ các ứng viên lớn hơn.",
          idea: "Các phần tử <= a[i] bị pop vì không thể là đáp án cho i.",
          method: "Sau khi pop, top là phần tử lớn hơn gần nhất nếu tồn tại.",
          pseudo: String.raw`for i from n - 1 downto 0:
    while stack not empty and top <= a[i]: pop
    ans[i] <- top or -1
    push a[i]`
        },
        practice: [
          "Tìm phần tử nhỏ hơn gần nhất bên trái.",
          "Tính stock span.",
          "Tính diện tích hình chữ nhật lớn nhất trong histogram."
        ]
      }
    ],
    quickExamples: [
      {
        title: "Dấu hiệu dùng stack",
        problem: "Đề có từ gần nhất, chưa ghép, quay lại trạng thái trước.",
        steps: [
          "Nếu là ghép cặp gần nhất, nghĩ stack.",
          "Nếu là lớn hơn/nhỏ hơn gần nhất, nghĩ monotonic stack.",
          "Nếu DFS đệ quy sâu, có thể mô phỏng bằng stack."
        ],
        result: "Stack thường biến O(n^2) thành O(n)."
      },
      {
        title: "Lỗi runtime",
        problem: "Gọi st.top() khi stack rỗng.",
        steps: [
          "Viết điều kiện !st.empty() trước.",
          "Không pop nếu empty.",
          "Test chuỗi rỗng hoặc không có đáp án."
        ],
        result: "Tránh lỗi chạy khó dò."
      }
    ],
    practice: [
      {
        title: "Bài mẫu: Next greater element",
        statement: "Cho n số nguyên. Với mỗi vị trí i, in phần tử đầu tiên ở bên phải lớn hơn a[i], nếu không có in -1.",
        focus: "Monotonic stack duyệt từ phải sang trái.",
        hint: "Các phần tử nhỏ hơn hoặc bằng a[i] không thể là đáp án cho i.",
        idea: "Stack giữ các ứng viên lớn hơn từ gần đến xa. Sau khi pop các phần tử không lớn hơn a[i], top là đáp án.",
        method: "Duyệt i từ n - 1 về 0, cập nhật ans[i], rồi push a[i].",
        sampleInput: String.raw`5
2 1 5 3 4`,
        sampleOutput: String.raw`5 5 -1 4 -1`,
        explanation: "Bên phải 2 có 5 là phần tử lớn hơn đầu tiên; bên phải 5 không có phần tử lớn hơn.",
        pseudo: String.raw`stack <- empty
for i from n - 1 downto 0:
    while stack not empty and top <= a[i]:
        pop
    ans[i] <- top if exists else -1
    push a[i]
print ans`,
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
}`
      }
    ],
    references: [
      { title: "VNOI - Stack", url: "https://wiki.vnoi.info/algo/data-structures/Stack" }
    ]
  });

  extend("Queue - Deque - Priority Queue", {
    deepTheory: [
      "Queue là FIFO: vào trước ra trước. Nó là cấu trúc chuẩn cho BFS và mô phỏng hàng chờ.",
      "Deque là hàng đợi hai đầu, hỗ trợ thêm/xóa ở cả đầu và cuối trong O(1).",
      "Deque đơn điệu duy trì các ứng viên min/max của cửa sổ trượt. Đầu deque là đáp án hiện tại.",
      "Priority queue là heap. Trong C++, priority_queue mặc định là max-heap.",
      "Min-heap dùng priority_queue<T, vector<T>, greater<T>> hoặc đảo dấu giá trị.",
      "Priority queue hợp khi cần lặp lại thao tác lấy phần tử tốt nhất hiện tại: top k, Dijkstra, Prim, mô phỏng sự kiện.",
      "Queue/deque/priority_queue không xóa được phần tử bất kỳ như set. Nếu cần xóa linh hoạt, phải đổi cấu trúc hoặc dùng lazy deletion."
    ],
    why: [
      "BFS dùng queue vì các trạng thái ở khoảng cách nhỏ hơn được xử lý trước.",
      "Deque đơn điệu đúng vì phần tử mới tốt hơn sẽ làm phần tử cũ kém hơn và xa hơn trở nên vô dụng.",
      "Heap chỉ đảm bảo top tốt nhất, không đảm bảo toàn bộ dữ liệu được sắp xếp.",
      "Trong sliding window, mỗi chỉ số vào deque một lần và ra deque một lần, nên tổng O(n)."
    ],
    method: [
      "Dùng queue khi thứ tự xử lý là vào trước ra trước.",
      "Dùng deque khi cần thêm/xóa ở hai đầu hoặc xử lý cửa sổ trượt.",
      "Với max cửa sổ, deque lưu chỉ số theo giá trị giảm dần.",
      "Trước khi lấy đáp án, xóa các chỉ số đã ra khỏi cửa sổ.",
      "Dùng priority_queue khi cần lấy max/min động.",
      "Với pair trong heap, C++ so sánh first trước rồi second.",
      "Nếu heap chứa phần tử hết hạn, khi top không hợp lệ thì pop bỏ."
    ],
    conceptSections: [
      {
        title: "Queue cho BFS",
        theory: [
          "BFS duyệt đồ thị theo từng lớp khoảng cách.",
          "Khi một đỉnh được đưa vào queue lần đầu, khoảng cách của nó đã là nhỏ nhất trong đồ thị không trọng số.",
          "Queue đảm bảo đỉnh ở lớp d được xử lý trước lớp d + 1."
        ],
        example: {
          title: "Ví dụ: Đường đi ít cạnh nhất",
          statement: "Tìm khoảng cách từ đỉnh 1 tới mọi đỉnh trong đồ thị không trọng số.",
          idea: "Mỗi cạnh làm tăng khoảng cách thêm 1.",
          method: "dist[v] = dist[u] + 1 khi v chưa thăm.",
          pseudo: String.raw`push source
dist[source] <- 0
while queue not empty:
    u <- pop front
    for v adjacent to u:
        if dist[v] = -1:
            dist[v] <- dist[u] + 1
            push v`
        },
        practice: [
          "BFS trên lưới tìm số bước ngắn nhất.",
          "Đếm thành phần liên thông.",
          "Tìm đường đi ít cạnh nhất."
        ]
      },
      {
        title: "Deque đơn điệu",
        theory: [
          "Deque lưu chỉ số còn nằm trong cửa sổ hiện tại.",
          "Với max, giá trị trong deque giảm dần; với min, giá trị tăng dần.",
          "Khi thêm a[i], pop_back các chỉ số có giá trị không tốt bằng a[i]."
        ],
        example: {
          title: "Ví dụ: Max mọi cửa sổ độ dài k",
          statement: "In max của mỗi đoạn liên tiếp độ dài k.",
          idea: "Đầu deque luôn là chỉ số có giá trị lớn nhất còn hiệu lực.",
          method: "Xóa hết hạn ở đầu, xóa ứng viên yếu ở cuối, thêm i, rồi in a[dq.front()].",
          pseudo: String.raw`for i from 0 to n - 1:
    while front outside window: pop_front
    while deque not empty and a[back] <= a[i]: pop_back
    push_back i
    if i >= k - 1: print a[front]`
        },
        practice: [
          "Tìm min mọi cửa sổ độ dài k.",
          "Tìm max - min của mọi cửa sổ.",
          "Tìm đoạn dài nhất có max - min <= X."
        ]
      },
      {
        title: "Priority queue - heap",
        theory: [
          "Heap cho push/pop O(log n), lấy top O(1).",
          "priority_queue không cho xóa phần tử nằm giữa.",
          "Dùng min-heap khi cần lấy phần tử nhỏ nhất hiện tại."
        ],
        example: {
          title: "Ví dụ: Lấy k số lớn nhất",
          statement: "Push tất cả số vào max-heap rồi pop k lần.",
          idea: "Top của max-heap luôn là số lớn nhất còn lại.",
          method: "Mỗi lần pop loại số vừa in khỏi heap.",
          pseudo: String.raw`push all numbers into max heap
repeat k times:
    print heap.top
    pop heap`
        },
        practice: [
          "Tìm k số nhỏ nhất.",
          "Mô phỏng sự kiện theo thời gian nhỏ nhất.",
          "Dijkstra với min-heap."
        ]
      }
    ],
    quickExamples: [
      {
        title: "Chọn cấu trúc",
        problem: "Cần xử lý trạng thái theo thứ tự xuất hiện hoặc độ ưu tiên.",
        steps: [
          "Vào trước ra trước: queue.",
          "Hai đầu hoặc cửa sổ trượt: deque.",
          "Luôn lấy tốt nhất: priority_queue."
        ],
        result: "Chọn đúng cấu trúc làm code ngắn và đúng bản chất."
      },
      {
        title: "Max cửa sổ",
        problem: "n = 2e5, k = 500, hỏi max từng đoạn.",
        steps: [
          "Duyệt từng đoạn O(nk) sẽ chậm.",
          "Deque đơn điệu đưa mỗi chỉ số vào/ra một lần.",
          "In a[dq.front()] khi đủ cửa sổ."
        ],
        result: "Độ phức tạp O(n)."
      }
    ],
    practice: [
      {
        title: "Bài mẫu: Max cửa sổ trượt",
        statement: "Cho n, k và dãy a. In giá trị lớn nhất của mọi đoạn liên tiếp độ dài k.",
        focus: "Deque đơn điệu lưu chỉ số.",
        hint: "Phần tử ở cuối deque nhỏ hơn a[i] sẽ không bao giờ là max khi a[i] còn nằm sau nó.",
        idea: "Deque giữ các ứng viên max theo giá trị giảm dần và theo chỉ số tăng dần.",
        method: "Mỗi i: xóa hết hạn, xóa ứng viên yếu, thêm i, in max nếu i >= k - 1.",
        sampleInput: String.raw`8 3
1 3 -1 -3 5 3 6 7`,
        sampleOutput: String.raw`3 3 5 5 6 7`,
        explanation: "Các cửa sổ lần lượt có max: max(1,3,-1)=3, max(3,-1,-3)=3, max(-1,-3,5)=5.",
        pseudo: String.raw`dq <- empty
for i from 0 to n - 1:
    remove indices <= i - k
    while dq not empty and a[dq.back] <= a[i]:
        pop_back
    push_back i
    if i >= k - 1:
        print a[dq.front]`,
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
}`
      }
    ],
    references: [
      { title: "VNOI - Deque", url: "https://wiki.vnoi.info/algo/data-structures/Deque" },
      { title: "VNOI - Deque min max", url: "https://wiki.vnoi.info/algo/data-structures/deque-min-max" },
      { title: "VNOI - Binary Heap", url: "https://wiki.vnoi.info/translate/wcipeg/Binary-Heap" },
      { title: "VNOI - BFS", url: "https://wiki.vnoi.info/algo/graph-theory/breadth-first-search.md" }
    ]
  });

  extend("Chia đôi tập", {
    deepTheory: [
      "Chia đôi tập, hay meet-in-the-middle, dùng khi brute force 2^n quá lớn nhưng n chỉ khoảng 30-40.",
      "Ý tưởng là tách n phần tử thành hai nửa, sinh toàn bộ kết quả của từng nửa, rồi ghép hai danh sách.",
      "Mỗi nửa có khoảng 2^(n/2) trạng thái. Với n = 40, mỗi nửa khoảng một triệu trạng thái.",
      "Kỹ thuật này thường dùng cho subset sum, đếm số tập con tổng S, tìm tổng lớn nhất không vượt S.",
      "Sau khi sinh tổng nửa phải, sort để dùng binary_search, lower_bound, upper_bound hoặc two pointer.",
      "Nếu cần đếm số cách, chú ý tổng trùng. equal_range giúp đếm số tổng bằng một giá trị.",
      "Nếu tổng có thể âm, kỹ thuật vẫn dùng được vì sort và binary search không phụ thuộc giá trị dương."
    ],
    why: [
      "Mỗi tập con của mảng gốc tương ứng duy nhất với một tập con bên trái và một tập con bên phải.",
      "Ghép mọi tổng trái với mọi tổng phải là xét đủ mọi tập con gốc.",
      "Sort một nửa giúp tìm phần bù nhanh thay vì duyệt toàn bộ cặp.",
      "Độ phức tạp giảm từ O(2^n) xuống khoảng O(2^(n/2) * n + 2^(n/2) log 2^(n/2))."
    ],
    method: [
      "Bước 1: chia mảng thành left và right.",
      "Bước 2: sinh mọi subset sum của từng nửa bằng mask hoặc backtracking.",
      "Bước 3: sort danh sách tổng của một nửa.",
      "Bước 4: với mỗi x trong L, tìm target - x hoặc giá trị lớn nhất <= S - x trong R.",
      "Bước 5: dùng equal_range để đếm số cách bằng target.",
      "Bước 6: dùng upper_bound để tìm tổng không vượt giới hạn.",
      "Bước 7: dùng long long và nhớ tính cả tập con rỗng."
    ],
    conceptSections: [
      {
        title: "Sinh tổng tập con",
        theory: [
          "Với m phần tử, có 2^m tập con.",
          "Bit i của mask bằng 1 nghĩa là chọn phần tử i.",
          "Tập con rỗng có tổng 0 và thường phải được tính."
        ],
        example: {
          title: "Ví dụ: Tổng của [2, 5, 7]",
          statement: "Các tổng có thể có gồm 0, 2, 5, 7, 7, 9, 12, 14.",
          idea: "Mỗi phần tử có hai lựa chọn: lấy hoặc không lấy.",
          method: "Duyệt mask từ 0 đến 2^m - 1.",
          pseudo: String.raw`for mask from 0 to 2^m - 1:
    sum <- 0
    for i from 0 to m - 1:
        if bit i is on: sum <- sum + a[i]
    append sum`
        },
        practice: [
          "Sinh mọi tổng của n <= 20 phần tử.",
          "Đếm số tổng khác nhau.",
          "Tìm tổng lớn nhất trong danh sách sums."
        ]
      },
      {
        title: "Ghép hai nửa",
        theory: [
          "Sort R để tìm phần bù cho mỗi x trong L.",
          "Đếm tổng đúng S dùng equal_range(R, S - x).",
          "Tối ưu tổng không vượt S dùng upper_bound(R, S - x), rồi lùi một vị trí."
        ],
        example: {
          title: "Ví dụ: Tổng lớn nhất không vượt S",
          statement: "Với mỗi tổng trái x, cần tổng phải lớn nhất <= S - x.",
          idea: "upper_bound tìm phần tử đầu tiên > S - x.",
          method: "Lùi iterator một bước để lấy y tốt nhất.",
          pseudo: String.raw`sort R
best <- 0
for x in L:
    it <- upper_bound(R, S - x)
    if it is not begin:
        it--
        best <- max(best, x + *it)`
        },
        practice: [
          "Đếm số subset có tổng đúng S.",
          "Tìm subset sum lớn nhất <= S.",
          "Đếm số subset có tổng trong [A, B]."
        ]
      }
    ],
    quickExamples: [
      {
        title: "Khi nào dùng?",
        problem: "n = 40, mỗi phần tử chọn hoặc không chọn.",
        steps: [
          "2^40 quá lớn.",
          "Chia thành hai nửa 20 và 20.",
          "Mỗi nửa có khoảng 1 triệu trạng thái."
        ],
        result: "Meet-in-the-middle vừa đủ nhanh."
      },
      {
        title: "Ghép để đếm",
        problem: "Cần số tập con tổng bằng S.",
        steps: [
          "Sinh L và R.",
          "Sort R.",
          "Với x trong L, cộng số phần tử R bằng S - x."
        ],
        result: "Dùng equal_range để xử lý tổng trùng."
      }
    ],
    practice: [
      {
        title: "Bài mẫu: Tổng tập con lớn nhất không vượt S",
        statement: "Cho n <= 40 số không âm và S. Tìm tổng lớn nhất của một tập con sao cho tổng không vượt S.",
        focus: "Meet-in-the-middle với upper_bound.",
        hint: "Sinh tổng hai nửa, sort nửa phải.",
        idea: "Một tập con đầy đủ bằng tập con bên trái cộng tập con bên phải. Với tổng trái x, chọn tổng phải lớn nhất không vượt S - x.",
        method: "Duyệt mọi x trong L, dùng upper_bound trên R để lấy y tốt nhất.",
        sampleInput: String.raw`5 17
3 8 2 10 5`,
        sampleOutput: String.raw`16`,
        explanation: "Có thể chọn 8 + 3 + 5 = 16. Không có tập con nào đạt 17.",
        pseudo: String.raw`split a into left and right
L <- all subset sums of left
R <- all subset sums of right
sort R
best <- 0
for x in L:
    y <- largest value in R with y <= S - x
    best <- max(best, x + y)
print best`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;

vector<long long> subsetSums(const vector<long long>& a) {
    int n = a.size();
    vector<long long> sums;
    for (int mask = 0; mask < (1 << n); ++mask) {
        long long sum = 0;
        for (int i = 0; i < n; ++i) {
            if (mask >> i & 1) sum += a[i];
        }
        sums.push_back(sum);
    }
    return sums;
}

int main() {
    int n;
    long long S;
    cin >> n >> S;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    vector<long long> left(a.begin(), a.begin() + n / 2);
    vector<long long> right(a.begin() + n / 2, a.end());
    auto L = subsetSums(left);
    auto R = subsetSums(right);
    sort(R.begin(), R.end());

    long long best = 0;
    for (long long x : L) {
        if (x > S) continue;
        auto it = upper_bound(R.begin(), R.end(), S - x);
        if (it == R.begin()) continue;
        --it;
        best = max(best, x + *it);
    }
    cout << best << '\n';
    return 0;
}`
      }
    ],
    references: [
      { title: "VNOI - Meet in the middle", url: "https://wiki.vnoi.info/algo/basic/meet-in-the-middle.md" }
    ]
  });

  extend("Math_2", {
    deepTheory: [
      "Math_2 tập trung vào modulo, lũy thừa nhanh, nghịch đảo modulo và tổ hợp.",
      "Modulo giúp giữ kết quả trong phạm vi nhỏ nhưng vẫn bảo toàn cộng, trừ, nhân theo đồng dư.",
      "Với phép trừ modulo, dùng (x - y + MOD) % MOD để tránh kết quả âm.",
      "Lũy thừa nhanh tính a^b trong O(log b) bằng cách đọc bit của b.",
      "Nghịch đảo modulo của a theo mod m là x sao cho a*x ≡ 1 (mod m), tồn tại khi gcd(a, m) = 1.",
      "Nếu MOD là số nguyên tố, inv(a) = a^(MOD - 2) mod MOD với a không chia hết cho MOD.",
      "Tổ hợp C(n, k) mod MOD với nhiều truy vấn thường cần fact và invFact để trả lời O(1).",
      "Không dùng pow(double) cho modulo số nguyên vì có sai số và không xử lý tốt số mũ lớn."
    ],
    why: [
      "Tính a^b trực tiếp mất O(b), quá chậm khi b lớn.",
      "Biểu diễn nhị phân của b chỉ có khoảng log2(b) bit.",
      "Fermat nhỏ cho phép đổi phép chia modulo thành nhân với nghịch đảo khi MOD nguyên tố.",
      "Tiền xử lý factorial giúp nhiều truy vấn tổ hợp chạy rất nhanh."
    ],
    method: [
      "Bước 1: đưa mọi phép cộng/nhân lớn về modulo ngay.",
      "Bước 2: viết modPow(a, b) chuẩn bằng while (b > 0).",
      "Bước 3: nếu cần chia cho b modulo MOD nguyên tố, nhân với modPow(b, MOD - 2).",
      "Bước 4: tiền xử lý fact[i] = fact[i - 1] * i % MOD.",
      "Bước 5: tính invFact[MAX] = modPow(fact[MAX], MOD - 2), rồi đi ngược để tính các invFact còn lại.",
      "Bước 6: C(n,k)=fact[n]*invFact[k]*invFact[n-k] % MOD.",
      "Bước 7: kiểm tra k < 0, k > n và trường hợp a % MOD = 0 khi lấy nghịch đảo."
    ],
    conceptSections: [
      {
        title: "Lũy thừa nhanh",
        theory: [
          "Tách b theo bit: b là tổng các lũy thừa của 2.",
          "Cơ sở lần lượt thành a, a^2, a^4, a^8...",
          "Khi bit hiện tại của b bằng 1, nhân cơ sở hiện tại vào đáp án."
        ],
        example: {
          title: "Ví dụ: 3^13 mod 100",
          statement: "13 có nhị phân 1101, nên 3^13 = 3^8 * 3^4 * 3^1.",
          idea: "Mỗi vòng bình phương cơ sở và chia đôi số mũ.",
          method: "Nếu b lẻ thì nhân res với a.",
          pseudo: String.raw`res <- 1
while b > 0:
    if b odd: res <- res * a mod MOD
    a <- a * a mod MOD
    b <- b / 2`
        },
        practice: [
          "Tính a^b mod m với b <= 1e18.",
          "Tính tổng lũy thừa theo modulo.",
          "Lũy thừa ma trận cơ bản."
        ]
      },
      {
        title: "Nghịch đảo modulo",
        theory: [
          "Nghịch đảo modulo giúp thực hiện phép chia trong modulo.",
          "Với MOD nguyên tố, inv(a)=a^(MOD-2) mod MOD.",
          "Nếu gcd(a, MOD) != 1 thì a không có nghịch đảo modulo MOD."
        ],
        example: {
          title: "Ví dụ: a / b modulo MOD",
          statement: "Tính a chia b theo modulo 1e9+7.",
          idea: "a / b tương đương a * inv(b).",
          method: "Tính inv(b) bằng lũy thừa nhanh.",
          pseudo: String.raw`invB <- modPow(b, MOD - 2)
answer <- a * invB mod MOD`
        },
        practice: [
          "Tính nghịch đảo của một số.",
          "Tính a / b mod 1e9+7.",
          "Nhận diện khi không dùng được Fermat."
        ]
      },
      {
        title: "Tổ hợp modulo",
        theory: [
          "C(n,k)=n!/(k!(n-k)!).",
          "Trong modulo nguyên tố, phép chia được thay bằng nhân nghịch đảo.",
          "Nếu có nhiều truy vấn, tiền xử lý fact và invFact."
        ],
        example: {
          title: "Ví dụ: Nhiều truy vấn C(n,k)",
          statement: "n <= 1e6, q lớn, cần trả lời nhiều C(n,k).",
          idea: "Tiền xử lý một lần, mỗi truy vấn O(1).",
          method: "Dùng fact[n] * invFact[k] * invFact[n-k].",
          pseudo: String.raw`precompute fact and invFact
for each query n, k:
    if k < 0 or k > n: print 0
    else print fact[n] * invFact[k] * invFact[n-k] mod MOD`
        },
        practice: [
          "Số cách chọn k học sinh từ n.",
          "Số đường đi lưới chỉ đi phải/xuống.",
          "Nhiều truy vấn C(n,k)."
        ]
      }
    ],
    quickExamples: [
      {
        title: "Chuẩn hóa modulo",
        problem: "Tính (a - b) mod MOD có thể âm.",
        steps: [
          "Tính x = (a - b) % MOD.",
          "Cộng MOD.",
          "Lấy % MOD lần nữa."
        ],
        result: "(a - b + MOD) % MOD luôn không âm."
      },
      {
        title: "Chia modulo",
        problem: "Tính 10 / 4 mod 1e9+7.",
        steps: [
          "Không chia trực tiếp bằng /.",
          "Tính inv4 = 4^(MOD-2).",
          "Đáp án = 10 * inv4 % MOD."
        ],
        result: "Phép chia được đổi thành phép nhân nghịch đảo."
      }
    ],
    practice: [
      {
        title: "Bài mẫu: Nhiều truy vấn C(n, k)",
        statement: "Cho q truy vấn, mỗi truy vấn gồm n, k với 0 <= k <= n <= 1e6. In C(n, k) modulo 1e9+7.",
        focus: "Giai thừa, nghịch đảo modulo, lũy thừa nhanh.",
        hint: "Tiền xử lý fact và invFact một lần.",
        idea: "C(n,k)=n!/(k!(n-k)!). Vì MOD nguyên tố, chia bằng cách nhân nghịch đảo.",
        method: "Tính fact tăng dần, invFact bằng Fermat rồi đi ngược để có mọi invFact.",
        sampleInput: String.raw`3
5 2
6 3
10 0`,
        sampleOutput: String.raw`10
20
1`,
        explanation: "C(5,2)=10, C(6,3)=20, C(10,0)=1.",
        pseudo: String.raw`precompute fact and invFact
for each query n, k:
    if k < 0 or k > n: print 0
    else print fact[n] * invFact[k] * invFact[n-k] mod MOD`,
        code: String.raw`#include <bits/stdc++.h>
using namespace std;
const long long MOD = 1000000007;
const int MAXN = 1000000;

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
    vector<long long> fact(MAXN + 1), invFact(MAXN + 1);
    fact[0] = 1;
    for (int i = 1; i <= MAXN; ++i) fact[i] = fact[i - 1] * i % MOD;
    invFact[MAXN] = modPow(fact[MAXN], MOD - 2);
    for (int i = MAXN; i >= 1; --i) invFact[i - 1] = invFact[i] * i % MOD;

    int q;
    cin >> q;
    while (q--) {
        int n, k;
        cin >> n >> k;
        if (k < 0 || k > n) cout << 0 << '\n';
        else cout << fact[n] * invFact[k] % MOD * invFact[n - k] % MOD << '\n';
    }
    return 0;
}`
      }
    ],
    references: [
      { title: "VNOI - Lũy thừa nhị phân", url: "https://wiki.vnoi.info/algo/algebra/binary_exponentation.md" },
      { title: "VNOI - Modulo cơ bản", url: "https://wiki.vnoi.info/algo/math/modulo" },
      { title: "VNOI - Nghịch đảo modulo", url: "https://wiki.vnoi.info/algo/math/modular-inverse" },
      { title: "VNOI - Cách tính nCk", url: "https://wiki.vnoi.info/algo/algebra/nCk" }
    ]
  });
})();
