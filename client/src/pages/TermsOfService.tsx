import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: "Phạm vi áp dụng của Thỏa thuận" },
    { id: 2, title: "Sản phẩm và Dịch vụ của chúng tôi" },
    { id: 3, title: "Đăng ký, sử dụng và hủy tài khoản BCP" },
    { id: 4, title: "Quy tắc ứng xử của Người dùng" },
    { id: 5, title: "Bảo mật dữ liệu" },
    { id: 6, title: "Dịch vụ trả phí" },
    { id: 7, title: "Quyền sở hữu trí tuệ và Quyền sở hữu 'Credits'" },
    { id: 8, title: "Tuyên bố miễn trừ trách nhiệm và Giới hạn trách nhiệm" },
    { id: 9, title: "Thẩm quyền xét xử" },
    { id: 10, title: "Các điều khoản khác" },
  ];

  return (
    <div className="min-h-screen bg-deep-dark text-gray-200">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <nav className="sticky top-32">
              <ul className="space-y-2 border-l border-gray-800">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`block w-full text-left pl-4 py-2 transition-colors duration-200 ${
                        activeSection === section.id
                          ? "border-l-2 border-electric-purple text-electric-purple font-semibold -ml-[1px]"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {section.id}. {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-9"
          >
            <h1 className="text-4xl font-heading font-bold mb-4 text-white">
              Điều Khoản Dịch Vụ
            </h1>
            <p className="text-gray-400 mb-8">Cập nhật: Tháng 3/2024</p>

            <div className="prose prose-invert max-w-none space-y-6">
              <section id="section1">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  1. Phạm vi áp dụng của Thỏa thuận
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    1.1. Chính sách Quyền Riêng tư, Hướng dẫn nền tảng/người
                    dùng, Điều khoản Dịch vụ và tất cả các quy định kỹ thuật do
                    BCP ban hành, bao gồm cả các quy định hiện có và những quy
                    định sẽ được phát hành trong tương lai, đều được tích hợp
                    vào và là một phần không thể tách rời của Thỏa thuận này,
                    tạo thành một thỏa thuận hoàn chỉnh. Các cập nhật này sẽ có
                    hiệu lực ngay lập tức sau khi có thông báo ban hành. Chúng
                    tôi khuyến nghị bạn kiểm tra và cập nhật các tài liệu này
                    thường xuyên.
                  </p>

                  <p>
                    1.2. Thỏa thuận này được ký kết giữa BCP và các thành viên
                    sử dụng dịch vụ liên quan trên nền tảng. Khi bạn sử dụng nền
                    tảng và các dịch vụ mà BCP cung cấp, chúng tôi có quyền coi
                    rằng bạn đã hoàn toàn hiểu Thỏa thuận này và đồng ý tuân
                    thủ. Nếu bạn không đồng ý với bất kỳ nội dung nào của Thỏa
                    thuận, chúng tôi sẽ không cung cấp sản phẩm và dịch vụ cho
                    bạn, do đó vui lòng ngừng sử dụng ngay lập tức. Nếu không,
                    bất kỳ việc sử dụng hoặc thao tác nào của bạn sẽ được coi là
                    đã bị ràng buộc bởi Thỏa thuận này.
                  </p>

                  <p>
                    1.3. Thỏa thuận này có thể được cập nhật theo thời gian. Các
                    cập nhật sẽ được thông báo đến bạn thông qua các phương tiện
                    phù hợp, chẳng hạn như tin nhắn trong nền tảng. Nếu bạn
                    không đồng ý với phiên bản sửa đổi, vui lòng ngừng sử dụng
                    nền tảng ngay lập tức. Nếu bạn tiếp tục sử dụng, điều đó có
                    nghĩa là bạn đã hiểu và chấp nhận các điều khoản sửa đổi.
                  </p>

                  <p>
                    1.4. BCP hoạt động như một nền tảng trung gian kết nối B2B.
                    BCP miễn trừ rõ ràng mọi trách nhiệm và từ chối cung cấp hỗ
                    trợ cho bất kỳ tranh chấp hoặc vấn đề phát sinh từ giao dịch
                    giữa người dùng, bao gồm nhưng không giới hạn ở, giao dịch
                    tiền tệ, thỏa thuận chung, và giao dịch hoặc hoạt động không
                    được thực hiện hoặc ghi nhận trên nền tảng BCP.
                  </p>

                  <p>
                    Trong trường hợp tranh chấp, BCP bảo lưu quyền yêu cầu người
                    dùng cung cấp tất cả tài liệu liên quan và có thể thực hiện
                    tạm ngưng tài khoản hoặc hạn chế hoạt động trong quá trình
                    giải quyết tranh chấp. Khi phát hiện hoạt động gian lận
                    trong quá trình sử dụng nền tảng, BCP có quyền yêu cầu bồi
                    thường từ người dùng vi phạm, người này sẽ chịu trách nhiệm
                    hoàn toàn về tất cả hậu quả pháp lý liên quan.
                  </p>

                  <p>
                    1.5. BCP giữ quyền độc quyền xem xét, cấp, hoặc từ chối
                    quyền truy cập tài khoản người dùng dựa trên các tiêu chí đủ
                    điều kiện đã thiết lập và tuân thủ các điều khoản đã quy
                    định, mà không cần thông báo trước.
                  </p>

                  <p>
                    Hơn nữa, BCP bảo lưu quyền yêu cầu giải thích từ người dùng
                    và tìm kiếm bồi thường cho bất kỳ thiệt hại nào phát sinh
                    khi phát hiện hoặc nghi ngờ các hoạt động gian lận trong quá
                    trình sử dụng nền tảng.
                  </p>

                  <p>
                    1.6. Trong trường hợp có xung đột hoặc mâu thuẫn giữa Điều
                    khoản Dịch vụ và Chính sách Quyền Riêng tư, các điều khoản
                    được quy định trong Điều khoản Dịch vụ sẽ được ưu tiên áp
                    dụng. Mặc dù BCP cam kết bảo vệ quyền riêng tư của người
                    dùng, tất cả người dùng xác nhận và đồng ý rằng việc thực
                    thi các điều khoản hợp đồng, giải quyết tranh chấp và các
                    vấn đề tuân thủ sẽ được điều chỉnh chủ yếu theo Điều khoản
                    Dịch vụ. Chính sách Quyền Riêng tư sẽ được áp dụng theo cách
                    không làm mất hiệu lực hoặc mâu thuẫn với các nghĩa vụ và
                    điều kiện đã được quy định trong Điều khoản Dịch vụ.
                  </p>
                </div>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  2. Sản phẩm và Dịch vụ của chúng tôi
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    <strong>2.1. Đề xuất sản phẩm của chúng tôi</strong>
                  </p>
                  <p>
                    BCP là nền tảng kết nối B2B sử dụng trí tuệ nhân tạo (AI),
                    cung cấp cho các thành viên dịch vụ hỗ trợ kỹ thuật toàn
                    diện, bao gồm nhưng không giới hạn ở việc kết nối doanh
                    nghiệp, hỗ trợ mua bán, trao đổi sản phẩm/dịch vụ và tìm
                    kiếm đối tác phù hợp. Việc cung cấp các dịch vụ này nhằm đẩy
                    nhanh quá trình kết nối, xây dựng mối quan hệ với các đối
                    tác đáng tin cậy, đồng thời tối ưu hóa thời gian và chi phí
                    cho người dùng.
                  </p>

                  <p>
                    <strong>2.2. Cách thức sở hữu BCP</strong>
                  </p>
                  <p>
                    2.2.1. Người dùng có thể truy cập BCP thông qua trang web
                    chính thức hoặc tải xuống và cài đặt ứng dụng từ các kho ứng
                    dụng được ủy quyền chính thức. BCP phát triển các phiên bản
                    ứng dụng khác nhau phù hợp với nhiều thiết bị đầu cuối khác
                    nhau. Người dùng cần tải xuống và cài đặt phiên bản BCP
                    chính thức tương thích với thiết bị của mình.
                  </p>

                  <p>
                    2.2.2. Trong trường hợp gặp sự cố khi truy cập phiên bản
                    website hoặc khi tải xuống ứng dụng BCP, vui lòng liên hệ
                    ngay với chúng tôi qua trang web chính thức hoặc email hỗ
                    trợ để được trợ giúp kịp thời.
                  </p>

                  <p>
                    BCP không chịu trách nhiệm đối với bất kỳ rủi ro hay tổn
                    thất nào phát sinh khi người dùng tải ứng dụng hoặc truy cập
                    website từ các nguồn không được ủy quyền. Chúng tôi khuyến
                    nghị mạnh mẽ rằng bạn chỉ nên tải xuống và sử dụng BCP từ
                    các kênh phân phối chính thức để đảm bảo an toàn và bảo mật
                    dữ liệu.
                  </p>

                  <p>
                    <strong>
                      2.3. Trách nhiệm của người dùng đối với chi phí dữ liệu
                    </strong>
                  </p>
                  <p>
                    Để sử dụng BCP, người dùng cần có điện thoại di động hoặc
                    thiết bị đầu cuối phù hợp. BCP khuyến nghị người dùng sử
                    dụng thiết bị tương thích với phiên bản nền tảng được chỉ
                    định và duy trì kết nối Internet ổn định để đảm bảo hiệu
                    suất tốt nhất.
                  </p>

                  <p>
                    Người dùng hoàn toàn chịu trách nhiệm đối với mọi chi phí
                    liên quan đến kết nối Internet, dữ liệu di động, kết nối
                    thiết bị đầu cuối và các chi phí phát sinh khác.
                  </p>

                  <p>
                    <strong>2.4. Phạm vi sử dụng hợp pháp</strong>
                  </p>
                  <p>
                    Người dùng chỉ được phép tải xuống, sở hữu và sử dụng các
                    sản phẩm, dịch vụ của BCP tại các khu vực pháp lý mà Nền
                    tảng được cung cấp hợp pháp, đồng thời phải tuân thủ đầy đủ
                    các quy định của pháp luật địa phương.
                  </p>

                  <p>
                    Nếu người dùng truy cập hoặc sử dụng Dịch vụ tại một khu vực
                    có các điều khoản bổ sung riêng biệt, người dùng mặc nhiên
                    chấp nhận các điều khoản bổ sung áp dụng cho khu vực đó.
                    Trong trường hợp có sự mâu thuẫn giữa Điều khoản Bổ sung
                    theo khu vực và các Điều khoản chung, các Điều khoản Bổ sung
                    sẽ được ưu tiên áp dụng. Người dùng không đồng ý với các
                    Điều khoản này không được phép truy cập hoặc sử dụng Dịch vụ
                    của chúng tôi.
                  </p>

                  <p>
                    BCP có quyền hạn chế quyền truy cập vào Dịch vụ tại một số
                    quốc gia nếu thấy cần thiết.
                  </p>

                  <p>
                    <strong>2.5. Cập nhật Dịch vụ</strong>
                  </p>
                  <p>
                    Chúng tôi có quyền cập nhật Dịch vụ của BCP theo thời gian,
                    bao gồm nhưng không giới hạn ở việc sửa đổi, nâng cấp, tạm
                    dừng hoặc chấm dứt một số dịch vụ nhất định, giới thiệu dịch
                    vụ mới hoặc thay thế các gói phần mềm.
                  </p>

                  <p>
                    Bạn có toàn quyền quyết định có cập nhật hay không. Tuy
                    nhiên, nếu bạn không thực hiện cập nhật, bạn thừa nhận và
                    đồng ý chịu mọi trách nhiệm đối với những hạn chế hoặc gián
                    đoạn chức năng của BCP có thể xảy ra.
                  </p>

                  <p>
                    BCP có thể, theo quyết định riêng, gửi thông báo cập nhật để
                    đảm bảo trải nghiệm người dùng liền mạch.
                  </p>
                </div>
              </section>

              <section id="section3">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  3. Đăng ký, sử dụng và hủy tài khoản BCP
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    <strong>3.1. Đăng ký</strong>
                  </p>

                  <p>
                    BCP cung cấp kênh đăng ký tài khoản. Bạn bắt buộc phải đăng
                    ký bằng email công ty và số điện thoại. Ngoài ra, tất cả các
                    trường bắt buộc, bao gồm tên công ty, địa chỉ, mã số thuế,
                    người đại diện pháp lý và thông tin chi tiết về công ty,
                    phải được cung cấp chính xác để hoàn tất quá trình đăng ký
                    tài khoản.
                  </p>

                  <p>
                    <strong>3.2. Cài đặt thông tin</strong>
                  </p>

                  <p>
                    <strong>3.2.1. Hồ sơ người dùng</strong>
                  </p>

                  <p>
                    Khi hoàn tất đăng ký tài khoản, bạn có thể cần cung cấp thêm
                    một số thông tin cá nhân để xác minh, chẳng hạn như ảnh đại
                    diện, giới tính và bộ phận làm việc. Bạn đảm bảo rằng tất cả
                    thông tin bạn cung cấp là chính xác, hợp lệ và không chứa
                    thông tin sai lệch. Nếu thông tin bạn cung cấp dẫn đến sai
                    sót hoặc gây tổn thất cho BCP, bạn sẽ chịu trách nhiệm bồi
                    thường tổn thất đó, và BCP có quyền yêu cầu bồi thường từ
                    bạn.
                  </p>

                  <p>
                    Ngoài ra, thông tin người dùng có thể được chỉnh sửa, với
                    điều kiện tất cả các chỉnh sửa và bổ sung này phải tuân thủ
                    đầy đủ các quy định pháp luật, quy định địa phương, và phong
                    tục. Nếu thông tin bạn cung cấp không chính xác, không trung
                    thực, bất hợp pháp hoặc vi phạm Thỏa thuận này, BCP có quyền
                    yêu cầu bạn chỉnh sửa, bổ sung hoặc từ chối cung cấp dịch vụ
                    liên quan. Tuy nhiên, bạn hiểu và đồng ý rằng, vì lý do bảo
                    mật, một số thông tin ban đầu và thông tin xác minh có thể
                    không thể thay đổi.
                  </p>

                  <p>
                    <strong>3.2.2. Hồ sơ công ty</strong>
                  </p>

                  <p>
                    Sau khi đăng ký tài khoản, bạn có trách nhiệm cung cấp thêm
                    các thông tin bổ sung, bao gồm ngành nghề kinh doanh, sản
                    phẩm hoặc dịch vụ chính và Giấy phép Kinh doanh/Chứng nhận
                    Đăng ký Công ty hợp lệ để xác minh. Bạn đảm bảo rằng tất cả
                    thông tin cung cấp là chính xác, hợp lệ và không chứa thông
                    tin sai lệch hoặc gây hiểu lầm.
                  </p>

                  <p>
                    BCP bảo lưu quyền yêu cầu người dùng cập nhật kịp thời tình
                    trạng pháp lý của doanh nghiệp khi có bất kỳ thay đổi nào.
                    Người dùng có trách nhiệm chủ động thông báo và cung cấp đầy
                    đủ, chính xác các thông tin cập nhật liên quan đến tình
                    trạng pháp lý của doanh nghiệp. Đồng thời, người dùng phải
                    đảm bảo tuân thủ đầy đủ các điều kiện kinh doanh hợp pháp,
                    bao gồm nhưng không giới hạn theo quy định pháp luật tại nơi
                    doanh nghiệp hoạt động và nơi BCP đặt trụ sở.
                  </p>

                  <p>
                    BCP có toàn quyền rà soát, xác minh, và đánh giá tính chính
                    xác, minh bạch của thông tin do người dùng cung cấp. Trong
                    trường hợp phát hiện bất kỳ sai lệch, gian lận, hoặc dấu
                    hiệu vi phạm điều kiện kinh doanh hợp pháp, BCP có quyền đơn
                    phương áp dụng các biện pháp xử lý mà không cần thông báo
                    trước. Các biện pháp này bao gồm nhưng không giới hạn ở việc
                    đình chỉ tạm thời, hạn chế quyền truy cập, chấm dứt dịch vụ
                    hoặc vô hiệu hóa tài khoản. BCP cũng có quyền thực hiện các
                    biện pháp pháp lý cần thiết nhằm bảo vệ quyền lợi hợp pháp
                    của mình và các bên liên quan.
                  </p>

                  <p>
                    Trong trường hợp thông tin bạn cung cấp dẫn đến sai sót hoặc
                    gây thiệt hại cho chúng tôi, bạn sẽ phải chịu trách nhiệm
                    cho tất cả các thiệt hại phát sinh, và chúng tôi bảo lưu
                    quyền tạm ngừng tài khoản của bạn, thu hồi quyền truy cập
                    và/hoặc thực hiện hành động pháp lý hoặc yêu cầu bồi thường
                    theo đánh giá cần thiết.
                  </p>

                  <p>
                    <strong>3.3. Sử dụng và Bảo mật</strong>
                  </p>

                  <p>
                    <strong>3.3.1. Quy định sử dụng tài khoản</strong>
                  </p>

                  <p>
                    Bạn xác nhận và đồng ý rằng tài khoản BCP của bạn chỉ dành
                    cho mục đích kinh doanh của bạn. Bạn không được phép tặng,
                    cho mượn, thuê, chuyển nhượng, bán hoặc ủy quyền tài khoản
                    của mình cho bất kỳ ai sử dụng dưới bất kỳ hình thức nào.
                    Nếu BCP có cơ sở hợp lý để tin rằng người sử dụng tài khoản
                    không phải là chủ tài khoản đã đăng ký, BCP có quyền đình
                    chỉ hoặc chấm dứt dịch vụ đối với tài khoản đó để đảm bảo an
                    toàn.
                  </p>

                  <p>
                    <strong>
                      3.3.2. Quy định về Giấy phép Đăng ký Kinh doanh
                    </strong>
                  </p>

                  <p>
                    Chỉ một Giấy phép Đăng ký Kinh doanh hoặc Chứng nhận Đăng ký
                    Công ty hợp lệ được phép sử dụng để đăng ký tài khoản. Bất
                    kỳ tài khoản nào được tạo sau đó sử dụng cùng một giấy phép
                    đăng ký đã đăng ký với BCP sẽ bị từ chối hoặc hủy bỏ mà
                    không hoàn tiền, và các tài khoản liên quan có thể bị liệt
                    vào danh sách từ chối cung cấp dịch vụ.
                  </p>

                  <p>
                    Nếu BCP phát hiện hoạt động đáng ngờ liên quan đến đăng ký
                    tài khoản hoặc Giấy phép Đăng ký Kinh doanh/Chứng nhận Đăng
                    ký Công ty không hợp lệ, bao gồm nhưng không giới hạn ở tài
                    liệu giả mạo hoặc doanh nghiệp không còn hoạt động theo
                    ngành nghề được cấp phép, tài khoản sẽ bị đình chỉ và có thể
                    bị BCP yêu cầu bồi thường thiệt hại.
                  </p>

                  <p>
                    <strong>3.3.3. Bảo mật tài khoản</strong>
                  </p>

                  <p>
                    Bạn có trách nhiệm bảo mật và giữ bí mật thông tin đăng nhập
                    tài khoản BCP của doanh nghiệp. BCP khuyến nghị bạn tăng
                    cường bảo mật tài khoản bằng cách liên kết với số điện thoại
                    và kích hoạt xác thực bằng mã OTP khi đăng nhập hoặc thay
                    đổi mật khẩu.
                  </p>

                  <p>
                    Trong trường hợp mất quyền truy cập tài khoản hoặc thay đổi
                    mật khẩu, bạn có thể sử dụng hướng dẫn khôi phục hoặc tìm
                    kiếm hỗ trợ từ AI chatbot của BCP. Bạn hiểu rằng quá trình
                    xác minh chỉ dựa trên đối chiếu thông tin do bạn cung cấp
                    với dữ liệu hệ thống, và BCP không thể xác nhận quyền sở hữu
                    tuyệt đối của tài khoản. Nếu tài khoản của bạn bị xâm phạm
                    hoặc mất mật khẩu do sơ suất cá nhân, bạn sẽ chịu trách
                    nhiệm về mọi tổn thất phát sinh.
                  </p>

                  <p>
                    Nếu bạn phát hiện bất kỳ hành vi sử dụng trái phép nào đối
                    với tài khoản BCP của mình hoặc phát hiện bất kỳ lỗ hổng bảo
                    mật nào, bạn có trách nhiệm thông báo ngay cho BCP để bảo vệ
                    tài khoản. BCP không chịu trách nhiệm pháp lý đối với mọi
                    tổn thất, thiệt hại hoặc hoạt động không được ủy quyền do vi
                    phạm truy cập gây ra bởi các nền tảng của bên thứ ba, sự sơ
                    suất trong việc bảo vệ thiết bị hoặc việc không tuân thủ các
                    biện pháp bảo mật được BCP khuyến nghị.
                  </p>

                  <p>
                    <strong>3.3.4. Trách nhiệm pháp lý</strong>
                  </p>

                  <p>
                    Bạn phải chịu trách nhiệm pháp lý đầy đủ đối với tất cả các
                    hành động được thực hiện dưới tài khoản BCP của mình, bao
                    gồm nhưng không giới hạn ở việc chịu trách nhiệm pháp lý đối
                    với bất kỳ thông tin, thanh toán hoặc giao dịch nào bạn thực
                    hiện trên BCP.
                  </p>

                  <p>
                    <strong>3.4. Xác minh và từ chối tài khoản</strong>
                  </p>

                  <p>
                    BCP có quyền xem xét, xác minh, từ chối đăng ký và chặn tài
                    khoản nếu thông tin do doanh nghiệp cung cấp được xác định
                    là không hợp lệ. Doanh nghiệp có nghĩa vụ tuân thủ các yêu
                    cầu của BCP và cung cấp tất cả thông tin cần thiết để xác
                    minh.
                  </p>

                  <p>
                    <strong>3.5. Hạn chế và đình chỉ tài khoản</strong>
                  </p>

                  <p>
                    BCP có quyền đình chỉ hoặc hạn chế tạm thời quyền truy cập
                    tài khoản nếu phát hiện doanh nghiệp thay đổi thông tin
                    nhiều lần hoặc có dấu hiệu hoạt động đáng ngờ, có thể liên
                    quan đến truy cập trái phép hoặc xâm phạm tài khoản. Người
                    dùng có thể gửi yêu cầu hỗ trợ đến connect@bcp.global về
                    tình trạng tài khoản bị hạn chế.
                  </p>

                  <p>
                    <strong>3.6. Hủy tài khoản</strong>
                  </p>

                  <p>
                    Nếu bạn muốn hủy tài khoản BCP, bạn phải gửi yêu cầu hỗ trợ
                    đến connect@bcp.global để được hướng dẫn quy trình hủy tài
                    khoản. BCP sẽ thực hiện quy trình rà soát trước khi hủy tài
                    khoản theo yêu cầu, và tài khoản chỉ được hủy chính thức sau
                    khi bạn nhận được email xác nhận từ BCP.
                  </p>

                  <p>
                    Việc tự cho rằng tài khoản đã bị hủy mà không có xác nhận
                    chính thức từ BCP sẽ không có hiệu lực, và BCP không chịu
                    trách nhiệm về bất kỳ ảnh hưởng nào đối với tài khoản của
                    bạn.
                  </p>

                  <p>
                    Sau khi dừng sử dụng BCP, số dư Credit còn lại sẽ không được
                    hoàn tiền hoặc quy đổi thành tiền mặt hay dịch vụ khác. Chỉ
                    cá nhân đã cung cấp Giấy phép Đăng ký Kinh doanh mới có
                    quyền yêu cầu hủy tài khoản.
                  </p>

                  <p>
                    Sau khi tài khoản bị hủy, doanh nghiệp sẽ bị hạn chế đăng ký
                    tài khoản mới trong một khoảng thời gian nhất định. BCP
                    không chịu trách nhiệm về bất kỳ hậu quả nào liên quan đến
                    việc hủy tài khoản.
                  </p>

                  <p>
                    <strong>3.7. Xử lý tài khoản vi phạm</strong>
                  </p>

                  <p>
                    Nếu bạn vi phạm Thỏa thuận này, pháp luật địa phương, hoặc
                    có bất kỳ hành vi/nội dung nào mà BCP coi là nguy hiểm, BCP
                    có quyền thực hiện các biện pháp khẩn cấp đối với tài khoản
                    của bạn mà không cần thông báo trước. Các biện pháp có thể
                    bao gồm nhưng không giới hạn ở việc cấm, đóng băng hoặc hạn
                    chế tài khoản. Nếu điều này khiến bạn không thể sử dụng tài
                    khoản bình thường, bạn sẽ chịu mọi rủi ro phát sinh do hành
                    vi nguy hiểm của mình.
                  </p>
                </div>
              </section>

              <section id="section4">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  4. Quy tắc ứng xử của Người dùng
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    <strong>4.1. Quy định về Nội dung</strong>
                  </p>

                  <p>
                    Điều khoản này áp dụng cho tất cả nội dung do người dùng tạo
                    ra, bao gồm nhưng không giới hạn ở việc tải lên, sao chép,
                    xuất bản và phân phối liên quan đến dịch vụ. Điều này bao
                    gồm dữ liệu đăng ký như tên công ty, giấy phép đăng ký kinh
                    doanh, danh mục dịch vụ, đăng ký mua bán, cũng như bất kỳ
                    nội dung văn bản, âm thanh hoặc nội dung khác liên quan đến
                    tài khoản của bạn.
                  </p>

                  <p>Người dùng đồng ý không đăng tải nội dung:</p>

                  <ul>
                    <li>
                      <p>
                        (1) Sử dụng ngôn ngữ tục tĩu hoặc xúc phạm có thể bị coi
                        là quấy rối, gây rối, làm phiền, đe dọa hoặc xúc phạm
                        bất kỳ cá nhân nào;
                      </p>
                    </li>
                    <li>
                      <p>
                        (2) Mang tính lăng mạ, đe dọa hoặc khuyến khích phân
                        biệt chủng tộc, hận thù hoặc tư tưởng cực đoan;
                      </p>
                    </li>
                    <li>
                      <p>
                        (3) Khuyến khích hoạt động phi pháp, bao gồm nhưng không
                        giới hạn ở khủng bố, kích động thù hận sắc tộc và phát
                        ngôn thù địch;
                      </p>
                    </li>
                    <li>
                      <p>(4) Chứa thông tin phỉ báng hoặc bôi nhọ danh dự;</p>
                    </li>
                    <li>
                      <p>
                        (5) Liên quan đến việc gợi ý, đề xuất hoặc kêu gọi giao
                        dịch ngoài nền tảng BCP;
                      </p>
                    </li>
                    <li>
                      <p>
                        (6) Liên quan đến phát tán thư rác, mạo danh hoặc các
                        hành vi lừa đảo;
                      </p>
                    </li>
                    <li>
                      <p>
                        (7) Chứa phần mềm gián điệp, vi-rút, tệp tin bị hỏng,
                        sâu máy tính hoặc mã độc khác nhằm làm gián đoạn, gây hư
                        hại, hạn chế hoặc phá hủy chức năng của bất kỳ phần mềm,
                        phần cứng, mạng viễn thông, máy chủ hoặc thiết bị nào
                        khác; bao gồm Trojan horses hoặc bất kỳ nội dung nào có
                        mục đích đánh cắp, chiếm đoạt hoặc xâm phạm dữ liệu,
                        thông tin cá nhân từ BCP hoặc bên khác;
                      </p>
                    </li>
                    <li>
                      <p>
                        (8) Liên quan đến chính trị hoặc các chính sách chính
                        trị;
                      </p>
                    </li>
                    <li>
                      <p>
                        (9) Bị BCP xác định là có hại theo bất kỳ quy định pháp
                        luật hiện hành nào.
                      </p>
                    </li>
                  </ul>

                  <p>
                    <strong>4.2. Hành vi Bị Cấm</strong>
                  </p>

                  <p>
                    Thành viên bị nghiêm cấm thực hiện các hành vi sau trong quá
                    trình sử dụng BCP:
                  </p>

                  <ul>
                    <li>
                      <p>
                        (1) Xâm nhập trái phép vào hệ thống mạng, gây gián đoạn
                        hoạt động bình thường của mạng, truy cập dữ liệu mà
                        không có sự cho phép và bất kỳ hành vi nào làm tổn hại
                        đến an ninh mạng;
                      </p>
                    </li>
                    <li>
                      <p>
                        (2) Cố tình phá hoại hoặc can thiệp vào hoạt động bình
                        thường của hệ thống hoặc trang web, phát tán phần mềm
                        độc hại, vi-rút hoặc thực hiện bất kỳ hành vi phá hoại
                        nào ảnh hưởng đến dịch vụ thông tin mạng;
                      </p>
                    </li>
                    <li>
                      <p>
                        (3) Đăng ký tài khoản gian lận, bao gồm nhưng không giới
                        hạn ở việc đăng ký số lượng lớn tài khoản với mục đích
                        không chính đáng hoặc cung cấp thông tin đăng ký sai
                        lệch;
                      </p>
                    </li>
                    <li>
                      <p>
                        (4) Cố tình mạo danh, lừa đảo và phát tán thư rác điện
                        tử.
                      </p>
                    </li>
                  </ul>

                  <p>
                    <strong>
                      4.3. Trách nhiệm của Người Dùng và Biện pháp Xử Lý
                    </strong>
                  </p>

                  <p>
                    Bạn hiểu và đồng ý rằng bạn hoàn toàn chịu trách nhiệm về
                    hành vi của mình. BCP có toàn quyền thực hiện các biện pháp
                    xử lý đối với bất kỳ hành vi nào vi phạm pháp luật hiện hành
                    hoặc các điều khoản của Thỏa thuận này, bao gồm nhưng không
                    giới hạn ở:
                  </p>

                  <ul>
                    <li>
                      <p>
                        (1) Xóa, chặn hoặc gỡ bỏ nội dung và liên kết do bạn
                        đăng tải mà không cần thông báo trước;
                      </p>
                    </li>
                    <li>
                      <p>
                        (2) Áp dụng các biện pháp xử lý ngay lập tức đối với tài
                        khoản của bạn, chẳng hạn như khóa tài khoản, tịch thu
                        toàn bộ Credit và yêu cầu bồi thường;
                      </p>
                    </li>
                    <li>
                      <p>
                        (3) Chấm dứt một phần hoặc toàn bộ dịch vụ mà BCP cung
                        cấp đến bạn và tiến hành các thủ tục pháp lý theo quy
                        định của pháp luật.
                      </p>
                    </li>
                  </ul>

                  <p>
                    Ngoài ra, nếu hành vi của bạn bị xác định là vi phạm pháp
                    luật hình sự, chúng tôi có quyền báo cáo vụ việc và cung cấp
                    thông tin liên quan cho cơ quan chức năng để xử lý theo quy
                    định.
                  </p>

                  <p>
                    <strong>
                      4.4. Bồi Thường Thiệt Hại do Hành vi Vi Phạm của Người
                      Dùng
                    </strong>
                  </p>

                  <p>
                    Bạn đồng ý rằng nếu hành vi vi phạm của bạn, bao gồm nhưng
                    không giới hạn ở việc vi phạm pháp luật, quy định hoặc các
                    điều khoản của Thỏa thuận này, khiến BCP phải đối mặt với
                    khiếu nại, kiện tụng, nguy cơ bị gỡ bỏ nền tảng hoặc bị xử
                    phạt hành chính, bạn có trách nhiệm bồi thường toàn bộ thiệt
                    hại phát sinh cho BCP.
                  </p>

                  <p>
                    <strong>
                      4.5. Trách nhiệm Người Dùng và Tiết lộ Thông tin
                    </strong>
                  </p>

                  <p>
                    Bạn hiểu và đồng ý rằng bạn hoàn toàn chịu trách nhiệm về
                    hành vi của mình. Trong một số trường hợp nhất định, chúng
                    tôi có quyền cung cấp thông tin nhận dạng của bạn cho bên
                    thứ ba có căn cứ pháp lý chứng minh rằng nội dung bạn đăng
                    tải trên BCP xâm phạm quyền lợi hợp pháp của họ. Chúng tôi
                    cũng bảo lưu quyền tiết lộ thông tin khi cần thiết để bảo vệ
                    lợi ích hợp pháp của BCP.
                  </p>
                </div>
              </section>

              <section id="section5">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  5. Bảo mật dữ liệu
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    Trong quá trình bạn sử dụng BCP, hệ thống trí tuệ nhân tạo
                    của chúng tôi sẽ thu thập, xử lý và phân tích dữ liệu liên
                    quan đến hoạt động kinh doanh của bạn nhằm nâng cao trải
                    nghiệm người dùng và cung cấp dịch vụ tối ưu. Dữ liệu được
                    thu thập có thể bao gồm nhưng không giới hạn ở lịch sử giao
                    dịch, nhật ký liên lạc, mô hình sử dụng nền tảng và thông
                    tin hồ sơ doanh nghiệp.
                  </p>

                  <p>
                    BCP cam kết bảo vệ dữ liệu của bạn bằng các biện pháp bảo
                    mật theo tiêu chuẩn ngành, bao gồm mã hóa, kiểm soát truy
                    cập và các giao thức lưu trữ an toàn. Người dùng xác nhận
                    rằng không có hệ thống nào hoàn toàn miễn nhiễm với rủi ro,
                    và mặc dù BCP nỗ lực đảm bảo an toàn dữ liệu, chúng tôi
                    không thể đảm bảo tuyệt đối trước các hành vi truy cập trái
                    phép hoặc vi phạm bảo mật.
                  </p>

                  <p>
                    Người dùng có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa dữ
                    liệu cá nhân của mình theo quy định bảo mật hiện hành. BCP
                    có thể giữ lại một số dữ liệu theo yêu cầu pháp lý hoặc nhằm
                    mục đích tuân thủ quy định, phòng chống gian lận và đảm bảo
                    an toàn hệ thống.
                  </p>

                  <p>
                    Dữ liệu có thể được chia sẻ với các nhà cung cấp dịch vụ bên
                    thứ ba đáng tin cậy theo các thỏa thuận bảo mật nghiêm ngặt
                    để phục vụ xử lý thanh toán, giám sát bảo mật và phân tích
                    dữ liệu. BCP không bán hoặc cho thuê dữ liệu người dùng cho
                    bên thứ ba vì mục đích tiếp thị.
                  </p>

                  <p>
                    Để hiểu rõ hơn về chính sách thu thập, lưu trữ và bảo vệ dữ
                    liệu, vui lòng tham khảo Chính sách Quyền Riêng tư của BCP.
                  </p>
                </div>
              </section>

              <section id="section6">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  6. Dịch vụ trả phí
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    Người dùng cam kết và đảm bảo rằng bạn có đầy đủ năng lực
                    pháp lý để thực hiện các nghĩa vụ tài chính theo quy định
                    của pháp luật nơi bạn cư trú. BCP sử dụng Credit làm cơ chế
                    thanh toán trung gian để mua các tính năng trả phí, bao gồm
                    nhưng không giới hạn ở dịch vụ nhắn tin, dịch vụ Matching
                    Agent và các dịch vụ do BCP hoặc đối tác bên thứ ba cung
                    cấp. Người dùng nên thường xuyên kiểm tra tỷ lệ quy đổi.
                  </p>

                  <p>
                    Người dùng hiểu rõ và đồng ý rằng Credit chỉ là một đơn vị
                    giao dịch nội bộ trên nền tảng BCP, không mang giá trị tiền
                    tệ và không thể quy đổi thành tiền mặt.
                  </p>

                  <p>
                    <strong>6.1. Mua dịch vụ trả phí</strong>
                  </p>
                  <p>
                    Khi sử dụng sản phẩm và dịch vụ của BCP, bạn có thể chọn mua
                    các dịch vụ trả phí của BCP, bao gồm nhưng không giới hạn ở
                    các matching slots.
                  </p>

                  <p>
                    <strong>6.2. Thanh toán</strong>
                  </p>

                  <p>
                    <strong>6.2.1. Giới thiệu về Credit</strong>
                  </p>
                  <p>
                    Credit là đơn vị giao dịch nội bộ chỉ sử dụng trong nền tảng
                    BCP. Credit không có giá trị tiền tệ, không thể tặng, quy
                    đổi thành tiền mặt hoặc chuyển nhượng giữa các người dùng.
                    Mọi hành vi lạm dụng hoặc sử dụng Credit sai mục đích đều
                    khiến người dùng phải chịu hoàn toàn trách nhiệm pháp lý,
                    bồi thường thiệt hại cho BCP và các bên liên quan.
                  </p>

                  <p>
                    <strong>6.2.2. Cổng thanh toán bên thứ ba</strong>
                  </p>
                  <p>
                    Thanh toán cho các dịch vụ trả phí sẽ được thực hiện thông
                    qua cổng thanh toán bên thứ ba được tích hợp trên nền tảng
                    BCP. Người dùng phải tuân thủ điều khoản của bên thứ ba và
                    hoàn tất các giao dịch trực tuyến bằng loại tiền tệ được hệ
                    thống hỗ trợ.
                  </p>
                  <p>
                    Nếu xảy ra lỗi hệ thống từ phía cổng thanh toán, người dùng
                    cần chủ động gửi yêu cầu hỗ trợ đến BCP qua AI Chatbot hoặc
                    email connect@bcp.global trong vòng 24 giờ, kèm theo bằng
                    chứng liên quan để được hỗ trợ.
                  </p>
                  <p>
                    Người dùng xác nhận và đồng ý rằng BCP không chịu bất kỳ
                    trách nhiệm nào liên quan đến tính bảo mật, chính xác, hiệu
                    quả hoặc kịp thời của các cổng thanh toán bên thứ ba. BCP
                    cũng không chịu trách nhiệm về các tranh chấp hoặc tổn thất
                    phát sinh từ việc sử dụng các cổng thanh toán này.
                  </p>

                  <p>
                    <strong>6.2.3. Xử lý lỗi hệ thống</strong>
                  </p>
                  <ul>
                    <li>
                      (1) Nếu quá trình nạp tiền chưa hoàn tất, người dùng có
                      thể tạm dừng và khởi động lại nền tảng rồi thực hiện lại
                      quy trình.
                    </li>
                    <li>
                      (2) Nếu quét mã QR không hiển thị thông tin, người dùng
                      phải dừng giao dịch ngay lập tức và khởi động lại nền
                      tảng.
                    </li>
                    <li>
                      (3) Nếu thanh toán đã thành công nhưng nhận được thông báo
                      thất bại, người dùng cần liên hệ trực tiếp với ngân hàng
                      của mình.
                    </li>
                    <li>
                      (4) Nếu thanh toán thành công nhưng không nhận được Credit
                      tương ứng, người dùng phải liên hệ với bộ phận hỗ trợ - AI
                      chatbot của BCP trong vòng 24 giờ để được hỗ trợ.
                    </li>
                    <li>
                      (5) Nếu bị mất Credit do lỗi hệ thống, người dùng cần liên
                      hệ bộ phận hỗ trợ - AI Chatbot của BCP trong vòng 24 giờ
                      để được hỗ trợ.
                    </li>
                  </ul>
                  <p>
                    BCP có quyền yêu cầu cung cấp tài liệu chứng minh để xác
                    minh giao dịch. Quá trình xác minh có thể mất tối đa 01 ngày
                    làm việc.
                  </p>

                  <p>
                    <strong>6.2.4. Chính sách hoàn trả Credit</strong>
                  </p>
                  <p>
                    Người dùng đủ điều kiện nhận hoàn trả Credit trong các
                    trường hợp sau:
                  </p>
                  <ul>
                    <li>
                      (1) Bị trừ Credit hai lần cho một giao dịch duy nhất.
                    </li>
                  </ul>
                  <p>
                    <em>
                      Ví dụ: Nếu một tin nhắn chỉ đáng giá 1 Credit nhưng hệ
                      thống lại trừ 2 Credit, điều này được xem là lỗi trừ tiền
                      hai lần.
                    </em>
                  </p>
                  <p>
                    <em>
                      Người dùng lưu ý rằng việc cố ý gửi yêu cầu dịch vụ trùng
                      lặp có thể dẫn đến việc bị tính phí bình thường, và BCP
                      không chịu trách nhiệm hoàn trả. Do đó, người dùng được
                      khuyến nghị cẩn trọng khi sử dụng dịch vụ.
                    </em>
                  </p>
                  <ul>
                    <li>(2) Mất Credit do lỗi hệ thống.</li>
                  </ul>
                  <p>
                    BCP sẽ hoàn trả Credit sau khi người dùng cung cấp đầy đủ
                    tài liệu chứng minh cần thiết.
                  </p>

                  <p>
                    <strong>6.2.5. Giới hạn và thu hồi Credit</strong>
                  </p>
                  <p>
                    BCP có toàn quyền hạn chế, hủy bỏ hoặc thu hồi một phần hoặc
                    toàn bộ Credit của người dùng trong trường hợp vi phạm, bao
                    gồm nhưng không giới hạn ở:
                  </p>
                  <ul>
                    <li>(1) Hành vi Refund không hợp lệ/trái phép</li>
                  </ul>
                  <p>
                    BCP sẽ ngay lập tức hạn chế số Credit bị refund và thiết bị
                    liên quan ngay từ lần đầu tiên phát hiện vi phạm. BCP cũng
                    bảo lưu quyền yêu cầu bồi thường cho mọi tổn thất trực tiếp
                    hoặc gián tiếp phát sinh từ các giao dịch Refund không hợp
                    lệ do người dùng thực hiện.
                  </p>
                  <ul>
                    <li>(2) Lợi dụng chương trình khuyến mãi</li>
                  </ul>
                  <p>
                    BCP có toàn quyền thu hồi tất cả Credit và hạn chế tài khoản
                    cũng như thiết bị liên quan mà không cần thông báo trước nếu
                    phát hiện các hành vi vi phạm, chẳng hạn như tạo nhiều tài
                    khoản hoặc đăng ký Giấy phép Kinh doanh không hợp lệ hoặc
                    gian lận. Người dùng được khuyến khích báo cáo và cung cấp
                    bằng chứng xác thực về các hành vi vi phạm trong cộng đồng
                    BCP. BCP cũng bảo lưu quyền yêu cầu bồi thường cho mọi tổn
                    thất trực tiếp hoặc gián tiếp phát sinh từ người dùng có
                    những hành vi vi phạm nếu trên.
                  </p>
                  <ul>
                    <li>(3) Phát tán thông tin sai lệch</li>
                  </ul>
                  <p>
                    BCP sẽ hạn chế toàn bộ Credit của những người dùng phát tán
                    thông tin sai lệch làm gián đoạn quá trình trao đổi trong
                    cộng đồng BCP và có quyền theo đuổi các biện pháp pháp lý để
                    bảo vệ lợi ích của người dùng và BCP.
                  </p>

                  <p>
                    <strong>6.3.</strong> Trong quá trình thanh toán, các công
                    cụ thanh toán của bên thứ ba có thể yêu cầu cung cấp một số
                    dữ liệu cá nhân nhất định để thực hiện giao dịch thông qua
                    các tổ chức tài chính của họ và tuân thủ các yêu cầu pháp
                    lý, quy định ở cấp độ quốc tế, quốc gia, liên bang, tiểu
                    bang và địa phương.
                  </p>

                  <p>
                    <strong>6.4.</strong> Bạn hiểu và xác nhận rằng, do bản chất
                    vốn có của các sản phẩm trực tuyến, các giao dịch mua dịch
                    vụ trả phí của BCP, bao gồm nhưng không giới hạn ở tin nhắn,
                    Matching slot, và gói thành viên, đều không thể hủy bỏ,
                    không được hoàn tiền và không thể đảo ngược sau khi giao
                    dịch hoàn tất.
                  </p>

                  <p>
                    <strong>6.5.</strong> Việc mua dịch vụ và sản phẩm của BCP
                    cấp cho bạn một giấy phép sử dụng có giới hạn chỉ trong phạm
                    vi nền tảng BCP, với điều kiện bạn phải tuân thủ nghiêm ngặt
                    tất cả các quy định pháp luật hiện hành. Ví dụ, các vật phẩm
                    ảo không thể giao dịch, không thể quy đổi thành tiền pháp
                    định của bất kỳ quốc gia nào, không thể sử dụng làm tín dụng
                    hoặc tài sản đảm bảo, và không được dùng cho mục đích đầu tư
                    hoặc chuyển nhượng.
                  </p>

                  <p>
                    <strong>6.6.</strong> Khi mua các dịch vụ trả phí của BCP,
                    bạn có trách nhiệm xem xét các hướng dẫn tiêu dùng áp dụng
                    cho từng dịch vụ để tránh tổn thất không đáng có. BCP có
                    quyền thay đổi phương thức bán hàng và quy định liên quan
                    đến dịch vụ trả phí theo quyết định của mình.
                  </p>

                  <p>
                    <strong>6.7. Nguồn tiền hợp pháp</strong>
                  </p>
                  <p>
                    Người dùng cam kết và đảm bảo rằng nguồn tiền được sử dụng
                    để mua các dịch vụ trả phí là hợp pháp và tuân thủ tất cả
                    các yêu cầu pháp lý hiện hành. Bạn cũng cam kết rằng hành vi
                    tiêu dùng và mục đích sử dụng của mình phù hợp với tất cả
                    các tài liệu pháp lý liên quan và Thỏa thuận này, đồng thời
                    sẽ không gây ảnh hưởng đến việc tuân thủ pháp luật của BCP.
                  </p>
                  <p>
                    BCP có quyền thu hồi, điều chỉnh hoặc hủy bỏ bất kỳ khoản
                    Credit nào đã cấp trong trường hợp phát hiện hành vi lạm
                    dụng, vi phạm điều khoản, lỗi hệ thống hoặc vì bất kỳ lý do
                    nào khác mà BCP cho là cần thiết.
                  </p>
                  <p>
                    Trong trường hợp nguồn tiền của bạn không rõ ràng hoặc có
                    dấu hiệu gian lận, BCP có quyền yêu cầu bạn cung cấp thông
                    tin xác minh và tạm thời đình chỉ tài khoản của bạn cho đến
                    khi xác nhận tính hợp pháp của nguồn tiền. Bạn sẽ chịu hoàn
                    toàn trách nhiệm pháp lý đối với mọi thiệt hại phát sinh
                    trước, trong hoặc sau quá trình xác minh và phải bồi thường
                    cho BCP cũng như các bên liên quan đối với bất kỳ tổn thất
                    nào phát sinh, nếu có.
                  </p>
                </div>
              </section>

              <section id="section7">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  7. Quyền sở hữu trí tuệ và Quyền sở hữu 'Credits'
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    <strong>7.1. Quyền Sở hữu Trí tuệ của BCP</strong>
                  </p>
                  <p>
                    BCP là chủ sở hữu duy nhất của tất cả các quyền sở hữu trí
                    tuệ liên quan đến sản phẩm và dịch vụ của mình, bao gồm
                    nhưng không giới hạn ở phần mềm, công nghệ, chương trình,
                    trang web, văn bản, hình ảnh, âm thanh và video.
                  </p>
                  <p>
                    BCP nắm giữ bản quyền, quyền sáng chế và tất cả các quyền sở
                    hữu trí tuệ khác đối với phần mềm được sử dụng để cung cấp
                    sản phẩm và dịch vụ của BCP.
                  </p>

                  <p>
                    <strong>7.2. Quyền Sở hữu và Quản lý Credit</strong>
                  </p>
                  <p>
                    Credit là tài sản của BCP và đóng vai trò như một đơn vị
                    giao dịch trung gian nội bộ trong ứng dụng. Credit không có
                    giá trị tiền tệ và không thể mua, bán, chuyển nhượng, quy
                    đổi thành tiền mặt hoặc trao đổi lấy bất kỳ tài sản nào
                    khác.
                  </p>
                  <p>
                    BCP có toàn quyền điều chỉnh cơ chế vận hành và tỷ lệ trao
                    đổi của Credit; do đó, người dùng nên thường xuyên cập nhật
                    thông tin từ BCP để bảo vệ quyền lợi của mình.
                  </p>
                  <p>
                    Trong trường hợp phát hiện hành vi gian lận, lừa đảo hoặc
                    chiếm đoạt tài sản của BCP, BCP có quyền thu hồi số Credit
                    đã cấp cho các tài khoản vi phạm, yêu cầu người dùng bồi
                    thường thiệt hại và áp dụng các biện pháp xử lý phù hợp theo
                    quy định.
                  </p>

                  <p>
                    <strong>
                      7.3. Quy định về Nhãn hiệu và Tên Thương hiệu
                    </strong>
                  </p>
                  <p>
                    Người dùng bị nghiêm cấm sử dụng "BCP" hoặc bất kỳ nhãn
                    hiệu, nhãn dịch vụ, tên thương mại, tên miền, tên trang web
                    hoặc biểu tượng thương hiệu nào khác (gọi chung là "Logo")
                    liên quan đến thương hiệu BCP mà không có sự cho phép rõ
                    ràng bằng văn bản.
                  </p>
                  <p>
                    Nếu không có sự đồng ý trước của BCP, bạn không được hiển
                    thị, sử dụng hoặc đăng ký các nhãn hiệu, tên miền hoặc tài
                    sản trí tuệ khác có chứa Logo nói trên, dù riêng lẻ hay kết
                    hợp với bất kỳ yếu tố nào khác.
                  </p>
                  <p>
                    Bất kỳ hành vi vi phạm nào gây tổn hại đến BCP hoặc bên thứ
                    ba sẽ khiến bạn phải chịu trách nhiệm pháp lý hoàn toàn.
                  </p>

                  <p>
                    <strong>7.4. Quyền Sở hữu Nội dung Người Dùng</strong>
                  </p>
                  <p>
                    Người dùng cam kết và đảm bảo rằng tất cả nội dung bạn đăng
                    tải khi sử dụng BCP, bao gồm nhưng không giới hạn ở văn bản,
                    hình ảnh, video, âm thanh và các định dạng nội dung khác, là
                    do bạn sở hữu hoặc đã được cấp phép hợp pháp.
                  </p>
                  <p>
                    Bạn đồng ý cấp cho BCP quyền sử dụng toàn cầu, miễn phí bản
                    quyền, không độc quyền và có thể cấp lại nhiều cấp đối với
                    tất cả nội dung do bạn đăng tải trên BCP.
                  </p>
                  <p>
                    Để bảo vệ quyền lợi của bạn, bạn cho phép BCP, trực tiếp
                    hoặc thông qua bên thứ ba được ủy quyền, bảo vệ nội dung mà
                    bạn đã đăng tải và xuất bản với các quyền sở hữu trí tuệ
                    theo quy định trong điều khoản trên.
                  </p>
                </div>
              </section>

              <section id="section8">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  8. Tuyên bố miễn trừ trách nhiệm và Giới hạn trách nhiệm
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    <strong>
                      8.1. Dịch vụ của chúng tôi được cung cấp theo nguyên tắc
                      “nguyên trạng” và “sẵn có”
                    </strong>
                  </p>
                  <p>
                    Mặc dù chúng tôi luôn nỗ lực để đảm bảo tính liên tục và an
                    toàn của dịch vụ, chúng tôi không đảm bảo hoặc cam kết rằng:
                  </p>
                  <ul>
                    <li>
                      (1) Dịch vụ sẽ luôn an toàn, không có lỗi (hệ thống) hoặc
                      luôn kịp thời;
                    </li>
                    <li>
                      (2) Dịch vụ sẽ luôn hoạt động bình thường và không bị ảnh
                      hưởng bởi sự chậm trễ, gián đoạn do bảo trì hoặc lỗi (hệ
                      thống);
                    </li>
                    <li>
                      (3) Bất kỳ nội dung hoặc thông tin nào bạn nhận được trên
                      BCP sẽ luôn chính xác hoặc kịp thời;
                    </li>
                    <li>(4) Dịch vụ sẽ đáp ứng mọi nhu cầu của bạn.</li>
                  </ul>

                  <p>
                    <strong>
                      8.2. Chúng tôi không chịu trách nhiệm đối với bất kỳ tổn
                      thất hoặc thiệt hại nào phát sinh từ:
                    </strong>
                  </p>
                  <ul>
                    <li>
                      (1) Các trường hợp bất khả kháng và các yếu tố ngoài tầm
                      kiểm soát của chúng tôi;
                    </li>
                    <li>
                      (2) Nền tảng của chúng tôi bị hack hoặc tấn công mạng;
                    </li>
                    <li>
                      (3) Bất kỳ thay đổi nào chúng tôi thực hiện đối với BCP
                      hoặc một số tính năng của BCP, hoặc bất kỳ việc tạm ngừng
                      hoặc chấm dứt vĩnh viễn các tính năng đó;
                    </li>
                    <li>
                      (4) Các lỗi phát sinh từ bên thứ ba (như cổng thanh toán,
                      nhà cung cấp API);
                    </li>
                    <li>
                      (5) Việc xóa, hỏng hoặc mất bất kỳ nội dung nào mà bạn tải
                      lên, đăng hoặc truyền tải trên BCP;
                    </li>
                    <li>(6) Nội dung người dùng đăng tải trên BCP;</li>
                    <li>
                      (7) Việc bạn không cung cấp thông tin tài khoản chính xác,
                      lạm dụng dịch vụ của chúng tôi hoặc vi phạm các Điều khoản
                      này;
                    </li>
                    <li>
                      (8) Các rủi ro mà bạn phải chịu khi tương tác với những
                      người dùng khác;
                    </li>
                    <li>
                      (9) Việc chúng tôi đã thực hiện các nghĩa vụ chăm sóc cần
                      thiết;
                    </li>
                    <li>
                      (10) Các hạn chế về công nghệ khiến chúng tôi không thể
                      thực hiện một số trách nhiệm nhất định;
                    </li>
                    <li>
                      (11) Các trường hợp mà BCP được miễn trách nhiệm trong
                      phạm vi tối đa được pháp luật cho phép.
                    </li>
                  </ul>

                  <p>
                    <strong>
                      8.3. Trong mọi trường hợp, chúng tôi không chịu trách
                      nhiệm đối với bất kỳ thiệt hại gián tiếp, mang tính hệ
                      quả, trừng phạt, ngẫu nhiên, đặc biệt hoặc bồi thường
                      thiệt hại nào
                    </strong>
                  </p>
                  <p>
                    bao gồm tổn thất lợi nhuận do người dùng sử dụng BCP gây ra
                    (ngay cả khi chúng tôi đã được thông báo về khả năng xảy ra
                    tổn thất đó). Mức bồi thường tối đa của chúng tôi, bất kể lý
                    do hoặc hình thức khiếu nại, sẽ không bao giờ vượt quá số
                    phí mà người dùng đã thanh toán trong vòng 12 tháng gần nhất
                    sử dụng dịch vụ của chúng tôi.
                  </p>

                  <p>
                    <strong>
                      8.4. Dịch vụ của chúng tôi chỉ được cung cấp cho mục đích
                      sử dụng hỗ trợ kết nối doanh nghiệp
                    </strong>
                  </p>
                  <p>
                    Bạn đồng ý không sử dụng BCP cho bất kỳ mục đích thương mại
                    hoặc kinh doanh nào, và chúng tôi không chịu trách nhiệm đối
                    với bất kỳ tổn thất thương mại hoặc kinh doanh nào.
                  </p>

                  <p>
                    <strong>8.5. Bạn đồng ý rằng</strong>
                  </p>
                  <p>
                    Bất kể các quy định pháp luật trái ngược, bất kỳ khiếu nại
                    hoặc nguyên nhân khởi kiện nào phát sinh từ hoặc liên quan
                    đến việc bạn sử dụng BCP hoặc các Điều khoản này phải được
                    nộp trong vòng một (1) năm kể từ ngày phát sinh khiếu nại
                    hoặc nguyên nhân khởi kiện đó, nếu không, chúng sẽ bị vô
                    hiệu vĩnh viễn.
                  </p>
                </div>
              </section>

              <section id="section9">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  9. Thẩm quyền xét xử
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  Mọi tranh chấp phát sinh từ hoặc liên quan đến các điều khoản
                  của Thỏa thuận này, bao gồm nhưng không giới hạn ở các vấn đề
                  về sự tồn tại, hiệu lực, diễn giải, thực hiện hoặc chấm dứt
                  của Thỏa thuận, sẽ được đệ trình và giải quyết dứt điểm bằng
                  trọng tài theo quy tắc trọng tài của Trung tâm trọng tài quốc
                  tế Việt Nam có hiệu lực tại thời điểm phát sinh tranh chấp.
                  Ngôn ngữ sử dụng trong quá trình trọng tài sẽ là tiếng Anh.
                </div>
              </section>

              <section id="section10">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  10. Các điều khoản khác
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    <strong>10.1. Liên hệ</strong>
                  </p>
                  <p>
                    BCP coi trọng sự hài lòng của người dùng. Đối với các câu
                    hỏi liên quan đến sản phẩm, dịch vụ, Thỏa thuận này hoặc các
                    vấn đề liên quan, người dùng có thể liên hệ với AI chatbot
                    trực tuyến hoặc gửi email đến connect@bcp.global. BCP sẽ cố
                    gắng phản hồi các yêu cầu của người dùng trong thời gian sớm
                    nhất có thể.
                  </p>

                  <p>
                    <strong>10.2. Điều khoản độc lập</strong>
                  </p>
                  <p>
                    Mỗi điều khoản trong Thỏa thuận này được coi là một phần
                    riêng biệt và có thể tách rời. Nếu bất kỳ điều khoản nào
                    trong Thỏa thuận này bị xác định là vô hiệu, bất hợp pháp
                    hoặc không thể thực thi vì bất kỳ lý do nào, bao gồm nhưng
                    không giới hạn ở việc vi phạm luật và quy định địa phương,
                    sự mơ hồ hoặc không thể thực thi, thì sự vô hiệu, bất hợp
                    pháp hoặc không thể thực thi đó sẽ không ảnh hưởng đến tính
                    hợp pháp, hiệu lực và khả năng thực thi của các điều khoản
                    còn lại trong Thỏa thuận này.
                  </p>

                  <p>
                    <strong>10.3. Quyền ưu tiên ngôn ngữ</strong>
                  </p>
                  <p>
                    Thỏa thuận này được soạn thảo bằng tiếng Anh và có thể được
                    cung cấp bằng nhiều ngôn ngữ khác nhau. Người dùng xác nhận
                    và đồng ý rằng trong trường hợp có bất kỳ sự khác biệt nào
                    giữa phiên bản tiếng Anh và phiên bản bằng các ngôn ngữ
                    khác, phiên bản tiếng Anh sẽ có hiệu lực chi phối.
                  </p>
                </div>
              </section>

              {/* Add more sections as needed */}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
