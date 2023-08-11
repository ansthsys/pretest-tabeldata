"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Sony Xperia 10 V 5G 8/128GB Snapdragon 695 - Black",
          price: 9500000,
          stock: 25,
          description:
            "Sony Xperia 10 V 5G 8/128GB Snapdragon 695\n\n- Harga yang tertera sudah include pajak masuk resmi & proses registrasi IMEI\n- Bisa dipakai dengan semua SIM card Indonesia (Telkomsel/Indosat/XL/Tri/Smartfren)\n- Copy faktur pajak akan disertakan di setiap pembelian untuk pegangan/jaminan 100% aman dari blokir IMEI\n- Dijamin 100% aman dari blokir IMEI sebab produk ini sudah berhasil didaftarkan di Kemenkominfo & bisa dicek melalui website resmi Bea Cukai sesuai di gambar lapak\n\nAvailable Colors :\n- Black\n- White\n- Lavender\n- Sage Green\n\nGaransi Internasional 1 Tahun",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nothing Phone (2) 5G 128GB 256GB 512GB Snapdragon 8+ Gen 1 - 8/128GB, White",
          price: 13500000,
          stock: 15,
          description:
            "Nothing Phone (2) 5G 128GB 256GB 512GB Snapdragon 8+ Gen 1\n\n- Harga yang tertera sudah include pajak masuk resmi & proses registrasi IMEI\n- Bisa dipakai dengan semua SIM card Indonesia (Telkomsel/Indosat/XL/Tri/Smartfren)\n- Copy faktur pajak akan disertakan di setiap pembelian untuk pegangan/jaminan 100% aman dari blokir IMEI\n- Dijamin 100% aman dari blokir IMEI sebab produk ini sudah berhasil didaftarkan di Kemenkominfo & bisa dicek melalui website resmi Bea Cukai sesuai di gambar lapak\n\nAvailable Colors :\n- White\n- Dark Gray",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple MacBook Air M2 Chip 2023 15 inch 256GB 512GB Garansi Resmi iBox - 256GB Inter, Space Grey",
          price: 19800000,
          stock: 20,
          description:
            "M2 Chip\n8-Core CPU\n10-Core GPU\n8GB Unified Memory\n256GB SSD Storage or 512GB SSD Storage\n16-core Neural Engine\n15.3-inch Liquid Retina display with True Tone\n1080p FaceTime HD camera\nMagSafe 3 charging port\nTwo Thunderbolt / USB 4 ports\nMagic Keyboard with Touch ID\nForce Touch trackpad\n35W Dual USB-C Port Compact Power Adapter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "OnePlus 11 5G 128GB 256GB 512GB Global ROM Snapdragon 8 Gen 2 - 8/128GB, Titan Black",
          price: 13500000,
          stock: 20,
          description:
            "OnePlus 11 5G 128GB 256GB 512GB Global ROM Snapdragon 8 Gen 2\n\n- Titan Black\n- Eternal Green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPad Pro 2022 12.9 inch M2 Chip 128GB 256GB 512GB 1TB 2TB Garansi iBox - Inter Wifi, 128GB Silver",
          price: 15500000,
          stock: 7,
          description:
            "Liquid Retina XDR display\n12.9-inch (diagonal) mini-LED backlit Multi‑Touch display with IPS technology\n2D backlighting system with 2596 full‑array local dimming zones\n2732-by-2048-pixel resolution at 264 pixels per inch (ppi)\nProMotion technology\nWide color display (P3)\nTrue Tone display\nFingerprint-resistant oleophobic coating\nFully laminated display\nAntireflective coating\n1.8% reflectivity\nSDR brightness: 600 nits max\nXDR brightness: 1000 nits max full screen, 1600 nits peak (HDR content only)\n1,000,000:1 contrast ratio\nSupports Apple Pencil (2nd generation)\nApple Pencil hover",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPhone 14 Pro 128GB 256GB 512GB 1TB Dual Nano SIM - 128GB, Space Black",
          price: 21500000,
          stock: 33,
          description:
            "Dynamic Island\nAlways-On display\nProMotion technology with adaptive refresh rates up to 120Hz\nHDR display\nTrue Tone\nWide color (P3)\nHaptic Touch\n2,000,000:1 contrast ratio (typical)\n1000 nits max brightness (typical); 1600 nits peak brightness (HDR); 2000 nits peak brightness (outdoor)\nFingerprint-resistant oleophobic coating\nSupport for display of multiple languages and characters simultaneously\n\nA16 Bionic chip\n6‑core CPU with 2 performance and 4 efficiency cores\n5‑core GPU\n16‑core Neural Engine\n\nIn the Box :\niPhone with iOS 16\nUSB‑C to Lightning Cable\nDocumentation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPhone 14 Pro Max 128GB 256GB 512GB 1TB Dual Nano SIM - 128GB, Space Black",
          price: 23500000,
          stock: 24,
          description:
            "Dynamic Island\nAlways-On display\nProMotion technology with adaptive refresh rates up to 120Hz\nHDR display\nTrue Tone\nWide color (P3)\nHaptic Touch\n2,000,000:1 contrast ratio (typical)\n1000 nits max brightness (typical); 1600 nits peak brightness (HDR); 2000 nits peak brightness (outdoor)\nFingerprint-resistant oleophobic coating\nSupport for display of multiple languages and characters simultaneously\n\nA16 Bionic chip\n6‑core CPU with 2 performance and 4 efficiency cores\n5‑core GPU\n16‑core Neural Engine\n\nIn the Box :\niPhone with iOS 16\nUSB‑C to Lightning Cable\nDocumentation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MacBook Pro M2 Chip 2022 13 inch 8GB / 256GB Garansi Resmi iBox - CPO, Space Grey",
          price: 17500000,
          stock: 9,
          description:
            "M2 Chip\n8-Core CPU\n10-Core GPU\nRAM 8GB Unified Memory\n256GB SSD Storage\n\n16-core Neural Engine\n13-inch Retina display with True Tone\nTwo Thunderbolt / USB 4 ports\nMagic Keyboard\nTouch Bar and Touch ID\nForce Touch trackpad\n\nIn The Box :\n13-inch MacBook Pro\nUSB-C Charge Cable (2 m)\n67W USB-C Power Adapter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple Watch Ultra 2022 49mm Titanium Alpine Trail Loop Ocean Band iBox - Ocean Band, Yellow",
          price: 12500000,
          stock: 9,
          description:
            "Apple Watch Ultra 2022 49mm Titanium Alpine Trail Loop Ocean Band iBox",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple AirPods Pro 2 2022 with MagSafe Charging Case Garansi Resmi iBox - Inter",
          price: 3300000,
          stock: 43,
          description:
            "Apple AirPods Pro 2 2022 with MagSafe Charging Case Garansi Resmi iBox",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
