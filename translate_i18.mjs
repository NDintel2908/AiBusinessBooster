import fs from "fs";
import path from "path";

const langs = ["vi", "th", "jp"];
const basePath = "c:\\Users\\huynh\\Downloads\\LandingpageBCP\\LandingpageBCP\\client\\src\\locales";

const translations = {
  vi: {
    manufacturing: {
      softwareAndComputer: "Dịch vụ phần mềm và máy tính",
      telecommunicationsProviders: "Nhà cung cấp dịch vụ viễn thông",
      healthCare: "Nhà cung cấp dịch vụ chăm sóc sức khỏe",
      banks: "Ngân hàng",
      financeAndCredit: "Dịch vụ tài chính và tín dụng",
      investmentBanking: "Ngân hàng đầu tư và dịch vụ môi giới",
      mortgageRealEstate: "Quỹ đầu tư bất động sản thế chấp",
      closedEndInvestments: "Đầu tư quỹ đóng",
      openEndInvestments: "Quỹ mở và các công cụ đầu tư hỗn hợp",
      lifeInsurance: "Bảo hiểm nhân thọ",
      nonlifeInsurance: "Bảo hiểm phi nhân thọ",
      realEstateDev: "Đầu tư bất động sản và phát triển dịch vụ",
      realEstateTrusts: "Quỹ tín thác đầu tư bất động sản",
      consumerServices: "Dịch vụ tiêu dùng",
      media: "Truyền thông",
      retailers: "Bán lẻ",
      travelAndLeisure: "Du lịch và giải trí",
      personalCare: "Chăm sóc cá nhân, cửa hàng thuốc và tạp hóa",
      industrialSupport: "Dịch vụ hỗ trợ công nghiệp",
      industrialTransportation: "Vận tải công nghiệp",
      alternativeEnergy: "Năng lượng thay thế",
      electricity: "Điện lực",
      gasWater: "Khí đốt, nước và tiện ích đa năng",
      wasteAndDisposal: "Dịch vụ xử lý chất thải"
    },
    technology: {
      beverages: "Đồ uống",
      foodProducers: "Nhà sản xuất thực phẩm",
      tobacco: "Thuốc lá",
      constructionMaterials: "Xây dựng và vật liệu",
      industrialMaterials: "Vật liệu công nghiệp",
      industrialMetals: "Kim loại công nghiệp và khai khoáng",
      preciousMetals: "Kim loại quý và khai khoáng",
      chemicals: "Hóa chất",
      oilGasCoal: "Dầu mỏ, khí đốt và than đá"
    },
    services: {
      medicalEquipment: "Thiết bị và dịch vụ y tế",
      pharmaBiotech: "Dược phẩm và công nghệ sinh học",
      automobilesParts: "Ô tô và phụ tùng",
      householdGoods: "Hàng gia dụng và xây dựng nhà ở",
      leisureGoods: "Hàng hóa giải trí",
      personalGoods: "Hàng hóa cá nhân",
      electronicEquipment: "Thiết bị điện tử và điện",
      generalIndustrials: "Công nghiệp tổng hợp"
    },
    infrastructure: {
      techHardware: "Phần cứng và thiết bị công nghệ",
      telecomEquipment: "Thiết bị viễn thông",
      aerospaceDefense: "Hàng không vũ trụ và quốc phòng",
      industrialEngineering: "Kỹ thuật công nghiệp"
    }
  },
  th: {
    manufacturing: {
      softwareAndComputer: "บริการซอฟต์แวร์และคอมพิวเตอร์",
      telecommunicationsProviders: "ผู้ให้บริการโทรคมนาคม",
      healthCare: "ผู้ให้บริการดูแลสุขภาพ",
      banks: "ธนาคาร",
      financeAndCredit: "บริการทางการเงินและสินเชื่อ",
      investmentBanking: "วาณิชธนกิจและบริการนายหน้าซื้อขายหลักทรัพย์",
      mortgageRealEstate: "กองทรัสต์เพื่อการลงทุนในอสังหาริมทรัพย์และสิทธิการเช่า",
      closedEndInvestments: "การลงทุนประเภทกองทุนปิด",
      openEndInvestments: "กองทุนเปิดและช่องทางการลงทุนอื่นๆ",
      lifeInsurance: "ประกันชีวิต",
      nonlifeInsurance: "ประกันวินาศภัย",
      realEstateDev: "การลงทุนและพัฒนาบริการอสังหาริมทรัพย์",
      realEstateTrusts: "ทรัสต์เพื่อการลงทุนในอสังหาริมทรัพย์",
      consumerServices: "บริการเพื่อผู้บริโภค",
      media: "สื่อ",
      retailers: "ร้านค้าปลีก",
      travelAndLeisure: "ท่องเที่ยวและสันทนาการ",
      personalCare: "ผลิตภัณฑ์ดูแลส่วนบุคคล ร้านขายยา และซูเปอร์มาร์เก็ต",
      industrialSupport: "บริการสนับสนุนภาคอุตสาหกรรม",
      industrialTransportation: "การขนส่งเชิงอุตสาหกรรม",
      alternativeEnergy: "พลังงานทางเลือก",
      electricity: "ไฟฟ้า",
      gasWater: "ก๊าซ น้ำ และสาธารณูปโภคครบวงจร",
      wasteAndDisposal: "บริการจัดการของเสีย"
    },
    technology: {
      beverages: "เครื่องดื่ม",
      foodProducers: "ผู้ผลิตอาหาร",
      tobacco: "ยาสูบ",
      constructionMaterials: "การก่อสร้างและวัสดุ",
      industrialMaterials: "วัสดุอุตสาหกรรม",
      industrialMetals: "โลหะอุตสาหกรรมและการทำเหมือง",
      preciousMetals: "โลหะมีค่าและการทำเหมือง",
      chemicals: "สารเคมี",
      oilGasCoal: "น้ำมัน ก๊าซ และถ่านหิน"
    },
    services: {
      medicalEquipment: "อุปกรณ์และบริการทางการแพทย์",
      pharmaBiotech: "เภสัชกรรมและเทคโนโลยีชีวภาพ",
      automobilesParts: "ยานยนต์และชิ้นส่วน",
      householdGoods: "ของใช้ในครัวเรือนและการสร้างบ้าน",
      leisureGoods: "สินค้าสันทนาการ",
      personalGoods: "สินค้าส่วนบุคคล",
      electronicEquipment: "อุปกรณ์อิเล็กทรอนิกส์และไฟฟ้า",
      generalIndustrials: "อุตสาหกรรมทั่วไป"
    },
    infrastructure: {
      techHardware: "ฮาร์ดแวร์และอุปกรณ์เทคโนโลยี",
      telecomEquipment: "อุปกรณ์โทรคมนาคม",
      aerospaceDefense: "การบินและอวกาศและการป้องกันประเทศ",
      industrialEngineering: "วิศวกรรมอุตสาหการ"
    }
  },
  jp: {
    manufacturing: {
      softwareAndComputer: "ソフトウェアおよびコンピュータサービス",
      telecommunicationsProviders: "通信サービス提供者",
      healthCare: "医療提供者",
      banks: "銀行",
      financeAndCredit: "金融および信用サービス",
      investmentBanking: "投資銀行および証券仲介サービス",
      mortgageRealEstate: "住宅ローン不動産投資信託",
      closedEndInvestments: "クローズド・エンド型投資",
      openEndInvestments: "オープン・エンド型およびその他の投資ビークル",
      lifeInsurance: "生命保険",
      nonlifeInsurance: "損害保険",
      realEstateDev: "不動産投資・サービス開発",
      realEstateTrusts: "不動産投資信託",
      consumerServices: "消費者向けサービス",
      media: "メディア",
      retailers: "小売業者",
      travelAndLeisure: "旅行・レジャー",
      personalCare: "パーソナルケア、薬局、食料品店",
      industrialSupport: "産業支援サービス",
      industrialTransportation: "産業運輸",
      alternativeEnergy: "代替エネルギー",
      electricity: "電力",
      gasWater: "ガス、水道、複合公益事業",
      wasteAndDisposal: "廃棄物処理サービス"
    },
    technology: {
      beverages: "飲料",
      foodProducers: "食品製造業",
      tobacco: "タバコ",
      constructionMaterials: "建設および材料",
      industrialMaterials: "産業用材料",
      industrialMetals: "産業用金属および鉱業",
      preciousMetals: "貴金属および鉱業",
      chemicals: "化学製品",
      oilGasCoal: "石油、ガス、石炭"
    },
    services: {
      medicalEquipment: "医療機器およびサービス",
      pharmaBiotech: "医薬品およびバイオテクノロジー",
      automobilesParts: "自動車および部品",
      householdGoods: "家庭用品および住宅建設",
      leisureGoods: "レジャー用品",
      personalGoods: "個人用品",
      electronicEquipment: "電子・電気機器",
      generalIndustrials: "一般産業"
    },
    infrastructure: {
      techHardware: "テクノロジーハードウェアおよび機器",
      telecomEquipment: "通信機器",
      aerospaceDefense: "航空宇宙および防衛",
      industrialEngineering: "産業工学"
    }
  }
};

for (const lang of langs) {
  const filePath = path.join(basePath, lang, "landing", "BusinessSectorsSection.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const groups = ["manufacturing", "technology", "services", "infrastructure"];
  for (const groupKey of groups) {
    if (data.businessSectors && data.businessSectors.businessGroups[groupKey]) {
      const sectors = data.businessSectors.businessGroups[groupKey].sectors;
      for (const sectorKey in sectors) {
        if (translations[lang][groupKey] && translations[lang][groupKey][sectorKey]) {
          sectors[sectorKey].name = translations[lang][groupKey][sectorKey];
        }
      }
    }
  }

  // Rewrite
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}
console.log("Translations successfully applied.");
