let generateProducts = [
    {
        id: "0",
        image: "./assets/img/screen/1_MSI_G27CQ4.png",
        title: "Màn hình MSI Optix G27CQ4 (27inch/QHD/VA/165Hz/1ms/250nits/HDMI+DP+Audio/Cong)",
        price1: 9299000,
        sale_off: 3,
        price: 8989000,
        info: {
            desc: "Nhà sản xuất MSI | Tên sản phẩm : G27CQ4 | Phân khúc Gaming | Kích thước 27 inch (69 cm) | Độ phân giải 2560 x 1440 ( QHD ) | Tần số quét 165Hz | Màu sắc : Blue",
            producer: "MSI"
        },
        quantily: 23,
        type: "Monitor"
    },
    {
        id: "1",
        image: "./assets/img/screen/2_MSI_MAG271C.jpeg",
        title: "Màn hình MSI Optix G27CQ4 (27inch/QHD/VA/165Hz/1ms/250nits/HDMI+DP+Audio/Cong)",
        price1: 8079000,
        sale_off: 19,
        price: 6529000,
        info: {
            desc: "Nhà sản xuất MSI | Tên sản phẩm : G27CQ4 | Phân khúc Gaming | Kích thước 27 inch (69 cm) | Độ phân giải 2560 x 1440 ( QHD ) | Tần số quét 165Hz | Màu sắc : Dark",
            producer: "MSI"
        },
        quantily: 25,
        type: "Monitor"
    },
    {
        id: "2",
        image: "./assets/img/screen/3_MSI_G271.jpeg",
        title: "Màn hình MSI Optix G271 (27inch/FHD/IPS/144Hz/1ms/250nits/HDMI+DP/FreeSync)",
        price1: 7399000,
        sale_off: 8,
        price: 6819000,
        info: {
            desc: "Nhà sản xuất MSI | Tên sản phẩm : G271 | Phân khúc Gaming | Kích thước 27 inch (69 cm) | Độ phân giải 1920 x 1080 (FHD) | Tần số quét 144Hz | Tấm nền  IPS | Màu sắc : Dark",
            producer: "MSI"
        },
        quantily: 28,
        type: "Monitor"
    },
    {
        id: "3",
        image: "./assets/img/screen/4_Acer_Predator-X34P.png",
        title: "Màn hình Acer Predator X34P (34 inch/Curved/WQHD/120Hz)",
        price1: 31710009,
        sale_off: 7,
        price: 29489000,
        info: {
            desc: "Nhà sản xuất Acer | Tên sản phẩm : G27CQ4 | Phân khúc Gaming | Kích thước 27 inch (69 cm) | Độ phân giải 1920 x 1080 (FHD) | Tần số quét 144Hz | Tấm nền  VA | Màu sắc : black/red",
            producer: "Acer",
        },
        quantily: 17,
        type: "Monitor"
    },
    {
        id: "4",
        image: "./assets/img/screen/5_Acer_K202HQL.jpeg",
        title: "Màn hình Acer K202HQL (19.5 inch/HD+/LED/VGA/TN/60Hz/250 cd/m²/5ms)",
        price1: 3299000,
        sale_off: 18,
        price: 2699000,
        info: {
            desc: "Nhà sản xuất Acer | Tên sản phẩm : K202HQL | Phân khúc Văn Phòng | Kích thước 27 inch (69 cm) | Độ phân giải HD+ 1600 x 900 | Tần số quét 60Hz | Tấm nền  VA | Màu sắc : black",
            producer: "Acer",
        },
        quantily: 30,
        type: "Monitor"
    },
    {
        id: "5",
        image: "./assets/img/screen/6_Acer_VG240Y.jpeg",
        title: "Màn hình Acer Nitro VG240Y (23.8inch/FHD/IPS/75Hz/1ms/250nits/HDMI+VGA+Audio/Freesync)",
        price1: 5039000,
        sale_off: 10,
        price: 4539000,
        info: {
            desc: "Nhà sản xuất Acer | Tên sản phẩm : Nitro VG240Y | Phân khúc Gaming | Kích thước 23.8 inch | Độ phân giải FHD 1920x1080 | Tần số quét 75Hz | Tấm nền IPS | Màu sắc : black/red",
            producer: "Acer",
        },
        quantily: 18,
        type: "Monitor"
    },
    {
        id: "6",
        image: "./assets/img/screen/7_AOC_C32V1Q_74.png",
        title: "Màn hình AOC C32V1Q/74 (31.5inch/FHD/VA75Hz/4ms/250nits/HDMI+DP+VGA/Cong)",
        price1: 5759000,
        sale_off: 6,
        price: 5399000,
        info: {
            desc: "Nhà sản xuất AOC | Tên sản phẩm : C32V1Q/74 | Phân khúc Văn phòng | Kích thước 23.8 inch | Độ phân giải QHD 2560x1440 | Tần số quét 165Hz | Tấm nền VA Cong 1800R | Màu sắc : black",
            producer: "AOC"
        },
        quantily: 25,
        type: "Monitor"
    },
    {
        id: "7",
        image: "./assets/img/screen/8_AOC_CQ27G2_74.png",
        title: "Màn hình AOC CQ27G2/74 (27inch/QHD/VA/144Hz/1ms/250nits/HDMI+DP/Freesync/Cong)",
        price1: 7069000,
        sale_off: 6,
        price: 6649000,
        info: {
            desc: "Nhà sản xuất AOC | Tên sản phẩm : CQ27G2/74 | Phân khúc Gaming | Kích thước 27 inch | Độ phân giải QHD 2560x1440 | Tần số quét 165Hz | Tấm nền VA Cong 1800R | Màu sắc : black",
            producer: "AOC",
            name: "CQ27G2/74",
            segment: "Gaming",
            size: "27 inch ",
            resolution: "QHD 2560x1440",
            panel: "VA",
            sweepFrequency: "75Hz",
            color: "black"
        },
        quantily: 8,
        type: "Monitor"
    },
    {
        id: "8",
        image: "./assets/img/screen/9_AOC_22B1HS_74.png",
        title: "Màn hình AOC 22B1HS/74 (21.5inch/FHD/IPS/VGA+HDMI/250nits/60Hz/5ms/HDMI+VGA)",
        price1: 3899000,
        sale_off: 17,
        price: 3249000,
        info: {
            desc: "Nhà sản xuất AOC | Tên sản phẩm : G27CQ4 | Phân khúc Văn phòng | Kích thước 21.5 inch | Độ phân giải FHD 1920x1080 | Tần số quét 60Hz | Tấm nền IPS | Màu sắc : Dark",
            producer: "AOC",
            name: "G27CQ4",
            segment: "Văn phòng",
            size: "21.5 inch",
            resolution: "FHD 1920x1080",
            panel: "IPS",
            sweepFrequency: "60Hz",
            color: "dark"
        },
        quantily: 21,
        type: "Monitor"
    },
    {
        id: "9",
        image: "./assets/img/screen/10_Asus Pro Art PA278CV.png",
        title: "Màn hình Asus Pro Art PA278CV (27inch/WQHD/IPS/75Hz/5ms/350nits/HDMI+DP+USBC+Audio)",
        price1: 11519000,
        sale_off: 3,
        price: 11119000,
        info: {
            desc: "Nhà sản xuất MSI | Tên sản phẩm : G27CQ4 | Phân khúc Gaming | Kích thước 27 inch | Độ phân giải WQHD 2560x 1440 | Tần số quét 75Hz | Tấm nền IPS | Màu sắc : Dark",
            producer: "Asus",
            name: "G27CQ4",
            segment: "Gaming",
            size: "27 inch",
            resolution: "WQHD 2560x 1440",
            panel: "IPS",
            sweepFrequency: "75Hz",
            color: "đen"
        },
        quantily: 13,
        type: "Monitor"
    },
    {
        id: "10",
        image: "./assets/img/screen/11_Asus Pro Art PA247CV.png",
        title: "Màn hình Asus Pro Art PA247CV (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)",
        price1: 7199000,
        sale_off: 7,
        price: 6729000,
        info: {
            desc: "Nhà sản xuất MSI | Tên sản phẩm : G27CQ4 | Phân khúc Gaming | Kích thước 27 inch (69 cm) | Độ phân giải 2560 x 1440 ( QHD ) | Tần số quét 165Hz | Tấm nền VA | Màu sắc : Blue",
            producer: "Asus",
            name: "G27CQ4",
            segment: "Gaming",
            size: "27 inch (69 cm)",
            resolution: "2560 x 1440 ( QHD )",
            panel: "VA",
            sweepFrequency: "165Hz",
            color: "blue"
        },
        quantily: 16,
        type: "Monitor"
    },
    {
        id: "11",
        image: "./assets/img/screen/12_ASUS VA27EHE.png",
        title: "Màn hình ASUS VA27EHE (27 inch/FHD/IPS/250cd/m²/HDMI+D-Sub/75Hz)",
        price1: 6299000,
        sale_off: 11,
        price: 5619000,
        info: {
            desc: "Nhà sản xuất Asus | Tên sản phẩm : VA27EHE | Phân khúc Gaming | Kích thước 27 inch (69 cm) | Độ phân giải FHD | Tần số quét 165Hz | Tấm nền IPS | Màu sắc : Blue",
            producer: "Asus",
            name: "VA27EHE",
            segment: "Gaming",
            size: "27 inch (69 cm)",
            resolution: "FHD",
            panel: "IPS",
            sweepFrequency: "165Hz",
            color: "blue"
        },
        quantily: 13,
        type: "Monitor"
    },
    {
        id: "12",
        image: "./assets/img/screen/13_BenQ Zowie EW3270U.jpeg",
        title: "Màn hình BenQ Zowie EW3270U (31.5inch/4K/VA/60Hz/300nits/1B Color/95%DCI-P3/HDMI+DP+USBC+Audio/HDR10/EyeCare/Loa)",
        price1: 11199000,
        sale_off: 6,
        price: 10499000,
        info: {
            desc: "Nhà sản xuất BenQ | Tên sản phẩm : Zowie EW3270U | Phân khúc Gaming | Kích thước 31.5inch | Độ phân giải 4K | Tần số quét 60Hz | Tấm nền VA | Màu sắc : Blue",
            producer: "BenQ",
            name: "Zowie EW3270U",
            segment: "Gaming",
            size: "31.5inch",
            resolution: "4K",
            panel: "VA",
            sweepFrequency: "60Hz",
            color: "blue"
        },
        quantily: 22,
        type: "Monitor"
    },
    {
        id: "13",
        image: "./assets/img/screen/14_BenQ EX2510.png",
        title: "Màn hình BenQ EX2510 (24.5inch/FHD/IPS/144Hz/1ms/400nits/HDMI+DP+Audio/FreeSync/Loa)",
        price1: 7099000,
        sale_off: 8,
        price: 6539000,
        info: {
            desc: "Nhà sản xuất BenQ | Tên sản phẩm : EX2510 | Phân khúc Gaming | Kích thước 24.5inch | Độ phân giải FHD | Tần số quét 144Hz | Tấm nền IPS | Màu sắc : Blue",
            producer: "BenQ",
            name: "EX2510",
            segment: "Gaming",
            size: "24.5inch",
            resolution: "FHD",
            panel: "IPS",
            sweepFrequency: "144Hz",
            color: "blue"
        },
        quantily: 17,
        type: "Monitor"
    },
    {
        id: "14",
        image: "./assets/img/screen/15_BenQ XL2546K.png",
        title: "Màn hình BenQ XL2546K (24inch/FHD/TN/240Hz/0.5ms/320nits/HDMI+DP+Audio/Dyac+)",
        price1: 14669000,
        sale_off: 8,
        price: 13489000,
        info: {
            desc: "Nhà sản xuất BenQ | Tên sản phẩm : XL2546K | Phân khúc Gaming | Kích thước 24 inch | Độ phân giải 1920 x 1080 at 240Hz (HDMI 2.0, DP) | Tần số quét 165Hz | Tấm nền TN | Màu sắc : Blue",
            producer: "BenQ",
            name: "XL2546K",
            segment: "Gaming",
            size: "24 inch",
            resolution: "1920 x 1080 at 240Hz (HDMI 2.0, DP)",
            panel: "TN",
            sweepFrequency: "165Hz",
            color: "blue"
        },
        quantily: 12,
        type: "Monitor"
    },
    {
        id: "15",
        image: "./assets/img/screen/16_Dell P2319H.png",
        title: "Màn hình Dell P2319H (23 inch/FHD/LED/IPS/DP+HDMI+VGA/250cd/m²/60Hz/5ms)",
        price1: 5499000,
        sale_off: 12,
        price: 4849000,
        info: {
            desc: "Nhà sản xuất Dell | Tên sản phẩm : P2319H | Phân khúc Gaming | Kích thước 24 inch | Độ phân giải Full HD (1920x1080) | Tần số quét 60Hz | Tấm nền IPS | Màu sắc : Dark",
            producer: "Dell",
            name: "P2319H",
            segment: "Gaming",
            size: "24 inch",
            resolution: "Full HD (1920x1080)",
            panel: "IPS",
            sweepFrequency: "60Hz",
            color: "Đen"
        },
        quantily: 9,
        type: "Monitor"
    },
    {
        id: "16",
        image: "./assets/img/screen/17_Dell E2020H.jpeg",
        title: "Màn hình Dell E2020H (19.5 inch/HD/TN/60Hz/5ms/250 nits/DP+VGA)",
        price1: 4399000,
        sale_off: 15,
        price: 3739000,
        info: {
            desc: "Nhà sản xuất Dell | Tên sản phẩm : E2020H | Phân khúc Màn hình thông dụng | Kích thước 19.5 inch | Độ phân giải 1600x900 HD | Tần số quét 60Hz | Tấm nền TN | Màu sắc : Dark",
            producer: "Dell",
            name: "E2020H",
            segment: "Màn hình thông dụng",
            size: "19.5 inch",
            resolution: "1600x900 HD",
            panel: "TN",
            sweepFrequency: "60Hz",
            color: "Đen"
        },
        quantily: 15,
        type: "Monitor"
    },
    {
        id: "17",
        image: "./assets/img/screen/18_Dell E2720HS.png",
        title: "Màn hình Dell E2720HS (27inch/FHD/IPS/60Hz/8ms/HDMI+VGA))",
        price1: 7099000,
        sale_off: 6,
        price: 6659000,
        info: {
            desc: "Nhà sản xuất Dell | Tên sản phẩm : E2720HS | Phân khúc Màn hình thông dụng | Kích thước 27 inch (69 cm) | Độ phân giải 1600x900 HD | Tần số quét 60Hz | Tấm nền IPS | Màu sắc : Dark",
            producer: "Dell",
            name: "E2720HS",
            segment: "Màn hình thông dụng",
            size: "27 inch (69 cm)",
            resolution: "Full HD (1920x1080)",
            panel: "IPS",
            sweepFrequency: "60Hz",
            color: "Đen"
        },
        quantily: 1,
        type: "Monitor"
    },
    {
        id: "18",
        image: "./assets/img/screen/19_HP 27XQ.png",
        title: "Màn hình HP 27XQ (27 inch/2K/144Hz/1ms/350cd/m²/DP+HDMI)",
        price1: 11000009,
        sale_off: 15,
        price: 9409000,
        info: {
            desc: "Nhà sản xuất HP | Tên sản phẩm : 27XQ | Phân khúc Văn phòng | Kích thước 27 inch (69 cm) | Độ phân giải 2K | Tần số quét 144Hz | Tấm nền TN | Màu sắc : Dark",
            producer: "HP",
            name: "27XQ",
            segment: "Màn hình thông dụng",
            size: "27 inch (69 cm)",
            resolution: "2K",
            panel: "TN",
            sweepFrequency: "144Hz",
            color: "Đen"
        },
        quantily: 19,
        type: "Monitor"
    },
    {
        id: "19",
        image: "./assets/img/screen/20_HP Z24F G3.png",
        title: "Màn hình HP Z24F G3(27inch/FHD/IPS/60Hz/5ms/300nits/HDMI+DP+VGA+USB)",
        price1: 6669000,
        sale_off: 8,
        price: 6159000,
        info: {
            desc: "Nhà sản xuất HP | Tên sản phẩm : Z24f G3 _3G828AA | Phân khúc Văn phòng | Kích thước 23.8 inch | Độ phân giải 1920x1080 | Tần số quét 60Hz | Tấm nền IPS | Màu sắc : Dark",
            producer: "HP",
            name: "Z24f G3 _3G828AA",
            segment: "Màn hình thông dụng",
            size: "23.8 inch",
            resolution: "1920x1080",
            panel: "IPS",
            sweepFrequency: "60Hz",
            color: "Đen"
        },
        quantily: 20,
        type: "Monitor"
    },
    {
        id: "20",
        image: "./assets/img/c_components/51_ Asus ROG Ti-O12G-GAMING.png",
        title: "Card màn hình Asus ROG STRIX-RTX 3080 Ti-O12G-GAMING",
        price1: 51509000,
        sale_off: 7,
        price: 47999000,
        info: {
            desc: "Nhà sản xuất Asus | Loại sản phầm:  Card đồ họa VGA | ROG STRIX-RTX 3080 Ti-O12G-GAMING | NVIDIA® RTX 3080 Ti™ | Băng thông : PCI Express 4.0 x 16 | 19 Gbps | 12GB GDDR6X | 384-bit",
            species: "Card đồ họa VGA",
            producer: "Asus",
            model: "ROG STRIX-RTX 3080 Ti-O12G-GAMING",
            enginegraphic: "NVIDIA® RTX 3080 Ti™",
            bus: "PCI Express 4.0 x 16",
            memoryclock: "19 Gbps",
            memory: "12GB GDDR6X",
            busmemory: "384-bit"
        },
        quantily: 5,
        type: "components"
    },
    {
        id: "21",
        image: "./assets/img/c_components/52_Asus TUF Ti-O12G-GAMING.png",
        title: "Card màn hình Asus TUF STRIX-RTX 3080 Ti-O12G-GAMING",
        price1: 47469000,
        sale_off: 1,
        price: 46999000,
        info: {
            desc: "Nhà sản xuất Asus | Loại sản phầm:  Card đồ họa VGA | TUF STRIX-RTX 3080 Ti-O12G-GAMING | NVIDIA® RTX 3080 Ti™ | Băng thông : PCI Express 4.0 x 16 | 19 Gbps | 12GB GDDR6X | 384-bit",
            species: "Card đồ họa VGA",
            producer: "Asus",
            model: "TUF RTX 3080 Ti-O12G-GAMING",
            enginegraphic: "NVIDIA® RTX 3080 Ti™",
            bus: "PCI Express 4.0 x 16",
            memoryclock: "19 Gbps",
            memory: "12GB GDDR6X",
            busmemory: "384-bit"
        },
        quantily: 3,
        type: "components"
    },
    {
        id: "22",
        image: "./assets/img/c_components/53_Asus TRX40-PRO.png",
        title: "Mainboard ASUS PRIME TRX40-PRO (AMD TRX40 ,Socket sTRX4, ATX, 8 khe RAM DDR4)",
        price1: 12629000,
        sale_off: 12,
        price: 11109000,
        info: {
            desc: "Nhà sản xuất Asus | Loại sản phầm:  Mainboard | ASUS PRIME TRX40-PRO | AMD Socket sTRX4 for 3rd Gen AMD Ryzen™ Threadripper™ Series Desktop Processors | Build in AMD TRX40 | 8 x DIMM, Max. 256GB, DDR4 3200/2933/2800/2666/2400/2133 MHz ECC and non-ECC, Un-buffered Memory | Supports AMD 2-Way CrossFireX Technology ",
            species: "Mainboard",
            producer: "Asus",
            model: "ASUS PRIME TRX40-PRO",
            cpu: "AMD Socket sTRX4 for 3rd Gen AMD Ryzen™ Threadripper™ Series Desktop Processors",
            chipset: "Build in AMD TRX40",
            memory: "8 x DIMM, Max. 256GB, DDR4 3200/2933/2800/2666/2400/2133 MHz ECC and non-ECC, Un-buffered Memory",
            multiGPUsupport: "Supports AMD 2-Way CrossFireX Technology"
        },
        quantily: 8,
        type: "components"
    },
    {
        id: "23",
        image: "./assets/img/c_components/54_Asus TUF B450-PRO.png",
        title: "Mainboard ASUS TUF B450-PRO GAMING (AMD B450, Socket AM4, ATX, 4 khe RAM DDR4)",
        price1: 2629000,
        sale_off: 8,
        price: 2429000,
        info: {
            desc: "Nhà sản xuất Asus | Loại sản phầm:  Mainboard |TUF B450-PRO GAMING  | AMD Socket sTRX4 for 3rd Gen AMD Ryzen™ Threadripper™ Series Desktop Processors | B450 | 2 x M.2 NVM.e, 6 x SATA 6Gb/s connectors | P/S2, DVI, HDMI, USB Type C, 6 USB Type A, LAN, Audio 3.5mm",
            species: "Mainboard",
            producer: "Asus",
            model: "TUF B450-PRO GAMING ",
            cpu: "AMD",
            chipset: "B450",
            harddrive: "2 x M.2 NVM.e, 6 x SATA 6Gb/s connectors",
            backpanel: " P/S2, DVI, HDMI, USB Type C, 6 USB Type A, LAN, Audio 3.5mm"
        },
        quantily: 14,
        type: "components"
    },
    {
        id: "24",
        image: "./assets/img/c_components/55_MSI MEG Z590.png",
        title: "Mainboard MSI MEG Z590 GODLIKE",
        price1: 29799000,
        sale_off: 23,
        price: 22999000,
        info: {
            desc: "Nhà sản xuất Asus | Loại sản phầm:  Mainboard |TUF B450-PRO GAMING  | Intel | Z590 | 6x SATA 6Gb/s ports (From Z590 chipset), 4x M.2 slots (Key M) | 4x DDR4 memory slots, support up to 128GB, Supports 1R 2133/ 2666/ 2933 MHz for 10th Gen Intel® CPU (by JEDEC & POR), Supports 1R 2133/ 2666/ 2933/ 3200 MHz for 11th Gen Intel® CPU (by JEDEC & POR),...",
            species: "Mainboard",
            producer: "MSI",
            model: "TUF B450-PRO GAMING ",
            cpu: "Intel",
            chipset: "Z590",
            harddrive: "6x SATA 6Gb/s ports (From Z590 chipset), 4x M.2 slots (Key M)",
            RAMsupports: "4x DDR4 memory slots, support up to 128GB, Supports 1R 2133/ 2666/ 2933 MHz for 10th Gen Intel® CPU (by JEDEC & POR), Supports 1R 2133/ 2666/ 2933/ 3200 MHz for 11th Gen Intel® CPU (by JEDEC & POR),..."
        },
        quantily: 9,
        type: "components"
    },
    {
        id: "25",
        image: "./assets/img/c_components/56_ ARESZE EPS600ELA.png",
        title: "Nguồn ARESZE EPS600ELA (80 Plus /Màu Đen)",
        price1: 2079000,
        sale_off: 8,
        price: 1919000,
        info: {
            desc: "Nhà sản xuất ARESZE | Loại sản phầm:  Nguồn | EPS450ELA(85 Plus) | Intel | Kích thước: 50*85*160mm | 50*85*160mm | Công suất: 600W | > 17ms | CE/ FCC/ UL/ TUV/ C-Tick / GOST/BSMI/ CCC/ KCC",
            species: "Nguồn",
            producer: "ARESZE",
            model: "EPS450ELA(85 Plus)",
            size: "50*85*160mm",
            inputvoltage: "50*85*160mm",
            wattage: "600W",
            retentiontime: "> 17ms",
            efficiency: ">80%",
            safetystandards: "CE/ FCC/ UL/ TUV/ C-Tick / GOST/BSMI/ CCC/ KCC"
        },
        quantily: 10,
        type: "components"
    },
    {
        id: "26",
        image: "./assets/img/c_components/57_Asus SDRW-08D2S-U Ext USB.png",
        title: "Ổ Quang DVD Rewrite Asus SDRW-08D2S-U Ext USB",
        price1: 899000,
        sale_off: 17,
        price: 749000,
        info: {
            desc: "Nhà sản xuất Asus | Loại sản phầm: Ổ quang | DVD + R: 8X, DVD-R: 8X, DVD + RW: 8X, DVD-RW: 8X, DVD-ROM: 8X , DVD + R (DL): 8X, DVD-R (DL): 8X ,DVD-ROM (DL): 8X, DVD-RAM: 5x , CD-R: 24X, CD-RW: 24X ,CD-ROM: 24X, DVD Video Playback: 4X, VCD Phát lại: 10X | DVD + R: 8X, DVD-R: 8X, DVD + RW: 8X, DVD-RW: 6X, DVD + R (DL): 6X, DVD-R (DL): 6X, DVD-RAM: 5x, CD-R: 24X, CD-RW: 16X | USB 2.0 | PC/laptop | 157 x 142 x 21 cm (DxRxC) | Disc Encryption tăng gấp đôi sự bảo mật bằng mật khẩu điều khiển và chức năng ẩn tập tin. Thiết kế thẩm mỹ, công nghệ vượt trội ",
            species: "Ổ quang",
            producer: "ASUS",
            model: "EPS450ELA(85 Plus)",
            readrate: "DVD + R: 8X, DVD-R: 8X, DVD + RW: 8X, DVD-RW: 8X, DVD-ROM: 8X , DVD + R (DL): 8X, DVD-R (DL): 8X ,DVD-ROM (DL): 8X, DVD-RAM: 5x , CD-R: 24X, CD-RW: 24X ,CD-ROM: 24X, DVD Video Playback: 4X, VCD Phát lại: 10X",
            recordingspeed: "DVD + R: 8X, DVD-R: 8X, DVD + RW: 8X, DVD-RW: 6X, DVD + R (DL): 6X, DVD-R (DL): 6X, DVD-RAM: 5x, CD-R: 24X, CD-RW: 16X",
            usb: "USB 2.0",
            use: "PC/laptop",
            size: "157 x 142 x 21 cm (DxRxC)",
            integratedtechnology: "Disc Encryption tăng gấp đôi sự bảo mật bằng mật khẩu điều khiển và chức năng ẩn tập tin. Thiết kế thẩm mỹ, công nghệ vượt trội "
        },
        quantily: 23,
        type: "components"
    },
    {
        id: "27",
        image: "./assets/img/c_components/58_ HDD WD 1TB Black.png",
        title: "Ổ cứng HDD WD 1TB Black 3.5 inch 7200RPM, SATA, 64MB Cache (WD1003FZEX)",
        price1: 2399000,
        sale_off: 19,
        price: 1409000,
        info: {
            desc: "Nhà sản xuất Western Digital | Loại sản phẩm: Ổ cứng HDD | Caviar Black 1TB | 1TB | SATA3 | 64MB cache | 7200prm | 3Gbps",
            species: "Ổ cứng",
            producer: "Western Digital",
            model: "Caviar Black 1TB",
            capacity: "1TB",
            usb: "SATA 3",
            caching: "64MB cache",
            speedrotation: "7200rpm",
            recordingspeed: "3 Gbps"
        },
        quantily: 16,
        type: "components"
    },
    {
        id: "28",
        image: "./assets/img/c_components/59_ HDD WD 1TB Red.png",
        title: "Ổ cứng HDD WD 1TB Red 3.5 inch, 5400RPM, SATA, 64MB Cache (WD10EFRX)",
        price1: 1799000,
        sale_off: 22,
        price: 1409000,
        info: {
            desc: "Nhà sản xuất Western Digital | Loại sản phẩm: Ổ cứng HDD | WD10EFRX | 1TB | SATA3 | 64MB cache | 5400rpm | 6 Gb/s",
            species: "Ổ cứng",
            producer: "Western Digital",
            model: "WD10EFRX",
            capacity: "1TB",
            usb: "SATA 3",
            caching: "64MB cache",
            speedrotation: "5400rpm",
            recordingspeed: "6 Gb/s"
        },
        quantily: 11,
        type: "components"
    },
    {
        id: "29",
        image: "./assets/img/c_components/60_HDD WD 2TB Red.png",
        title: "Ổ cứng HDD WD 2TB Red 3.5 inch, 5400RPM, SATA, 256MB Cache ",
        price1: 2399000,
        sale_off: 17,
        price: 1999000,
        info: {
            desc: "Nhà sản xuất Western Digital | Loại sản phẩm: Ổ cứng HDD | WD10EFRX | 2TB | SATA3 | 256MB cache | 5400rpm | 6 Gb/s",
            species: "Ổ cứng",
            producer: "Western Digital",
            model: "WD10EFRX",
            capacity: "2TB",
            usb: "SATA 3",
            caching: "256MB cache",
            speedrotation: "5400rpm",
            recordingspeed: "6Gb/s"
        },
        quantily: 11,
        type: "components"
    },
    {
        id: "30",
        image: "./assets/img/c_components/61_HDD Seagate Barracuda 1TB.png",
        title: "Ổ cứng HDD Seagate Barracuda 1TB 3.5 inch 7200RPM, SATA, 64MB Cache (ST1000DM010)",
        price1: 1199000,
        sale_off: 23,
        price: 929000,
        info: {
            desc: "Nhà sản xuất Seagate | Loại sản phẩm: Ổ cứng HDD | Seagate Barracuda | 1TB | SATA3 | 64MB cache | 7200rpm | 6 Gb/s",
            species: "Ổ cứng",
            producer: "Seagate",
            model: "Seagate Barracuda",
            capacity: "1TB",
            usb: "SATA 3",
            caching: "64MB cache",
            speedrotation: "7200rpm",
            recordingspeed: "6Gb/s"
        },
        quantily: 18,
        type: "components"
    },
    {
        id: "31",
        image: "./assets/img/c_components/62_ HDD Seagate Barracuda 4TB.png",
        title: "Ổ cứng HDD Seagate Barracuda 4TB 3.5 inch 5400RPM, SATA, 256MB Cache (ST4000DM004)",
        price1: 2899000,
        sale_off: 15,
        price: 2469000,
        info: {
            desc: "Nhà sản xuất Seagate | Loại sản phẩm: Ổ cứng HDD | Seagate Barracuda | 4TB | SATA3 | 256MB cache | 5400rpm | 6 Gb/s",
            species: "Ổ cứng",
            producer: "Seagate",
            model: "Seagate Barracuda",
            capacity: "4TB",
            usb: "SATA 3",
            caching: "256MB cache",
            speedrotation: "5400rpm",
            recordingspeed: "6Gb/s"
        },
        quantily: 13,
        type: "components"
    },
    {
        id: "32",
        image: "./assets/img/c_components/63_ FSP Power Supply AX .png",
        title: "Nguồn FSP Power Supply AX Series AX400ATX &nbsp;Active PFC (Màu Đen/Không kèm dây nguồn)",
        price1: 709000,
        sale_off: 21,
        price: 559000,
        info: {
            desc: "Nhà sản xuất FSP | Loại sản phẩm: Nguồn | AX400ATX - Active PFC | 100V-240V | 4-8A | 50-60Hz | 350W | ATX",
            producer: "FSP",
            species: "Nguồn",
            model: "AX400ATX - Active PFC",
            type: "ATX",
            PFC: "Active PFC",
            inputvoltage: "100V-240V",
            inputcurent: "4-8A",
            inputfrequency: "50-60Hz",
            outputcapacity: "350W",
            maxpower: "400W"
        },
        quantily: 25,
        type: "components"
    },
    {
        id: "33",
        image: "./assets/img/c_components/64_ FSP Power Supply HYN450ATX.png",
        title: "Nguồn FSP Power Supply HYN Series HYN450ATX Active PFC (Màu Đen)",
        price1: 779000,
        sale_off: 10,
        price: 699000,
        info: {
            desc: "Nhà sản xuất FSP | Loại sản phẩm: Nguồn | AX400ATX - Active PFC | 100V-240V | 4-8A | 50-60Hz | 350W | ATX",
            species: "Nguồn",
            producer: "FSP",
            model: "HYN450",
            type: "ATX",
            PFC: "Active PFC",
            inputvoltage: "200V-240V",
            inputcurent: "5A",
            inputfrequency: "50-60Hz",
            outputcapacity: "400W",
            maxpower: "450W"
        },
        quantily: 16,
        type: "components"
    },
    {
        id: "34",
        image: "./assets/img/c_components/65_ FSP Power Supply HYN550ATX.png",
        title: "Nguồn FSP Power Supply HYN Series HYN550ATX &nbsp;Active PFC (Màu Đen)",
        price1: 1179000,
        sale_off: 24,
        price: 899000,
        info: {
            desc: "Nhà sản xuất FSP | Loại sản phẩm: Nguồn | HYN450 | 100V-240V | 5A | 200V-240V | 50-60Hz | 500W | ATX",
            producer: "FSP",
            species: "Nguồn",
            model: "HYN450",
            type: "ATX",
            PFC: "Active PFC",
            inputvoltage: "200V-240V",
            inputcurent: "5A",
            inputfrequency: "50-60Hz",
            outputcapacity: "500W",
            maxpower: "550W"
        },
        quantily: 7,
        type: "components"
    },
    {
        id: "35",
        image: "./assets/img/c_components/66_ FSP Power Supply HYDRO HD600.png",
        title: "Nguồn FSP Power Supply HYDRO Series Model HD600  Active PFC (80 Plus  Bronze/Màu Đen)",
        price1: 1619000,
        sale_off: 6,
        price: 1519000,
        info: {
            desc: "Nhà sản xuất FSP | Loại sản phẩm: Nguồn | Active PFC | 100V-240V | 5A | 200V-240V | 50-60Hz | 500W | ATX",
            species: "Nguồn",
            model: "HYN450",
            type: "ATX",
            PFC: "Active PFC",
            inputvoltage: "200V-240V",
            inputcurent: "5A",
            inputfrequency: "50-60Hz",
            outputcapacity: "500W",
            maxpower: "550W"
        },
        quantily: 4,
        type: "components"
    },
    {
        id: "36",
        image: "./assets/img/c_components/67_ HDD WD 2TB Blue.png",
        title: "Ổ cứng HDD WD 2TB Blue 3.5 inch, 5400RPM, SATA, 256MB Cache (WD20EZAZ)",
        price1: 1619000,
        sale_off: 18,
        price: 1399000,
        info: {
            desc: "Nhà sản xuất Western Digital | Loại sản phẩm: Ổ cứng HDD | Seagate Barracuda |2TB | SATA3 | 64MB cache | 5400rpm | 3 Gb/s",
            species: "Ổ cứng",
            producer: "Western Digital",
            capacity: "2TB",
            usb: "SATA 3",
            caching: "256MB cache",
            speedrotation: "5400rpm",
            recordingspeed: "3 Gbps"
        },
        quantily: 19,
        type: "components"
    },
    {
        id: "37",
        image: "./assets/img/c_components/68_HDD WD 2TB Black.png",
        title: "Ổ cứng HDD WD 2TB Black 3.5 inch, 7200RPM, SATA, 64MB Cache (WD2003FZEX) ",
        price1: 3599000,
        sale_off: 8,
        price: 3299000,
        info: {
            desc: "Nhà sản xuất Western Digital | Loại sản phẩm: Ổ cứng HDD | Seagate Barracuda |2TB | SATA3 | 64MB cache | 7200rpm | 3 Gb/s",
            species: "Ổ cứng",
            producer: "Western Digital ",
            capacity: "2TB",
            usb: "SATA 3",
            caching: "64MB cache",
            speedrotation: "7200rpm",
            recordingspeed: "3Gb/s"
        },
        quantily: 21,
        type: "components"
    },
    {
        id: "38",
        image: "./assets/img/c_components/69_ HDD WD 4TB Black.png",
        title: "Ổ cứng HDD WD 4TB Black 3.5 inch, 7200RPM, SATA, 256MB Cache (WD4005FZBX)",
        price1: 5499000,
        sale_off: 11,
        price: 4899000,
        info: {
            desc: "Nhà sản xuất Western Digital | Loại sản phẩm: Ổ cứng HDD | Seagate Barracuda |4TB | SATA3 | 64MB cache | 7200rpm | 3 Gb/s",
            species: "Ổ cứng",
            producer: "Western",
            model: "Black WD4005FZBX",
            capacity: "4TB",
            usb: "SATA 3",
            caching: "64MB cache",
            speedrotation: "7200rpm"
        },
        quantily: 17,
        type: "components"
    },
    {
        id: "39",
        image: "./assets/img/c_components/70_ HDD Seagate SkyHawk 2TB.png",
        title: "Ổ cứng HDD Seagate SkyHawk 2TB 3.5 inch, 5900RPM, SATA, 64MB Cache (ST2000VX008)",
        price1: 1999000,
        sale_off: 22,
        price: 1559000,
        info: {
            desc: "Nhà sản xuất Seagate SkyHawk | Loại sản phẩm: Ổ cứng HDD | Seagate Barracuda |2TB | SATA3 | 64MB cache | 5900rpm | 6 Gb/s",
            species: "Ổ cứng",
            producer: "Seagate",
            model: "Seagate SkyHawk",
            capacity: "2TB",
            usb: "SATA 3",
            caching: "64MB cache",
            speedrotation: "5900rpm",
            recordingspeed: "6Gb/s"
        },
        quantily: 5,
        type: "components"
    },
    {
        id: "40",
        image: "./assets/img/spare_parts/101_Zidli ZH20 7.1.png",
        title: "Tai nghe Zidli ZH20 7.1 Led RGB USB",
        price1: 809000,
        sale_off: 38,
        price: 499000,
        info: {
            desc: "Nhà sản xuất Zidli | Loại sản phẩm: Tai nghe | LED : Có | Màu: Đen, Xám | Tai nghe có dây | Microphone: Có | Over-ear | USB",
            product: "Tai nghe",
            producer: "Zidli",
            color: "Đen, Xám",
            ledlight: "Có",
            connection: "usb",
            type: "Over-ear",
            connectiontype: "Tai nghe có dây",
            microphone: "Có"
        },
        quantily: 34,
        type: "Spare-part"
    },
    {
        id: "41",
        image: "./assets/img/spare_parts/102_HIGH RESOLUTION.png",
        title: "WEBCAM HIGH RESOLUTION 720P ĐEN ĐỎ",
        price1: 509000,
        sale_off: 28,
        price: 369000,
        info: {
            desc: "Nhà sản xuất OEM | Loại sản phẩm: Webcam | High Resolution | Màu: Đen | 720P | Microphone: Có | USB",
            product: "Webcam",
            producer: "OEM",
            model: "High Resolution",
            resolution: "720P",
            connection: "usb",
            microphone: "Có"
        },
        quantily: 39,
        type: "Spare-part"
    },
    {
        id: "42",
        image: "./assets/img/spare_parts/103_SONY MDR-XB55AP.png",
        title: "TAI NGHE SONY MDR-XB55AP XANH LÁ",
        price1: 909000,
        sale_off: 15,
        price: 769000,
        info: {
            desc: "Nhà sản xuất SONY | Loại sản phẩm: Tai nghe | LED : Có | Màu: Đen, Xám | IN-EAR Xtra Bass Tai nghe MDR-XB55AP(Xanh lá) | Microphone: Có | Over-ear | Jack 3.5mm",
            product: "Tai nghe",
            producer: "SONY",
            model: "IN-EAR Xtra Bass Tai nghe MDR-XB55AP(Xanh lá)",
            standardplug: "Jack 3.5mm",
            microphone: "Có"
        },
        quantily: 29,
        type: "Spare-part"
    },
    {
        id: "43",
        image: "./assets/img/spare_parts/104_CORSAIR VIRTUOSO.png",
        title: "TAI NGHE KHÔNG DÂY GAMING CORSAIR VIRTUOSO RGB WHITE (CA-9011186-AP)",
        price1: 5359000,
        sale_off: 16,
        price: 4499000,
        info: {
            desc: "Nhà sản xuất Corsair | Loại sản phẩm: Tai nghe | Virtuoso Wireless RGB White (CA-9011186-AP) | Màu: Trắng | Tai nghe có dây | Microphone: Có | Over-ear | USB Wireless",
            product: "Tai nghe",
            producer: "Corsair",
            model: "Virtuoso Wireless RGB White (CA-9011186-AP)",
            design: "Chụp tai",
            microphone: "Có",
            connection: "USB Wireless",
            color: "Trắng"
        },
        quantily: 42,
        type: "Spare-part"
    },
    {
        id: "44",
        image: "./assets/img/spare_parts/105_LOGITECH MEETUP.png",
        title: "WEBCAM LOGITECH MEETUP",
        price1: 30299000,
        sale_off: 8,
        price: 27869000,
        info: {
            desc: "Nhà sản xuất Logitech | Loại sản phẩm: Webcam | Meetup | Màu: Đen | Gọi điện video 4K Ultra HD (lên tới 3840 x 2160 pixel ở tốc độ 30 khung hình/giây với dây USB 3.0 option không đi kèm) | Microphone: Phạm vi thu: 2,4 m /8, phạm vi thu với Mic kéo dài: 4,2 m /14, độ nhạy: -27dB | Thu phóng HD 5 lần Phóng to vào cận cảnh vật thể và nội dung trên bảng trắng với độ rõ nét và chi tiết vượt trội",
            product: "Webcam",
            producer: "Logitech",
            model: "Meetup",
            vidcall: "Gọi điện video 4K Ultra HD (lên tới 3840 x 2160 pixel ở tốc độ 30 khung hình/giây với dây USB 3.0 option không đi kèm)",
            microphone: "Phạm vi thu: 2,4 m /8, phạm vi thu với Mic kéo dài: 4,2 m /14, độ nhạy: -27dB",
            PTZ: "Quét ngang/nghiêng bằng động cơ",
            focus: "Thu phóng HD 5 lần Phóng to vào cận cảnh vật thể và nội dung trên bảng trắng với độ rõ nét và chi tiết vượt trội"
        },
        quantily: 32,
        type: "Spare-part"
    },
    {
        id: "45",
        image: "./assets/img/spare_parts/106_LOGITECH H111.png",
        title: "TAI NGHE LOGITECH H111",
        price1: 309000,
        sale_off: 32,
        price: 209000,
        info: {
            desc: "Nhà sản xuất Logitech | Loại sản phẩm: Webcam | Logitech H111 | Màu: Đen | 32 Ohm | Microphone: Có | Jack 3.5mm ( 1 jack đơn ) | 20 Hz - 20 KHz",
            product: "Tai nghe",
            producer: "Logitech",
            model: "Logitech H111",
            standardplug: "Jack 3.5mm ( 1 jack đơn )",
            microphone: "Có",
            impedance: "32 Ohm",
            frequency: "20 Hz - 20 KHz",
            diaphragmsize: "N/a"
        },
        quantily: 28,
        type: "Spare-part"
    },
    {
        id: "46",
        image: "./assets/img/spare_parts/107_LOGITECH HD C310.png",
        title: "WEBCAM LOGITECH HD C310",
        price1: 1109000,
        sale_off: 23,
        price: 849000,
        info: {
            desc: "Nhà sản xuất Logitech | Loại sản phẩm: Webcam | Webcam C310 | Màu: Đen | HD (1280 x 720 pixel) với hệ thống được khuyến nghị | Microphone: Micrô tích hợp có tính năng giảm tiếng ồn | Lên tới 5 megapixel (phần mềm nâng cao)",
            product: "Webcam",
            producer: "Logitech",
            model: "Webcam C310",
            vidcall: "HD (1280 x 720 pixel) với hệ thống được khuyến nghị",
            microphone: "Micrô tích hợp có tính năng giảm tiếng ồn",
            photo: "Lên tới 5 megapixel (phần mềm nâng cao)"
        },
        quantily: 50,
        type: "Spare-part"
    },
    {
        id: "47",
        image: "./assets/img/spare_parts/107_LOGITECH HD C310.png",
        title: "WEBCAM LOGITECH HD C310",
        price1: 1109000,
        sale_off: 23,
        price: 849000,
        info: {
            desc: "Nhà sản xuất Logitech | Loại sản phẩm: Webcam | Webcam C310 | Màu: Đen | HD (1280 x 720 pixel) với hệ thống được khuyến nghị | Microphone: Micrô tích hợp có tính năng giảm tiếng ồn | Lên tới 5 megapixel (phần mềm nâng cao)",
            producer: "Logitech",
            diaphragm: "Thiết kế theo ý muốn, 50mm với nam châm neodymium",
            type: "Đeo đầu, Chụp tai kín",
            frequencyrange: "13Hz-27.000Hz",
            impedance: "HD (1280 x 720 pixel) với hệ thống được khuyến nghị",
            pressurelevel: "98dBSPL/mW ở 1kHz",
            weight: "298g"
        },
        quantily: 19,
        type: "Spare-part"
    },
    {
        id: "48",
        image: "./assets/img/spare_parts/109_AVERMEDIA LIVE GAMER.png",
        title: "THIẾT BỊ THU HÌNH AVERMEDIA LIVE GAMER PORTABLE 2 PLUS - GC513",
        price1: 5659000,
        sale_off: 23,
        price: 4349000,
        info: {
            desc: "Nhà sản xuất AVERMEDIA | Loại sản phẩm: Thiết bị thu hình | Live Gamer Portable 2 PLUS - GC513 | Màu: Đen | HDMI 2.0 / 4 Pole 3.5mm Jack ( Audio input from controller, Mic pass-through)",
            producer: "AVERMEDIA",
            product: "Thiết bị thu hình",
            model: "Live Gamer Portable 2 PLUS - GC513",
            communicate: "USB 2.0 (USB Micro)",
            videoinput: "HDMI 2.0",
            videoOutput: "HDMI 2.0",
            audioInput: "HDMI 2.0 / 4 Pole 3.5mm Jack ( Audio input from controller, Mic pass-through)",
            audioOutput: "HDMI 2.0 / 4 Pole 3.5mm Jack ( Audio pass-through from controller, Mic input)"
        },
        quantily: 17,
        type: "Spare-part"
    },
    {
        id: "49",
        image: "./assets/img/spare_parts/110_GAMING CORSAIR.png",
        title: "TAI NGHE GAMING CORSAIR HS50 PRO STEREO CARBON",
        price1: 1419000,
        sale_off: 8,
        price: 1299000,
        info: {
            desc: "Nhà sản xuất CORSAIR | Loại sản phẩm: Tai nghe | HS50 PRO | Màu: carbon | Headphone: 32k Ohms @ 1 kHzMicrophone: 2.0k Ohms | Headphone:20-20.000 Hz, Microphone: 100-100.000 Hz | Jack 3.5 mm | 20 Hz - 20 KHz",
            producer: "CORSAIR",
            product: "Tai nghe HS50",
            color: "carbon",
            impedance: "Headphone: 32k Ohms @ 1 kHzMicrophone: 2.0k Ohms",
            vidcall: "Headphone:20-20.000 Hz, Microphone: 100-100.000 Hz",
            drivers: "50 mm",
            jacks: "3.5 mm"
        },
        quantily: 22,
        type: "Spare-part"
    },
    {
        id: "50",
        image: "./assets/img/laptop/151_Asus UX363EA-HP532T.png",
        title: "Laptop Asus ZenBook UX363EA-HP532T (i5 1135G7/8GB RAM/512GB SSD/13.3 FHD Cảm ứng/Win10/Cáp/Bút/Túi/Xám)",
        price1: 27999000,
        sale_off: 4,
        price: 26999000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: UX363EA-HP532T | Cpu: Intel Core i5 1135G7 | Ram: 8GB | SSD : 512GB | VGA : Onboard | Màn hình: 13.3 FHD Cảm ứng | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Asus",
            species: "UX363EA-HP532T",
            cpu: "Intel Core i5 1135G7",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 FHD Cảm ứng",
            OS: "Win 10",
            color: "Xám"
        },
        quantily: 13,
        type: "laptop"
    },
    {
        id: "51",
        image: "./assets/img/laptop/152_Asus M3500QC-L1105T.png",
        title: "Laptop Asus VivoBook M3500QC-L1105T (R5 5600H/8GB RAM/512GB SSD/15.6 Oled FHD/RTX3050MaxQ 4GB/Win10/Xanh)",
        price1: 26999000,
        sale_off: 4,
        price: 25999000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: M3500QC-L1105T | Cpu: AMD R5 5600H | Ram: 8GB | SSD : 512GB | VGA : NVIDIA RTX 3050 MaxQ 4GB | Màn hình: 15.6 Oled FHD | Hệ điều hành: Win 10 | Màu: Xanh đen",
            producer: "Asus",
            species: "M3500QC-L1105T",
            cpu: "AMD R5 5600H",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "NVIDIA RTX 3050 MaxQ 4GB",
            computerscreen: "15.6 Oled FHD",
            os: "Win 10",
            color: "Xanh đen"
        },
        quantily: 1,
        type: "laptop"
    },
    {
        id: "52",
        image: "./assets/img/laptop/153_Asus G533QR-HF113T.png",
        title: "Laptop Asus Gaming ROG Strix G533QR-HF113T (Ryzen 9 5900HX/2*8GB RAM/1TB SSD/15.6 FHD 300hz/RTX 3070 8GB/Win10/Balo/Chuột/Đen)",
        price1: 60599000,
        sale_off: 8,
        price: 55999000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: UX363EA-HP532T | Cpu: Intel Core i5 1135G7 | Ram: 8GB | SSD : 512GB | VGA : Onboard | Màn hình: 13.3 FHD Cảm ứng | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Asus",
            species: "UX363EA-HP532T",
            cpu: "Intel Core i5 1135G7",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 FHD Cảm ứng",
            os: "Win 10",
            color: "xám"
        },
        quantily: 9,
        type: "laptop"
    },
    {
        id: "53",
        image: "./assets/img/laptop/154_Acer PH315-54-75YD.png",
        title: "Laptop Acer Gaming Predator Helios 300 PH315-54-75YD (NH.QC2SV.002) (i7 11800H/16GB Ram/512GB SSD/RTX3060 6G/15.6 inch QHD 165Hz/Win 10/Đen) (2021)",
        price1: 39989000,
        sale_off: 2,
        price: 39299000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: Predator Helios 300 PH315-54-75YD (2021) | Cpu: Intel Core i5 1135G7 | Ram: 8GB | SSD : 512GB | VGA : Nvidia RTX3060 6G | Màn hình:  15.6 inch QHD 165Hz | Hệ điều hành: Win 10 | Màu: Đen",
            producer: "Acer",
            species: "Predator Helios 300 PH315-54-75YD (2021)",
            cpu: " Intel Core i7 11800H",
            ram: "16GB",
            diskdrive: "512GB SSD",
            vga: "Nvidia RTX3060 6G",
            computerscreen: " 15.6 inch QHD 165Hz",
            os: "Win 10",
            color: "Đen"
        },
        quantily: 9,
        type: "laptop"
    },
    {
        id: "54",
        image: "./assets/img/laptop/155_Acer AN515-57-720A.png",
        title: "Laptop Acer Gaming Nitro 5 Eagle AN515-57-720A (NH.QEQSV.004) (i7 11800H/8GB Ram/512GB SSD/RTX3050Ti 4G/15.6 inch FHD 144Hz/Win 11 mới nhất/Đen) (2021)",
        price1: 30499000,
        sale_off: 5,
        price: 28999000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: Nitro 5 AN515-57-720A (2021) | Cpu: Intel core i7 11800H | Ram: 8GB | SSD : 512GB | VGA : RTX3050Ti 4G | Màn hình:  15.6 inch FHD 144Hz | Hệ điều hành: Win 11 mới nhất | Màu: Đen",
            producer: "Acer",
            species: "Nitro 5 AN515-57-720A (2021)",
            cpu: "Intel core i7 11800H",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 FHD Cảm ứng",
            os: "Win 10",
            color: "xám"
        },
        quantily: 3,
        type: "laptop"
    },
    {
        id: "55",
        image: "./assets/img/laptop/156_Levono Legion 7 16ACHG6.png",
        title: "Laptop Lenovo Legion 7 16ACHG6 (82N60039VN) (R9 5900HX/32GB RAM/1TB SSD/16 QWXGA 165hz/RTX3080 16G/Win 10/Xám)",
        price1: 80799000,
        sale_off: 2,
        price: 79499000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: Legion 7 16ACHG6 | Cpu: R9 5900HX | Ram: 32GB | SSD : 1TB | VGA : RTX3080 16G | Màn hình:  15.6 inch FHD 144Hz | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Lenovo",
            species: "UX363EA-HP532T",
            cpu: "Intel Core i5 1135G7",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "NVIDIA RTX3050Ti 4G",
            computerscreen: "16 inch QWXGA 165hz",
            os: "Windown 10",
            color: "Xám"
        },
        quantily: 1,
        type: "laptop"
    },
    {
        id: "56",
        image: "./assets/img/laptop/157_Asus FX506HCB-HN139T.png",
        title: "Laptop Asus Gaming TUF FX506HCB-HN139T (i5 11400H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win10/Xám)",
        price1: 25990000,
        sale_off: 2,
        price: 25499000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: Legion 7 16ACHG6 | Cpu: Intel i5 11400H | Ram: 8GB | SSD : 512TB | VGA : NVIDIA RTX 3050 4GB | Màn hình:  15.6 inch FHD 144Hz | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Asus",
            species: "UX363EA-HP532T",
            cpu: "AMD R9 5900HX",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "NVIDIA RTX 3050 4GB",
            computerscreen: "15.6 FHD 144hz",
            os: "Windown 10",
            color: "Xám"
        },
        quantily: 14,
        type: "laptop"
    },
    {
        id: "57",
        image: "./assets/img/laptop/158_Acer PT315-53-71DJ.png",
        title: "Laptop Acer Gaming Predator Triton 300 (PT315-53-71DJ) (NH.QDSSV.001) (i7 11800H/16GB RAM/512GB SSD/RTX 3070 8G/15.6 inch QHD 165Hz/Win10/Đen) (2021)",
        price1: 50499000,
        sale_off: 4,
        price: 49999000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: Legion 7 16ACHG6 | Cpu: Intel i5 11400H | Ram: 8GB | SSD : 512TB | VGA : NVIDIA RTX 3050 4GB | Màn hình:  15.6 inch FHD 144Hz | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Acer",
            species: "Predator Triton 300 PT315-53-71DJ",
            cpu: "Intel core i7 11800H",
            ram: "16GB",
            diskdrive: "512GB SSD",
            vga: "Nvidia RTX 3070 8G",
            computerscreen: "15.6 inch QHD 165Hz",
            os: "Win 10",
            color: "Đen"
        },
        quantily: 17,
        type: "laptop"
    },
    {
        id: "58",
        image: "./assets/img/laptop/159_Macbook-MGN63SA.png",
        title: "Apple Macbook Air 13 (MGN63SA/A) (Apple M1/8GB RAM/256GB SSD/13.3 inch IPS/Mac OS/Xám) (NEW)",
        price1: 27259000,
        sale_off: 5,
        price: 25989000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Air 13_2020 NEW | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Air 13_2020 NEW",
            cpu: "Apple M1",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "Apple M1",
            os: "Win 10",
            color: "Xám"
        },
        quantily: 17,
        type: "laptop"
    },
    {
        id: "59",
        image: "./assets/img/laptop/160_Macbook MYD82SA.png",
        title: "APPLE MACBOOK PRO 13 TOUCHBAR (MYD82SA/A) (APPLE M1/8GB RAM/256GB SSD/13.3",
        price1: 35339000,
        sale_off: 7,
        price: 32989000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Air 13_2020 NEW | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Pro 13_2020 NEW",
            cpu: "Apple M1",
            ram: "8GB",
            diskdrive: "256GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch Retina IPS",
            os: "Mac OS",
            color: "Xám"
        },
        quantily: 14,
        type: "laptop"
    },
    {
        id: "60",
        image: "./assets/img/laptop/161_Macbook Z127000DE.png",
        title: "Apple Macbook Air 13 (Z127000DE) (Apple M1/16GB RAM/256GB SSD/13.3 inch IPS/Mac OS/Bạc)",
        price1: 34329000,
        sale_off: 5,
        price: 31509000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Air 13_2020 NEW | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Air 13-2020 NEW",
            cpu: "Apple M1",
            ram: "16GB",
            diskdrive: "256GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch Retina IPS",
            os: "Mac OS",
            color: "Xám"
        },
        quantily: 13,
        type: "laptop"
    },
    {
        id: "61",
        image: "./assets/img/laptop/162_Macbook Z11D000E5.png",
        title: "Apple Macbook Pro 13 Touchbar (Z11D000E5) (Apple M1/16GB RAM/256GB SSD/13.3 inch IPS/Mac OS/Bạc)",
        price1: 42409000,
        sale_off: 3,
        price: 39989000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Air 13_2020 NEW | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Air 13_2020 NEWUX363EA-HP532T",
            cpu: "Apple M1Intel Core i5 1135G7",
            ram: "16GB",
            diskdrive: "256GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch Retina IPS",
            os: "Mac OS",
            color: "Bạc"
        },
        quantily: 3,
        type: "laptop"
    },
    {
        id: "62",
        image: "./assets/img/laptop/163_Mabook Z11C000CH.png",
        title: "Apple Macbook Pro 13 Touchbar (Z11C000CH) (Apple M1/16GB RAM/512GB SSD/13.3 inch IPS/Mac OS/Xám)",
        price1: 47459000,
        sale_off: 3,
        price: 44429000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Air 13_2020 NEW | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Pro 13",
            cpu: "Apple M1",
            ram: "8GB",
            diskdrive: "256GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch Retina IPS",
            os: "Mac OS",
            color: "Xám"
        },
        quantily: 8,
        type: "laptop"
    },
    {
        id: "63",
        image: "./assets/img/laptop/164_Macbook MWP52.png",
        title: "Apple Macbook Pro 13 Touchbar (MWP52) (i5 2.0Ghz/16GB RAM/1TB SSD/13.3inch IPS/Mac OS/Xám) (2020)",
        price1: 55539000,
        sale_off: 2,
        price: 54529000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Pro 13 | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Pro 13",
            cpu: "Apple M1",
            ram: "16GB",
            diskdrive: "1T SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch FHD",
            os: "Mac OS",
            color: "Xám"
        },
        quantily: 16,
        type: "laptop"
    },
    {
        id: "64",
        image: "./assets/img/laptop/165_Macbook MWP82.png",
        title: "Apple Macbook Pro 13 Touchbar (MWP82) (i5 2.0Ghz/16GB RAM/1TB SSD/13.3inch IPS/Mac OS/Bạc) (2020)",
        price1: 55539000,
        sale_off: 3,
        price: 54529000,
        info: {

            producer: "Apple",
            species: "Macbook Pro 13 - 2020",
            cpu: " Intel Core i5 2.0Ghz",
            ram: "16GB",
            diskdrive: "1T SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch FHD",
            os: "Mac OS",
            color: "Bạc"
        },
        quantily: 4,
        type: "laptop"
    },
    {
        id: "65",
        image: "./assets/img/laptop/166_Macbook MGN73SA.png",
        title: "Apple Macbook Air 13 (MGN73SA/A) (Apple M1/8GB RAM/512GB SSD/13.3 inch IPS/Mac OS/Xám) (NEW)",
        price1: 34329000,
        sale_off: 3,
        price: 32309000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Pro 13 | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Air 13_2020 NEW",
            cpu: "Apple M1",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch Retina IPS",
            os: "Mac OS",
            color: "Bạc"
        },
        quantily: 11,
        type: "laptop"
    },
    {
        id: "66",
        image: "./assets/img/laptop/167_Macbook MGNA3SA.png",
        title: "Apple Macbook Air 13 (MGNA3SA/A) (Apple M1/8GB RAM/512GB SSD/13.3 inch IPS/Mac OS/Bạc) (NEW)",
        price1: 34329000,
        sale_off: 3,
        price: 32309000,
        info: {
            desc: "Nhà sản xuất: Appleo | Tên: Macbook Pro 13 | Cpu: Apple M1 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  Apple M1 | Hệ điều hành: Win 10 | Màu: Xám",
            producer: "Apple",
            species: "Macbook Air 13_2020 NEW",
            cpu: "Apple M1",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch Retina IPS",
            os: "Mac OS",
            color: "Bạc"
        },
        quantily: 20,
        type: "laptop"
    },
    {
        id: "67",
        image: "./assets/img/laptop/168_Lenovo 14ITL05-82A3002QVN.png",
        title: "Laptop Lenovo Yoga Slim 7 14ITL05 (82A3002QVN) (i5 1135G7/8GB RAM/512GB SSD/14 FHD/Win/Xanh rêu)",
        price1: 23739000,
        sale_off: 3,
        price: 22999000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: Yoga Slim 7 14ITL05 | Cpu: Intel Core i5 1135G7 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Lenovo",
            species: "Yoga Slim 7 14ITL05",
            cpu: "Intel Core i5 1135G7",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "14 inch FHD",
            os: "Win 10",
            color: "Xanh rêu"
        },
        quantily: 14,
        type: "laptop"
    },
    {
        id: "68",
        image: "./assets/img/laptop/169_Lenovo 14ITL05-82A3004FVN.png",
        title: "Laptop Lenovo Yoga Slim 7 14ITL05 (82A3004FVN) (i7 1165G7/8GB RAM/512GB SSD/14 FHD/Win/Xanh rêu)",
        price1: 26999000,
        sale_off: 2,
        price: 26499000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: Yoga Slim 7 14ITL05 | Cpu: Intel Core i5 1135G7 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Lenovo",
            species: "Yoga Slim 7 14ITL05",
            cpu: "Intel Core i7 1165G7",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "14 inch FHD",
            os: "Win 10",
            color: "Xám"
        },
        quantily: 1,
        type: "laptop"
    },
    {
        id: "69",
        image: "./assets/img/laptop/170_Lenovo Gen2-ITL.png",
        title: "Laptop Lenovo ThinkBook 13s Gen2-ITL (20V9002GVN) (i7 1165G7/8GB RAM/512GB SSD/13.3 FHD/Win/Xám)",
        price1: 26499000,
        sale_off: 2,
        price: 25999000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: Thinkbook 13s Gen 2 | Cpu: Intel Core i7 1165G7 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Lenovo",
            species: "Thinkbook 13s Gen 2",
            cpu: "Intel Core i7 1165G7",
            ram: "8GB",
            diskdrive: "512GB SSD",
            vga: "Onboard",
            computerscreen: "13.3 inch FHD",
            os: "Win 10",
            color: "xám"
        },
        quantily: 12,
        type: "laptop"
    },
    {
        id: "70",
        image: "./assets/img/PC/201_Lenovo-IdeaCentre-510-15ICB.png",
        title: "PC Lenovo IdeaCentre 510-15ICB (i3 8100/4GB RAM/1TB ",
        price1: 9699000,
        sale_off: 12,
        price: 8499000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: Thinkbook 13s Gen 2 | Cpu: Intel Core i7 1165G7 | Ram: 8GB | SSD : 512TB | VGA : Onboard | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Lenovo",
            generic: "IdeaCenter 510-15ICB",
            cpu: "Core i3-8100",
            chipset: "Intel B360",
            ram: "4GB DDR4 (2 slot)",
            vga: "VGA onboard, Intel HD Graphics",
            diskdrive: "1TB HDD"
        },
        quantily: 7,
        type: "PC"
    },
    {
        id: "71",
        image: "./assets/img/PC/202_ DELL-VOSTRO-3681 SFF.png",
        title: "PC DELL VOSTRO 3681 SFF (I5-10400/4GB RAM/1TB HDD/WL+BT/K+M/WIN 10)",
        price1: 12629000,
        sale_off: 12,
        price: 12189000,
        info: {
            desc: "Nhà sản xuất: Dell | Tên: Vostro 3681 | Cpu: Core i5-10400 | Ram: 4GB DDR4 2666Mhz | HDD : 1TB | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Dell",
            generic: "Vostro 3681",
            cpu: "Core i5-10400",
            chipset: "Intel® B460",
            ram: "4GB DDR4 2666Mhz)",
            vga: "VGA onboard, Intel HD Graphics",
            diskdrive: "1TB HDD"
        },
        quantily: 9,
        type: "PC"
    },
    {
        id: "72",
        image: "./assets/img/PC/203_ LENOVO-V50S.png",
        title: "PC LENOVO V50S (I3-10100/4GB RAM/1TB HDD/DVDRW/WL+BT/K+M/NO OS) (11HB004RVA)",
        price1: 8789000,
        sale_off: 3,
        price: 8649000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: V50s 07IMB | Cpu: Core i5-10400 | Ram: 4GB DDR4 2666Mhz | HDD : 1TB | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Lenovo",
            generic: "V50s 07IMB",
            cpu: "Intel® Core™ i3-10100",
            chipset: "Intel B460",
            ram: "4GB DIMM DDR4-2666",
            vga: "Integrated Intel UHD Graphics 630",
            diskdrive: "1TB HDD 7200rpm 3.5"
        },
        quantily: 12,
        type: "PC"
    },
    {
        id: "73",
        image: "./assets/img/PC/204_ DELL-OPTIPLEX-3080-MT.png",
        title: "PC DELL OPTIPLEX 3080 MT (I5-10500/8GB RAM/1TB HDD/DVDRW/K+M/FEDORA)",
        price1: 14199000,
        sale_off: 2,
        price: 13899000,
        info: {
            desc: "Nhà sản xuất: Lenovo | Tên: V50s 07IMB | Cpu: Core i5-10400 | Ram: 4GB DDR4 2666Mhz | HDD : 1TB | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Lenovo",
            generic: "IdeaCenter 510-15ICB",
            cpu: "Core i5-10500",
            chipset: "Intel B360",
            ram: "8GB",
            vga: "VGA onboard, Intel HD Graphics",
            diskdrive: "1TB HDD"
        },
        quantily: 5,
        type: "PC"
    },
    {
        id: "74",
        image: "./assets/img/PC/205_ HP-280-PRO-G5-SFF.png",
        title: "PC HP 280 PRO G5 SFF (I3-10100/4GB RAM/1TB HDD/DVDRW/WL+BT/K+M/WIN",
        price1: 9299000,
        sale_off: 3,
        price: 9099000,
        info: {
            desc: "Nhà sản xuất: HP | Tên: V50s 07IMB | Cpu: Core i5-10400 | Ram: 4GB DDR4 2666Mhz | HDD : 1TB | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "HP",
            generic: "280 Pro G5",
            cpu: "Core i3-10100",
            chipset: "Intel® B460",
            ram: "4GB DDR4 2666Mhz",
            vga: "Intel® UHD Graphics 630",
            diskdrive: "1TB HDD"
        },
        quantily: 11,
        type: "PC"
    },
    {
        id: "75",
        image: "./assets/img/PC/206_ HP-PRODESK-400-G7-MT.png",
        title: "PC HP PRODESK 400 G7 MT (I7-10700/8GB RAM/256GB SSD/WL+BT/K+M/WIN 10)",
        price1: 17269000,
        sale_off: 2,
        price: 16849000,
        info: {
            desc: "Nhà sản xuất: HP | Tên: V50s 07IMB | Cpu: Core i5-10400 | Ram: 4GB DDR4 2666Mhz | HDD : 1TB | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "HP",
            generic: "Prodesk 400 G7 MT",
            cpu: "Core i7-10700",
            chipset: "Intel® Q470",
            ram: "8GB DDR4 2666Mhz",
            vga: "Intel® UHD Graphics 630",
            diskdrive: "256GB SSD"
        },
        quantily: 14,
        type: "PC"
    },
    {
        id: "76",
        image: "./assets/img/PC/207_ DELL-OPTIPLEX-3080-SFF.png",
        title: "PC DELL OPTIPLEX 3080 SFF (I3-10100/4GB RAM/1TB HDD/DVDRW/K+M/FEDORA)",
        price1: 9689000,
        sale_off: 1,
        price: 9599000,
        info: {
            desc: "Nhà sản xuất: Dell | Tên: V50s 07IMB | Cpu: Optiplex 3080 | Ram: 4GB DDR4 (2 slot) | HDD : 1TB | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Dell",
            generic: "Optiplex 3080",
            cpu: "Core i3-10100",
            ram: "4GB DDR4 (2 slot)",
            vga: "Onboard",
            diskdrive: "1TB HDD"
        },
        quantily: 13,
        type: "PC"
    },
    {
        id: "77",
        image: "./assets/img/PC/208_ ASUS-ALL-IN-ONE E5402WH.png",
        title: "PC ASUS ALL IN ONE E5402WH (I5-11500B/8GB RAM/512GB SSD/23.8 INCH FULL",
        price1: 22999000,
        sale_off: 1,
        price: 22799000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Asus",
            generic: "E5402WH",
            cpu: "Intel Core i5-11500B",
            ram: "8GB",
            vga: "VGA onboard, Intel HD Graphics",
            diskdrive: "512Gb SSD"
        },
        quantily: 21,
        type: "PC"
    },
    {
        id: "78",
        image: "./assets/img/PC/209_ ASUS-D500SC.png",
        title: "PC ASUS D500SC (I3-10105/4GB RAM/256GB SSD/WL+BT/K+M/NO OS) (D500SC-3101050600)",
        price1: 9999000,
        sale_off: 10,
        price: 8999000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Asus",
            generic: "D500SC",
            cpu: "Core™ i3-10105",
            chipset: "Intel® B560",
            ram: "4GB DDR4 U-DIMM",
            vga: " onboard",
            diskdrive: "256GB M.2 NVMe™ PCIe® 3.0 SSD"
        },
        quantily: 14,
        type: "PC"
    },
    {
        id: "79",
        image: "./assets/img/PC/210_ ASUS-ALL-IN-ONE-V241E.png",
        title: "PC ASUS ALL IN ONE V241E (I3-1115G4/8GB RAM/512GB SSD/23.8 INCH FULL",
        price1: 17979000,
        sale_off: 3,
        price: 17449000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Asus",
            generic: "ALL IN ONE V241E",
            cpu: "Intel Core i3-1115G4",
            ram: "8GB",
            vga: "Onboard",
            diskdrive: "512GB SSD"
        },
        quantily: 1,
        type: "PC"
    },
    {
        id: "80",
        image: "./assets/img/PC/211_ HACOM-BUSINESS-H11.png",
        title: "PC HACOM BUSINESS H11 (3000G/A320/8GB RAM/120GB SSD)",
        price1: 6399000,
        sale_off: 25,
        price: 4799000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "HACOM",
            generic: "BUSINESS H11",
            cpu: "AMD Athlon 3000G",
            chipset: "Radeon ™ Vega 3",
            ram: "8Gb (1x8GB DRR4 Bus 2666Mhz)",
            vga: "Onboard",
            diskdrive: "120GB SSD"
        },
        quantily: 18,
        type: "PC"
    },
    {
        id: "81",
        image: "./assets/img/PC/212_ HP-PRODESK-400-G7-MT.png",
        title: "PC HP PRODESK 400 G7 MT (I7-10700/8GB RAM/512GB SSD/DVDRW/WL+BT/K+M/WIN",
        price1: 18079000,
        sale_off: 2,
        price: 17779000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "HP",
            generic: "Prodesk 400 G7 MT",
            cpu: "Core i7-10700",
            chipset: "Intel® Q470",
            ram: "8GB DDR4 2666Mhz",
            vga: "Intel® UHD Graphics 630",
            diskdrive: "512GB SSD"
        },
        quantily: 13,
        type: "PC"
    },
    {
        id: "82",
        image: "./assets/img/PC/213_ DELL-VOSTRO-3888-MT.png",
        title: "PC DELL VOSTRO 3888 MT (I3-10100/4GB RAM/1TB HDD/WL+BT/K+M/WIN 10)",
        price1: 9999000,
        sale_off: 5,
        price: 9489000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "DELL",
            generic: "IdeaCenter 510-15ICB",
            cpu: "Core i3-10100",
            chipset: "Intel® B460",
            ram: "4GB",
            vga: "Onboard",
            diskdrive: "1TB HDD"
        },
        quantily: 17,
        type: "PC"
    },
    {
        id: "83",
        image: "./assets/img/PC/214_ DELL-VOSTRO-7.3888 MT.png",
        title: "PC DELL VOSTRO 3888 MT (I5-10400/4GB RAM/1TB HDD/WL+BT/K+M/WIN10)",
        price1: 12579000,
        sale_off: 6,
        price: 11869000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "DELL",
            generic: "Vostro 3888",
            cpu: "Core i5-10400",
            chipset: "Intel *B460",
            ram: "4GB DDR4 2666Mhz",
            vga: "onboard",
            diskdrive: "1TB HDD"
        },
        quantily: 18,
        type: "PC"
    },
    {
        id: "84",
        image: "./assets/img/PC/215_ HP-ALL-IN-ONE-24-DF0039D.png",
        title: "PC HP ALL IN ONE 24-DF0039D (I3-10100T/4GB RAM/512GB SSD/23.8 INCH",
        price1: 18679000,
        sale_off: 7,
        price: 17379000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "HP",
            generic: "All-in-One 24-df0039d",
            cpu: "Intel® Core™ i3-10100T",
            ram: "4 GB DDR4-2666 SDRAM (1 x 4 GB)",
            vga: "Intel® UHD Graphics",
            diskdrive: "512GB SSD"
        },
        quantily: 8,
        type: "PC"
    },
    {
        id: "85",
        image: "./assets/img/PC/216_ DELL-OPTIPLEX-3080-TOWER.png",
        title: "PC DELL OPTIPLEX 3080 TOWER (I3-10100/4GB RAM/1TB HDD/DVDRW/K+M/FEDORA)",
        price1: 10309000,
        sale_off: 10,
        price: 9299000,
        info: {
            producer: "DELL",
            generic: "OPTIPLEX 3080 TOWER",
            cpu: "Core i3-10100",
            chipset: "Intel B360",
            ram: "4GB",
            vga: "onboard",
            diskdrive: "1TB HDD"
        },
        quantily: 18,
        type: "PC"
    },
    {
        id: "86",
        image: "./assets/img/PC/217_ HP-PAVILION-TP01-1002D.png",
        title: "PC HP PAVILION TP01-1002D (I3-10105/4GB RAM/1TB HDD/DVDRW/WL+BT/K+M/WIN",
        price1: 10309000,
        sale_off: 10,
        price: 9299000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "HP",
            generic: "Pavilion TP01-1002d",
            cpu: "Core i3-10105",
            chipset: "Intel H470",
            ram: "4GB DDR4 2666Mhz",
            vga: "Onboard",
            diskdrive: "1TB HDD"
        },
        quantily: 21,
        type: "PC"
    },
    {
        id: "87",
        image: "./assets/img/PC/218_ ASUS-ALL-IN-ONE-V241E.png",
        title: "PC ASUS ALL IN ONE V241E (I5-1135G7/8GB RAM/512GB SSD/23.8 INCH FULL",
        price1: 8999000,
        sale_off: 18,
        price: 7399000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "Asus",
            generic: "ALL IN ONE V241E",
            cpu: "Intel Core i5-1135G7",
            ram: "8GB",
            vga: "Onboard",
            diskdrive: "512GB SSD"
        },
        quantily: 24,
        type: "PC"
    },
    {
        id: "88",
        image: "./assets/img/PC/219_ HACOM-BUSINESS-P15.png",
        title: "PC HACOM BUSINESS P15 (I3 10105/H510/8GB RAM/120GB SSD)",
        price1: 8999000,
        sale_off: 18,
        price: 7399000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "HACOM",
            generic: "HACOM BUSINESS P15",
            cpu: "Intel Core i3-10105",
            ram: "8Gb (1x8GB DRR4 Bus 2666Mhz)",
            vga: "onboard",
            diskdrive: "120Gb SSD"
        },
        quantily: 11,
        type: "PC"
    },
    {
        id: "89",
        image: "./assets/img/PC/220_ DELL-VOSTRO-3681-ST.png",
        title: "PC DELL VOSTRO 3681 ST (I7-10700/8GB RAM/512GB SSD/DVDRW/WL+BT/K+M/WIN10)",
        price1: 19649000,
        sale_off: 6,
        price: 18499000,
        info: {
            desc: "Nhà sản xuất: Asus | Tên: E5402WH | Cpu: Intel Core i5-11500B | Ram: 4GB DDR4 (2 slot) | 512Gb SSD | VGA : VGA onboard, Intel HD Graphics | Màn hình:  14 inch FHD | Hệ điều hành: Win 10 | Màu: Xanh rêu",
            producer: "DELL",
            generic: " Vostro 3681",
            cpu: " Core i7-10700",
            chipset: "Intel® B460",
            ram: "8GB DDR4 2666Mhz",
            vga: "onboard",
            diskdrive: "512GB SSD"
        },
        quantily: 2,
        type: "PC"
    },
]

let userList = [
    {
        email: "quocvi1701@gamil.com",
        fullname: "Ha Quoc Vi",
        password: "123456",
        phoneNumber: "0327148900",
        role: "user",
        username: "user1",
        stat: "enable"
    },
    {
        email: "quocvi17@gamil.com",
        fullname: "Ha Quoc Vi",
        password: "123456",
        phoneNumber: "0327148900",
        role: "adminServer",
        username: "adminServer1",
        stat: "enable"

    },
    {
        email: "quocvi17@gamil.com",
        fullname: "Ha Quoc Vi",
        password: "123456",
        phoneNumber: "0327148900",
        role: "adminSeller",
        username: "adminSeller1",
        stat: "enable"
    }
]

let cartList = [
    {
        address: "asdasdas",
        cartItems: [
            {
                id: "2",
                image: "./assets/img/screen/3_MSI_G271.jpeg",
                info: {
                    desc: "Nhà sản xuất MSI | Tên sản phẩm : G271 | Phân khúc Gaming | Kích thước 27 inch (69 cm) | Độ phân giải 1920 x 1080 (FHD) | Tần số quét 144Hz | Tấm nền  IPS | Màu sắc : Dark",
                    producer: "MSI"
                },
                price: 6819000,
                price1: 7399000,
                quantity: 1,
                sale_off: 8,
                title: "Màn hình MSI Optix G271 (27inch/FHD/IPS/144Hz/1ms/250nits/HDMI+DP/FreeSync)",
                type: "Monitor"
            }
        ],
        date: "15/4/2022",
        id: "8b7f",
        paymentMethod: "online-banking",
        total: 6819000,
        user: { 
            email: "quocvi1701@gamil.com",
            fullname: "Ha Quoc Vi",
            password: "123456",
            phoneNumber: "0327148900",
            role: "user",
            stat: "enable",
            username: "user1"
        },
        stat: 0
    }
]

let invoiceList = [
    {
        id: "8b7f",
        date: "17/6/2022",
        quantity: 3,
        total: 30000000,
        userName: "user0"
    },
    {
        id: "8b7f",
        date: "17/4/2022",
        quantity: 3,
        total: 30000000,
        userName: "user0"
    },
]

let detailInvoiceList = [
    {
        idInvoice: "8b7f",
        idProduct: "70",
        quantity: 1,
        price: 10000000
    },
    {
        idInvoice: "8b7f",
        idProduct: "69",
        quantity: 1,
        price: 10000000
    },
    {
        idInvoice: "8b7f",
        idProduct: "71",
        quantity: 1,
        price: 10000000
    }
]

// ================================ Utilities Function ===========================================

function formatPrice(price) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return formatter.format(price);
}

function getProduct() {
    let productList = JSON.parse(localStorage.getItem("products"));
    return productList ? productList : [];
}

function generateProduct() {
    localStorage.setItem("products", JSON.stringify(generateProducts));
}

function generateUser() {
    localStorage.setItem('userList', JSON.stringify(userList));
}

function generateUniqueId() {
    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    let cartList = JSON.parse(localStorage.getItem('cartList'));
    for (let i = 0; i < cartList.length; i++) {
        while (cartList[i].id == id) {
            id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            i = 0;
        }
    }
    return id;
}

function generateCartList() {
    localStorage.setItem("cartList", JSON.stringify(cartList));
}

function generateInvoiceList() {
    localStorage.setItem("invoiceList", JSON.stringify(invoiceList));
}

function generateDetailInvoiceList() {
    localStorage.setItem("detailInvoiceList", JSON.stringify(detailInvoiceList));
}