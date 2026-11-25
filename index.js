const products = [
  {id:1,name:"Dove_Bodyscrub",category:"Personal Care",price:350,image:"https://assets.unileversolutions.com/v1/130029549.png",keywords:"Dove body scrub Red"},
  {id:2,name:"Bench_DailyScent",category:"Personal Care",price:75,image:"https://i.pinimg.com/736x/fd/dc/07/fddc07420a4ca412a74c8105509a5eee.jpg",keywords:"Bench_DailyScent"},
  {id:3,name:"Betadine_Fresh Bliss Feminine Wash",category:"Personal Care",price:180,image:"https://shopsuki.ph/cdn/shop/files/106043560_800x.jpg?v=1682563138",keywords:"Betadine_Fresh Bliss Feminine Wash:"},
  {id:4,name:"Celeteque_DermoScience+ Hydration",category:"Personal Care",price:240,image:"https://theskincarelibrary.com/cdn/shop/files/Celeteque_Dermoscience_Hydration_Facial_Moisturizer_100ml_800x.png?v=1742397847",keywords:"Celeteque_DermoScience+ Hydration"},
  {id:5,name:"Charm_Napkin",category:"Personal Care",price:40,image:"https://down-id.img.susercontent.com/file/8bf51503ef7aa2be84e3fc6ae69fa861",keywords:"Charm_Napkin"},
  {id:6,name:"Creamsilk_Green",category:"Personal Care",price:80,image:"https://www.dmc.com.ph/web/image/product.template/234/image_1024?unique=838d2a6",keywords:"Creamsilk_Green"},
  {id:7,name:"Creamsilk_Pink",category:"Personal Care",price:80,image:"https://thecruisestoponline.com/cdn/shop/files/CreamSilkStandoutStraightTriOleoConditioner180ml-Front_1400x.png?v=1701034677",keywords:"Creamsilk_Pink"},
  {id:8,name:"Dove_Body WashLavender OilChamomile",category:"Personal Care",price:850,image:"https://i5.walmartimages.com/seo/Dove-Relaxing-Long-Lasting-Gentle-Women-s-Body-Wash-Lavender-Oil-and-Chamomile-30-6-fl-oz_0fba939f-28df-4c03-b771-8bf4e62d09c8.9e3c8d551a1919f2073887212bebb4be.jpeg?odnHeight=372&odnWidth=372&odnBg=FFFFFF",keywords:"Dove_Body WashLavender OilChamomile"},
  {id:9,name:"Dove_Bond Strength Shampoo and Conditioner",category:"Personal Care",price:350,image:"https://i5.walmartimages.com/seo/Dove-Shampoo-Bond-Strength-with-Bio-Protein-Care-Technology-Peptide-Complex-12-oz_12f77c1f-b473-4e67-8a64-99cf78d5a182.3f3530a10c6410bcb7c863e4ce45d838.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF",keywords:"Dove_Bond Strength Shampoo and Conditioner"},
  {id:10,name:"Dove_Moisturising HandWash",category:"Personal Care",price:250,image:"https://i5.walmartimages.com/seo/Dove-Body-Wash-for-Women-Nourishing-Deep-Moisture-Cleanser-All-Skin-30-6-oz-with-Pump_9e50b91a-0e27-4c3d-b1c5-cbb8c121aaa5_1.0ca33eea3c814e3cc4305cf3399b64e0.jpeg",keywords:"Dove_Moisturising HandWash"},
  {id:11,name:"Dove_UltraCare Intensive Repair Shampoo",category:"Personal Care", price:220,image:"https://content.etilize.com/1000/1086389759.jpg",keywords:"Dove_UltraCare Intensive Repair Shampoo"},
  {id:12,name:"Downy_Mystique",category:"Household-cleaning-materials",price:200,image:"https://down-sg.img.susercontent.com/file/sg-11134207-7r9aj-ln8dbkz2sk6t6d",keywords:"Downy_Mystique"},
  {id:13,name:"Garnier_Micellar Cleansing Wipes",category:"Personal Care",price:110,image:"https://i.pinimg.com/736x/9c/7b/16/9c7b166a0fc75cd6a4bcf87c18028e88.jpg",keywords:"Garnier_Micellar Cleansing Wipes"},
  {id:14,name:"Glad2Glow_Exfoliating Toner",category:"Personal Care",price:140,image:"https://ingredio.id/wp-content/uploads/2024/10/Glad2Glow-Blackberry-AHA-BHA-PHA-Daily-Exfoliating-Toner.jpeg",keywords:"Glad2Glow_Exfoliating Toner"},
  {id:15,name:"Glad2Glow_GentleCleanser",category:"Personal Care",price:195,image:"https://o2o-static.lotuss.com/products/86368/75710853.jpg",keywords:"Glad2Glow_GentleCleanser"},
  {id:16,name:"Listerine",category:"Personal Care",price:288,image:"https://shaheenchemistrwp.com/cdn/shop/files/Listerine_Cool_Mint_Mouthwash.webp?v=1765644125&width=3840",keywords:"Listerine"},
  {id:17,name:"Silka_Lotion",category:"Personal Care",price:193,image:"https://cf.shopee.ph/file/a57928ecbbf4da4d3fafe315106d96f9",keywords:"Silka_Lotion"},
  {id:18,name:"Modess_Long",category:"Personal Care",price:40,image:"https://medsgo.ph/images/detailed/31/8850007371397-removebg-preview[1].png",keywords:"Modess_Long"},
  {id:19,name:"Vaseline_RosyLip",category:"Personal Care",price:45,image:"https://i.pinimg.com/736x/3f/a3/10/3fa310ae099a1668ba0c8c72a2eead89.jpg",keywords:"Vaseline_RosyLip"},
  {id:20,name:"Safeguard_HandSoap",category:"Personal Care",price:235,image:"https://i5.walmartimages.com/asr/6f7da884-8ec7-44cc-b301-85ad37901ce7.fa22afb952dea652b922df4343c31909.jpeg",keywords:"Safeguard_HandSoap"},
  {id:21,name:"Salonpas",category:"Personal Care",price:124,image:"https://www.schoolhealth.com/media/catalog/product/cache/f1041ad214c45afa3a7abede4d21a693/1/0/1041728_00_w.jpg",keywords:"Salonpas"},
  {id:22,name:"Vaseline",category:"Personal Care",price:50,image:"https://tse4.mm.bing.net/th/id/OIP.g3EKmEf3sT5YX9THzYZOqAHaHa?r=0&w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Vaseline"},
  {id:23,name:"Vaseline_Healthy Bright Gluta-Hya Serum BurstLotion",category:"Personal Care",price:335,image:"https://assets.unileversolutions.com/v1/58782025.png",keywords:"Vaseline_Healthy Bright Gluta-Hya Serum BurstLotion"},
  {id:24,name:"Centella",category:"Personal Care",price:255,image:"https://i5.walmartimages.com/seo/Skin1004-Madagascar-Centella-Ampoule-100ml-3-38oz_69e70865-fc30-4d72-82c0-7b58023d1491.0d2b92eb76e851d7a28259198d43a1e0.jpeg",keywords:"Centella"},
  {id:25,name:"The_Ordinary_Glycolic Acid Toning Solution",category:"Personal Care",price:190,image:"https://metropoliten.rs/upload/catalog/variation/3331/04426_1_66e9746f4580c.jpg",keywords:"The_Ordinary_Glycolic Acid Toning Solution"},
  {id:26,name:"Zonrox ",category:"Household-cleaning-materials",price:50,image:"https://officeworks-dcn.sgp1.digitaloceanspaces.com/2021/10/1L-Zonrox-Bleach-Original.jpg",keywords:"zonrox"},
  {id:28,name:"Zonrox Color Safe",category:"Household-cleaning-materials",price:55,image:"https://assets.landers.ph/catalog/product/1/0/106153-1.jpg",keywords:"zonrox colorsafe"},
  {id:28,name:"Zonrox Lemon",category:"Household-cleaning-materials",price:55,image:"https://store.iloilosupermart.com/wp-content/uploads/2020/05/Home-Care_Zonrox-Bleach-Lemon-1000ml.jpg",keywords:"Zonrox Lemon"},
  {id:30,name:"Trash Bags",category:"Household-cleaning-materials",price:80,image:"https://m.media-amazon.com/images/I/41Se1EjcrkS._AC_.jpg",keywords:"trash bags"},
  {id:31,name:"Scotch Brite Metal Scrubber",category:"Household-cleaning-materials",price:35,image:"https://tse4.mm.bing.net/th/id/OIP.TPVNZ3ntH0TOV588E0qwdwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"scotch brite metal scrubber"},
  {id:32,name:"Lysol Disinfectant Spray",category:"Household-cleaning-materials",price:545,image:"https://storage.googleapis.com/images-prs-prd-c7e7986.prs.prd.v8.commerce.mi9cloud.com/product-images/zoom/00019200793261_1",keywords:"lysol disinfectant spray"},
  {id:33,name:"Glade Air Freshener aqua waves",category:"Household-cleaning-materials",price:335,image:"https://images.heb.com/is/image/HEBGrocery/008662513-10?jpegSize=150&hei=1400&fit=constrain&qlt=75&v=1",keywords:"glade air freshener aqua waves"},
  {id:34,name:"Domestos",category:"Household-cleaning-materials",price:198,image:"https://directjanitorialsolutions.co.uk/wp-content/uploads/2021/03/domestos-tick-bleach-2365x2365-1.jpg",keywords:"dometos"},
  {id:35,name:"Baygon",category:"Household-cleaning-materials",price:150,image:"https://ibitsphil.com/wp-content/uploads/2018/06/award01-500x539-1.jpg",keywords:"baygon"},
  {id:36,name:"Downy Fabric Softener",category:"Household-cleaning-materials",price:365,image:"https://th.bing.com/th/id/R.a7c5d9194004ef3c67c8b0b25f13a78a?rik=PXBOATlWX7R%2btQ&riu=http%3a%2f%2fwww.tigercopper.com%2fwp-content%2fuploads%2f2018%2f03%2fdowny-fabric-softener-sunrise-fresh-bottle-1-8l-768x768.jpg&ehk=QM1o2ChKjZM82Pqnc1Dm5SluYYB2QTRnh1u3Z521TS4%3d&risl=&pid=ImgRaw&r=0",keywords:"downy fabric softener"},
  {id:37,name:"Axion Liquid Detergent",category:"Household-cleaning-materials",price:120,image:"https://aaashoppingcenter.ph/cdn/shop/files/Untitleddesign-2025-05-17T112540.359.png?v=1747452346&width=1946",keywords:"axion liquid detergent"},
  {id:38,name:"Axion Dishwashing Paste ",category:"Household-cleaning-materials",price:70,image:"https://mh.com.fj/wp-content/uploads/2026/06/6103000110.jpg",keywords:"Axion Dishwashing Paste "},
  {id:39,name:"Aluminum Foil Paper",category:"Household-cleaning-materials",price:65,image:"https://image.made-in-china.com/2f0j00DRaYKtLnVJuE/Baking-Tools-Barbecue-Grill-Tin-Foil-Barbecue-Household-Tin-Foil-Oven-Tin-Foil-Aluminum-Foil-Paper-TF1001.jpg",keywords:"Aluminum Foil Paper"},
  {id:40,name:"Bamboo Stick Pack 100pcs",category:"Household-cleaning-materials",price:25,image:"https://5.imimg.com/data5/SELLER/Default/2025/9/542051972/SD/QI/AS/185469414/bamboo-skewers-2-5mm-x-300mm-12-500x500.webp",keywords:"Bamboo Stick Pack 100pcs"},
  {id:41,name:"Body Scrub Brush with Long Handle",category:"Household-cleaning-materials",price:55,image:"https://target.scene7.com/is/image/Target/GUEST_c433236e-2dbf-4053-8b97-c4fa1a3cff88",keywords:"Body Scrub Brush with Long Handle"},
  {id:42,name:"Selecta Coffee Crumble",category:"Ice Creams",price:125,image:"https://tse4.mm.bing.net/th/id/OIP.XBXmiGXvT-vRDSnG8D1U8AHaHa?r=0&w=750&h=750&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"selecta"},
  {id:43,name:"V-cut",category:"Snacks&Biscuits",price:45,image:"https://img06.weeecdn.com/product/image/792/958/19A92C342CC31490.png",keywords:"vcut"},
  {id:44,name:"Kimchi",category:"Korean Foods",price:145,image:"https://www.therootcellarpei.com/cdn/shop/products/6fced69964eaddbd9c69730e7eba2dbd.jpg?v=1738186428&width=1946",keywords:"kimchi"},
  {id:45,name:"Magnum Classic",category:"Ice Creams",price:295,image:"https://assets.unileversolutions.com/v1/124687946.jpg",keywords:"magnum ice cream"},
  {id:46,name:"Lay's Original Flavor",category:"Snacks&Biscuits",price:115,image:"https://images.freshop.ncrcloud.com/1564405684712978043/2157df3d26331a40f1b93816cb45ed2d_large.png",keywords:"Lay's Original Flavor"},
  {id:47,name:"Cornetto Strawberry",category:"Ice Creams",price:35,image:"https://tse3.mm.bing.net/th/id/OIP.mIspMc1oN4BIc08zHPp-UAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"corneto strawberry"},
  {id:48,name:"Melona Mango",category:"Ice Creams",price:35,image:"https://tse3.mm.bing.net/th/id/OIP.iTuTR58wMVzhRnCyCzWvZwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"melona mango"},
  {id:48,name:"Cornetto chocolate vanila",category:"Ice Creams",price:35,image:"https://assets.unileversolutions.com/v1/129485420.png",keywords:"cornetto chocolate vanila"},
  {id:48,name:"Vanilla Bean",category:"Ice Creams",price:185,image:"https://i5.walmartimages.com/seo/Great-Value-Vanilla-Bean-Flavored-Ice-Cream-48-fl-oz_4ed934d9-d42b-4244-80e2-0b69ab20bfe8.95523c24ecd364d8da5fed21bcccabee.jpeg",keywords:" vanilla Bean"},
  {id:49,name:"Samanaco Chocolate",category:"Ice Creams",price:95,image:"https://images.freshop.ncrcloud.com/1564405684690192724/13a768ec58fe7e6f7fcf69196bb30bff_large.png",keywords:"samanaco chocolate"},
  {id:50,name:"Hersheys Chocolate Chip Mousse 400ml",category:"Ice Creams",price:185,image:"https://prod-spinneys-cdn-new.azureedge.net/media/images/products/2025/07/6291053130118.jpg",keywords:" hersheys"},
  {id:51,name:"Magnum White Chocolate",category:"Ice Creams",price:245,image:"https://i.pinimg.com/736x/db/21/04/db2104aefdbae44e265cd980bf55712b.jpg",keywords:"magnum white"},
  {id:52,name:"M&M Light Ice cream chocolate",category:"Ice Creams",price:245,image:"https://tse2.mm.bing.net/th/id/OIP.bAgyEf3ygPQsstxh589CsAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"M&M Light Ice cream chocolate"},
  {id:53,name:"Selecta Cookies&Cream",category:"Ice Creams",price:145,image:"https://assets.unileversolutions.com/v1/124824293.png",keywords:"selecta"},
  {id:54,name:"Cloud9",category:"Snacks&Biscuits",price:75,image:"https://down-ph.img.susercontent.com/file/my-11134207-7rasl-m2qcylfo6aw2fb",keywords:"cloud9"},
  {id:55,name:"Cracklings",category:"Snacks&Biscuits",price:35,image:"https://pinoyhyper.com/cdn/shop/products/oishi-ribbed-cracklings-salt-and-vinegar-90g-big-pinoyhyper.jpg?v=1738861794",keywords:"Cracklings"},
  {id:56,name:"Dingdong mixed nuts",category:"Snacks&Biscuits",price:30,image:"https://tse1.mm.bing.net/th/id/OIP.ooUZ_McjE_ObkZ5vNBRgGQHaHa?r=0&w=580&h=580&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Dingdong mixed nuts"},
  {id:57,name:"Dewberry Starwberry",category:"Snacks&Biscuits",price:65,image:"https://tse3.mm.bing.net/th/id/OIP.R43_l4Yfu2FmXM4QYFmlzAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Dewberry Starwberry"},
  {id:58,name:"Fudgee Bar",category:"Snacks&Biscuits",price:85,image:"https://tse4.mm.bing.net/th/id/OIP.0H8EC8j5UaQ2oLQccZLjFgHaHa?r=0&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Fudgee Bar "},
  {id:59,name:"Chippy",category:"Snacks&Biscuits",price:35,image:"https://tse1.mm.bing.net/th/id/OIP.9Tly6aguxyHYbJFJU7wpYwHaHa?r=0&w=900&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Chippy"},
  {id:60,name:"Jack n jill choco knot",category:"Snacks&Biscuits",price:35,image:"https://tse3.mm.bing.net/th/id/OIP.bUSx2wU5WCQBDmOlFggcxwHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Jack n jill choco knot"},
  {id:61,name:"kinder joy",category:"Snacks&Biscuits",price:445,image:"https://tse4.mm.bing.net/th/id/OIP.4whvow5DYCmCrAUcvmCgtQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"kinder joy"},
  {id:62,name:"lemon square",category:"Snacks&Biscuits",price:78,image:"https://tindahannimangpilousa.com/cdn/shop/files/IMG_8741.jpg?v=1749709868",keywords:"lemon square"},
  {id:63,name:"lotus Biscoff",category:"Snacks&Biscuits",price:178,image:"https://chocolatebarbv.com/wp-content/uploads/2023/04/Lotus-Biscoff-Chocolate-154g.jpeg",keywords:"lotus Biscoff"},
  {id:64,name:"Piatos",category:"Snacks&Biscuits",price:45,image:"https://i.pinimg.com/736x/6e/95/26/6e9526f03e188950595aa9bbab632fa8.jpg",keywords:"Piatos"},
  {id:65,name:"oishi pillow chocolate",category:"Snacks&Biscuits",price:125,image:"https://almerepinoystore.com/wp-content/uploads/2023/08/oishi-pillows-choco-filled-crackers.png",keywords:"oishi pillow chocolate"},
  {id:66,name:"oishi pillow ube",category:"Snacks&Biscuits",price:126,image:"https://tse4.mm.bing.net/th/id/OIP.bPtbTP-BqEQIZnwagf-noQHaHa?r=0&w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"oishi pillow ube"},
  {id:67,name:"Yopokki",category:"Korean Foods",price:150,image:"https://tse4.mm.bing.net/th/id/OIP.hK_ThZ2ur-_Gb3r9rOA73wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Yopokki"},
  {id:68,name:"Samyang Buldak",category:"Korean Foods",price:85,image:"https://sweetzania.co.za/wp-content/uploads/2023/06/Samyang-Buldak-Noodles-2x-Spicy-Hot-Chicken.jpg",keywords:"samyang buldak"},
  {id:69,name:"Lotte Kkokkal Corn in Shrimp & Mayonnaise",category:"Korean Foods",price:75,image:"https://i5.walmartimages.com/asr/51dafd87-058c-4c3f-863f-fe2c2ddb3b2f.db1f32c135eca46b27947b69cef290b6.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",keywords:"Lotte Kkokkal Corn in Shrimp & Mayonnaise"},
  {id:70,name:"Saeu-jeot",category:"Korean Foods",price:135,image:"https://shop.safg.us/items-img/InventoryPhotos/SKU10965_1.jpg?resizeid=5&resizeh=500&resizew=500",keywords:"Saeu-jeot"},
  {id:71,name:"Roasted Black Bean Paste",category:"Korean Foods",price:140,image:"https://www.instacart.com/image-server/1200x1200/www.instacart.com/assets/domains/product-image/file/large_1dd2f593-23f1-4a59-8657-1ab388455557.jpg",keywords:"Roasted Black Bean Paste"},
  {id:72,name:"Rice Cake",category:"Korean Foods",price:145,image:"https://www.oceanicsupermarket.com/wp-content/uploads/2024/05/Keats-Rice-Cake-Stick-500g-1.jpg",keywords:"Rice Cake "},
  {id:73,name:"Orion Oh! Gamja (오!감자) Potato Gratin Flavor",category:"Korean Foods",price:95,image:"https://cf.shopee.ph/file/sg-11134201-22120-tlx3jggh04kv47_tn",keywords:"Orion Oh! Gamja (오!감자) Potato Gratin Flavor"},
  {id:74,name:"O'Food Mild Ssamjang Seasoned Soybean Paste",category:"Korean Foods",price:230,image:"https://i5.walmartimages.com/seo/Chung-Jung-One-O-Food-Ssamjang-Korean-Mild-Seasoned-Soybean-Paste-Sauce-Perfect-Rice-Noodles-Fresh-Vegetables-Meat-Savory-Flavorful-1-1lb_3fafbce6-d8bb-4b33-860c-411d3f9e4766.493525d6eb53afa590421cf956ab964c.jpeg",keywords:"O'Food Mild Ssamjang Seasoned Soybean Paste"},
  {id:75,name:"Gochujang",category:"Korean Foods",price:225,image:"https://shopapi.jfc.com/KoscusApi/Images/Items/JFCItems/item64642.jpg",keywords:"Gochujang"},
  {id:76,name:"French Fries Original 175g",category:"Frozen Goods",price:189,image:"https://mysweeties.com.au/cdn/shop/products/Untitleddesign_23_b70b6def-ca13-49f6-ab98-0591bbe8700f_1000x1000.png?v=1603237190",keywords:"French Fries"},
  {id:77,name:"Veega Meat Free Nuggets 7g",category:"Frozen Goods",price:220,image:"https://zbga.shopsuki.ph/cdn/shop/files/4808887942200_1_1024x.jpg?v=1707974334",keywords:"Veega Meat Free Nuggets"},
  {id:78,name:"Veega Sausage Fully Cooked 16g",category:"Frozen Goods",price:250,image:"https://deligoodph.com/cdn/shop/products/VeegsaSausage_1200x1200.jpg?v=1627260223",keywords:"Veega Sausage"},
  {id:79,name:"Ribeye Steak Thin ",category:"Frozen Goods",price:325,image:"https://i5.walmartimages.com/seo/Thin-Ribeye-Steak-Choice-Angus-Beef-2-Per-Tray-0-43-1-68-lb_aa5726dc-6f85-434d-a716-9775dd56890a.d80fd414589640972ea180f6d459d4a4.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",keywords:"ribeye steak "},
  {id:80,name:"Fresh British Chicken Wings 15kg",category:"Frozen Goods",price:225,image:"https://assets.iceland.co.uk/i/iceland/iceland_class_a_fresh_british_chicken_wings_with_skin_on_15kg_79408.jpg?$pdpzoom$",keywords:"Chicken Wings"},   
  {id:81,name:"Chicken Drumsticks 1kilo",category:"Frozen Goods",price:125,image:"https://assets.woolworths.com.au/images/1005/354131.jpg?impolicy=wowsmkqiema&w=600&h=600",keywords:"Chicken Drumsticks"},
  {id:82,name:"Tender Juicy Hotdog Classic 250g",category:"Frozen Goods",price:130,image:"https://zbga.shopsuki.ph/cdn/shop/files/4808887300086_800x.jpg?v=1708910193",keywords:"tender juicy hotdog"},
  {id:83,name:"CDO Idol Cheesedog 250g",category:"Frozen Goods",price:90,image:"https://northazuregrocery.com/wp-content/uploads/2022/08/Idol-Cheesedog-Reg.-250g.jpg",keywords:"Idol Cheesedog"},
  {id:84,name:"Purefoods Classic Tocino 220g",category:"Frozen Goods",price:115,image:"https://ph-test-11.slatic.net/p/c509b882f96a8cc88077e61024081c3c.jpg",keywords:"tocino"},
  {id:85,name:"Purefoods  Classsic Honeycured Bacon 400g",category:"Frozen Goods",price:225,image:"https://northazuregrocery.com/wp-content/uploads/2022/08/Purefoods-Bacon-HoneyCured-400g-600x439.jpg",keywords:"Purefoods Bacon"},
  {id:86,name:"Purefoods Cooked Ham 250g",category:"Frozen Goods",price:105,image:"https://www.srssulit.com/wp-content/uploads/products/2016-1.png",keywords:"Purefoods Ham"},
  {id:87,name:"Purefoods Fiesta Ham 1kg",category:"Frozen Goods",price:215,image:"https://d2j6dbq0eux0bg.cloudfront.net/images/17197054/3975558750.jpg",keywords:"fiesta ham"},
  {id:88,name:"CDO Crispy Burger 228g",category:"Frozen Goods",price:100,image:"https://d2j6dbq0eux0bg.cloudfront.net/images/17197054/3256907588.jpg",keywords:"crispy burger"},
  {id:89,name:"Vermont Maple BreakfastSausage 340g",category:"Frozen Goods",price:125,image:"https://i5.walmartimages.com/seo/Great-Value-Uncooked-Vermont-Maple-Breakfast-Pork-Sausage-Links-12-oz-Package_0f2153b7-456f-4811-811d-0a426cf4c015.6b03dcdd6dad842785522a79632d951f.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",keywords:"sausage"},
  {id:91,name:"Cooked Shrimp 2lb",category:"Frozen Goods",price:115,image:"https://tse2.mm.bing.net/th/id/OIP.c0Rb3-jElDkxpcxVZtzsSAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"shrimp"},
  {id:92,name:"Coca-Cola Original 1,5L",category:"Drinks",price:105,image:"https://s3-ap-southeast-1.amazonaws.com/cdn.geniebazaar.in/product/c/10630.jpg",keywords:"cocacola"},
  {id:93,name:"Coca-Cola Zero Sugar 1.5L",category:"Drinks",price:105,image:"https://s3.amazonaws.com/images.ecwid.com/images/1150376/987828565.jpg",keywords:"Cocacola zero sugar"},
  {id:94,name:"Sprite 1.5L",category:"Drinks",price:105,image:"https://tse4.mm.bing.net/th/id/OIP.sbucPWPpcYBCKqufhF0fnQHaHa?r=0&w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Sprite"},
  {id:95,name:"Royal 1,5L",category:"Drinks",price:105,image:"https://tse3.mm.bing.net/th/id/OIP.VA8BqwKptW8Baw7vG8gvCgHaHa?r=0&w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"Royal"},
  {id:96,name:" Mountain Dew 1.5L",category:"Drinks",price:110,image:"https://down-ph.img.susercontent.com/file/ph-11134207-7qul7-lh8xwetycw6e60",keywords:"mountain dew"},
  {id:97,name:"Yakult Nonfat Probiotic Drink",category:"Drinks",price:60,image:"https://i.pinimg.com/736x/43/b8/8b/43b88b72a0dcde9ee107599b0e371fb3.jpg",keywords:"yakult"},
  {id:98,name:"Delight Probiotic Drink",category:"Drinks",price:50,image:"https://static.wixstatic.com/media/4c9109_b9b6b56ffdcb42968659ddb6a7ba812d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",keywords:"delight"},
  {id:99,name:"Mogu Mogu Strawberry Juice 320ml",category:"Drinks",price:35,image:"https://shoplilimart.com/cdn/shop/files/mogu-mogu-strawberry-juice-w_-nata-de-coco-320ml-transparent.webp?v=1774935743&width=1080",keywords:"mogu mogu"},
  {id:100,name:"Kopiko Lucky Day 180ml",category:"Drinks",price:25,image:"https://daily.com.ph/images/com_hikashop/upload/8996001600597.jpg",keywords:"kopiko"},
  {id:101,name:"OatSide Milk 1l",category:"Drinks",price:110,image:"https://down-ph.img.susercontent.com/file/ph-11134207-81zto-mlh660vv07b6de",keywords:"oatmilk"},
  {id:102,name:"Oatside coffee 1l",category:"Drinks",price:115,image:"https://down-sg.img.susercontent.com/file/b2c9ad09fdfb9ef264a4c9574c220c1f",keywords:"oatmilk coffee"},
  {id:103,name:"Oatside Chocolate 1l",category:"Drinks",price:120,image:"https://assets.landers.ph/catalog/product/1/4/145861-1_1_.jpg",keywords:"oatmilk chocolate"},
  {id:104,name:"Dutch Mill Strawberry180ml",category:"Drinks",price:45,image:"https://imartgrocersph.com/wp-content/uploads/2020/09/Dutch-Mill-Yoghurt-Drink-Strawberry-180mL.jpeg",keywords:"dutchmill"},
  {id:105,name:"Nestle Milo 200ml",category:"Drinks",price:35,image:"https://down-my.img.susercontent.com/file/dc566dbf480eb3d427754777987e91d7",keywords:"milo"},
  {id:106,name:"VitaMilk Soybean 300ml",category:"Drinks",price:25,image:"https://th.bing.com/th/id/R.f2a99153262f911de48dee425dbdaf2c?rik=oAy3cExdzfIKLA&riu=http%3a%2f%2fjgsj.jayagrocer.com%2fcdn%2fshop%2fproducts%2f036770-1-1.jpg%3fv%3d1676466978&ehk=T1%2bkKANgcrVe%2fGzYl9NJRhwC%2fFTyS9djHnHnkBZ9B2o%3d&risl=&pid=ImgRaw&r=0",keywords:"soybean"},
  {id:107,name:"VitaMilk Choco Shake 300ml",category:"Drinks",price:25,image:"https://asiabrewery.com/cdn/shop/products/Vitamilk-Choco-Shake-300ml_59385054-4d87-474c-840c-f992a3db7af9_800x.png?v=1658918888",keywords:"choco shake"},
  {id:108,name:"VitaMilk Banana 300ml",category:"Drinks",price:25,image:"https://thevegangrocer.com.ph/cdn/shop/files/VitamilkBanana.jpg?v=1682361185&width=1445",keywords:"banana vitamilk"},
  {id:109,name:"Red Horse Beer 500ml",category:"Drinks",price:85,image:"https://happyhour.ph/cdn/shop/files/802775.jpg?v=1730792248",keywords:"red horse"},
  {id:110,name:"San Miguel Beer 330ml",category:"Drinks",price:55,image:"https://aaashoppingcenter.ph/cdn/shop/files/lycheecan.jpg?v=1742875235&width=990",keywords:"San Miguel Beer"},
  {id:111,name:"San Mig Light 330ml",category:"Drinks",price:55,image:"https://tse3.mm.bing.net/th/id/OIP.cSe_uEYA7pU7JhOSC1983wHaHa?r=0&w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",keywords:"sanmiglight"},
  {id:112,name:"Tanduay Ice Blue 330ml",category:"Drinks",price:35,image:"https://boholonlinestore.com/wp-content/uploads/2017/01/tanduay_ice_blue_illusion_330ml.jpg",keywords:"tanduayice"},
  {id:113,name:"C2 Apple Green Tea 335ml",category:"Drinks",price:45,image:"https://store.iloilosupermart.com/wp-content/uploads/2020/05/99-2-600x600.jpg",keywords:"c2 apple"},
  {id:114,name:"C2 Lemon Green Tea 500ml",category:"Drinks",price:45,image:"https://primomart.ph/cdn/shop/files/101-1_dbd449f4-c7e8-4e5c-af35-2fc5dc8db1fe_700x700.jpg?v=1754888132" ,keywords:"c2 lemon"},
  {id:115,name:"Evian Spring Water 500ml",category:"Drinks",price:110,image:"https://cdn.shopify.com/s/files/1/0206/9470/products/Evian_500ML_2000px_1024x1024.jpg?v=1487648247",keywords:"evian"},
  {id:116,name:"Wilkins 500ml",category:"Drinks",price:15,image:"https://medias.watsons.com.ph/publishing/WTCPH-50025604-front-thumbnail.jpg?version=1734124443",keywords:"wilkins"},
  {id:117,name:"Alaskan Sockeye Salmon ",category:"Frozen Goods",price:110,image:"https://i5.walmartimages.com/seo/Wild-Caught-Alaska-Sockeye-Salmon-Portions-0-7-0-85-lb-Whole-Salmon-Portions_d7225c1c-1286-4559-b8e6-c9f831048e3d_2.c2c206f34668b376e7eb56dd5f8c628c.jpeg",keywords:"salmon"},
  {id:118,name:"Organic Smart Chicken whole",category:"Frozen Goods",price:135,image:"https://images.squarespace-cdn.com/content/v1/5c61c1d24d546e66bcd25237/1557172268042-2OVBBLWEYW6L882PMPJX/org-whole+chicken-edit.jpg",keywords:"whole chicken"},
  {id:119,name:"",category:"Drinks",price:115,image:"",keywords:""},
  {id:120,name:"",category:"Drinks",price:115,image:"",keywords:""},
  {id:121,name:"",category:"Drinks",price:115,image:"",keywords:""},
  {id:122,name:"",category:"Drinks",price:115,image:"",keywords:""},
  {id:123,name:"",category:"Drinks",price:115,image:"",keywords:""},
  {id:124,name:"",category:"Drinks",price:115,image:"",keywords:""},
  {id:125,name:"",category:"Drinks",price:115,image:"",keywords:""},
 












]
const payments = {
"GCash":["G","gcash-icon","Pay using GCash"],
"Maya":["M","maya-icon","Pay using Maya"],
"MariBank":["MB","maribank-icon","Pay using MariBank"],
"Google Pay":["G","googlepay-icon","Pay using Google Pay"],
"QR Ph":["QR","qr-icon","Scan to pay"],
"Credit / Debit Card":["CC","card-icon","Card payment"],
"Cash on Delivery":["COD","cod-icon","Pay when your order arrives"]
};
const pages = [
"welcomePage","signupPage","loginPage","shopPage","profilePage",
"cartPage","checkoutPage","successPage","ordersPage","detailsPage"
];
const $ = id => document.getElementById(id);
let cart = [];
let currentUser = JSON.parse(localStorage.getItem("kvogueSession") || "null");
let category = "All";
let toastTimer;
const users = () => JSON.parse(localStorage.getItem("kvogueUsers") || "[]");
const orders = () => JSON.parse(localStorage.getItem("kvogueOrders") || "[]");
const save = (key,data) => localStorage.setItem(key,JSON.stringify(data));
function peso(amount) {
return "₱" + Number(amount).toLocaleString("en-PH", {
minimumFractionDigits:2,
maximumFractionDigits:2
});
}
function toast(message) {
$("toastMessage").textContent = message;
$("toast").classList.remove("hidden");
clearTimeout(toastTimer);
toastTimer = setTimeout(() => $("toast").classList.add("hidden"),3000);
}
function showPage(id) {
pages.forEach(page => $(page).classList.add("hidden"));
$(id).classList.remove("hidden");

$("topbar").classList.toggle("hidden",
["welcomePage","signupPage","loginPage"].includes(id));
closeMenu();
window.scrollTo({top:0,behavior:"smooth"});
}
function openMenu() {
if (!currentUser) return showPage("loginPage");
updateMenu();
$("sideMenu").classList.add("open");
$("menuOverlay").classList.remove("hidden");
}
function closeMenu() {
$("sideMenu").classList.remove("open");
$("menuOverlay").classList.add("hidden");
}
function updateMenu() {
$("menuUserName").textContent = currentUser?.name || "Guest User";
$("menuUserEmail").textContent = currentUser?.email || "Please log in";
$("menuAvatar").textContent = currentUser?.name?.[0]?.toUpperCase() || "K";
}
$("menuButton").onclick = openMenu;
$("closeMenu").onclick = closeMenu;
$("menuOverlay").onclick = closeMenu;
document.querySelectorAll(".menu-links button").forEach(button => {
button.onclick = () => {
if (!currentUser) return showPage("loginPage");
if (button.dataset.page === "profilePage") renderProfile();
if (button.dataset.page === "ordersPage") renderOrders();
showPage(button.dataset.page);
};
});
$("welcomeSignup").onclick = () => showPage("signupPage");
$("welcomeLogin").onclick = () => showPage("loginPage");
$("signupBack").onclick = $("loginBack").onclick = () => showPage("welcomePage");
$("goLogin").onclick = () => showPage("loginPage");
$("goSignup").onclick = () => showPage("signupPage");
["signupHome","loginHome"].forEach(id => {
$(id).onclick = event => {
event.preventDefault();
showPage("welcomePage");
};

});
$("signupForm").onsubmit = event => {
event.preventDefault();
const name = $("signupName").value.trim();
const email = $("signupEmail").value.trim().toLowerCase();
const password = $("signupPassword").value;
if (password !== $("signupConfirm").value)
return toast("Passwords do not match.");
const list = users();
if (list.some(user => user.email === email))
return toast("Email is already registered.");
list.push({name,email,password});
save("kvogueUsers",list);
currentUser = {name,email};
save("kvogueSession",currentUser);
event.target.reset();
updateMenu();
renderProfile();
showPage("shopPage");
toast("Account created successfully!");
};
$("loginForm").onsubmit = event => {
event.preventDefault();
const email = $("loginEmail").value.trim().toLowerCase();
const password = $("loginPassword").value;
const user = users().find(u => u.email === email && u.password === password);
if (!user) return toast("Incorrect email or password.");
currentUser = {name:user.name,email:user.email};
save("kvogueSession",currentUser);
event.target.reset();
updateMenu();
renderProfile();
showPage("shopPage");
toast("Welcome back!");
};
$("menuLogout").onclick = () => {
currentUser = null;

cart = [];
localStorage.removeItem("kvogueSession");
updateCart();
updateMenu();
showPage("welcomePage");
toast("You have successfully logged out.");
};
function renderProfile() {
if (!currentUser) return;
$("profileAvatar").textContent = currentUser.name[0].toUpperCase();
$("profileDisplayName").textContent = currentUser.name;
$("profileName").textContent = currentUser.name;
$("profileEmail").textContent = currentUser.email;
updateMenu();
}
$("profileEditButton").onclick = () => {
$("editName").value = currentUser.name;
$("editEmail").value = currentUser.email;
$("editProfileForm").classList.remove("hidden");
};
$("cancelEdit").onclick = () => $("editProfileForm").classList.add("hidden");
$("profileBack").onclick = () => showPage("shopPage");
$("editProfileForm").onsubmit = event => {
event.preventDefault();
const name = $("editName").value.trim();
const email = $("editEmail").value.trim().toLowerCase();
const list = users();
if (list.some(u => u.email === email && u.email !== currentUser.email))
return toast("Email is already used.");
const user = list.find(u => u.email === currentUser.email);
if (!user) return toast("Account could not be found.");
user.name = name;
user.email = email;
save("kvogueUsers",list);
currentUser = {name,email};
save("kvogueSession",currentUser);
$("editProfileForm").classList.add("hidden");
renderProfile();
toast("Profile updated!");

};
/* DYNAMIC CATEGORY FILTERS */
function displayCategoryName(value) {
if (value === "household-cleaning-materials") return "Household Cleaning Materials";
return value;
}
function buildCategories() {
const categories = [...new Set(products.map(p => p.category))].sort();
$("categoryFilter").innerHTML =
'<option value="All">All Categories</option>' +
categories.map(c =>
`<option value="${escapeHTML(c)}">${escapeHTML(displayCategoryName(c))}</
option>`
).join("");
$("categoryButtons").innerHTML =
`<button class="category-button active" data-category="All">All Categories</button>` +
categories.map(c =>`<button class="category-button" data-category="${escapeHTML(c)}">${escapeHTML(displayCategoryName(c))}</button>`
).join("");
document.querySelectorAll(".category-button").forEach(button => {
button.onclick = () => chooseCategory(button.dataset.category);
});
}
function renderProducts() {
const search = $("searchInput").value.trim().toLowerCase();
const sort = $("sortFilter").value;
let list = products.filter(p => {
const matchesCategory = category === "All" || p.category === category;
const searchable = `${p.name} ${p.category} ${p.keywords || ""}`.toLowerCase();
return matchesCategory && searchable.includes(search);
});
if (sort === "az") list.sort((a,b) => a.category.localeCompare(b.category));
if (sort === "za") list.sort((a,b) => b.category.localeCompare(a.category));
if (sort === "priceLow") list.sort((a,b) => a.price - b.price);
if (sort === "priceHigh") list.sort((a,b) => b.price - a.price);
$("resultCount").textContent = `${list.length} available products`;

$("productGrid").innerHTML = list.map(p => `
<article class="product-card">
<div class="product-image-wrap">
<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}"
onerror="this.style.display='none'">
</div>
<p class="product-name">${escapeHTML(p.name)}</p>
<span class="product-category">${escapeHTML(displayCategoryName(p.category))}</
span>
<strong class="product-price">${peso(p.price)}</strong>
<button class="primary-button add-button" data-id="${p.id}">Add to Cart</button>
</article>
`).join("") || '<p class="empty-message">No matching products found.</p>';
document.querySelectorAll(".add-button").forEach(button => {
button.onclick = () => addToCart(Number(button.dataset.id));
});
}
function chooseCategory(value) {
category = value;
$("categoryFilter").value = value;
$("sectionTitle").textContent =
`K-Vogue / ${value === "All" ? "All Categories" : displayCategoryName(value)}`;
document.querySelectorAll(".category-button").forEach(button => {
button.classList.toggle("active",button.dataset.category === value);
});
renderProducts();
}
$("categoryFilter").onchange = event => chooseCategory(event.target.value);
$("sortFilter").onchange = renderProducts;
$("searchInput").oninput = renderProducts;
$("searchButton").onclick = renderProducts;
$("shopNow").onclick = () => {
$("searchInput").value = "";
$("sortFilter").value = "default";
chooseCategory("All");
};
$("homeButton").onclick = event => {
event.preventDefault();
$("searchInput").value = "";
chooseCategory("All");
showPage("shopPage");

};
/* CART */
function addToCart(id) {
if (!currentUser) return showPage("loginPage");
const product = products.find(p => p.id === id);
if (!product) return toast("Product not found.");
const item = cart.find(p => p.id === id);
if (item) item.quantity++;
else cart.push({...product,quantity:1});
updateCart();
toast("Item added to cart!");
}
function changeQuantity(id,amount) {
const item = cart.find(p => p.id === id);
if (!item) return;
item.quantity += amount;
if (item.quantity <= 0) cart = cart.filter(p => p.id !== id);
updateCart();
}
function cartSubtotal() {
return cart.reduce((sum,p) => sum + p.price * p.quantity,0);
}
function updateCart() {
$("cartCount").textContent = cart.reduce((sum,p) => sum + p.quantity,0);
$("cartItems").innerHTML = cart.length ? cart.map(p => `
<div class="cart-row">
<div class="cart-product-info">
<strong>${escapeHTML(p.name)}</strong>
<p>${peso(p.price)} × ${p.quantity}</p>
<b>${peso(p.price * p.quantity)}</b>
</div>
<div class="cart-actions">
<button data-minus="${p.id}">−</button>
<span>${p.quantity}</span>
<button data-plus="${p.id}">+</button>
<button class="remove-button" data-remove="${p.id}">Remove</button>
</div>
</div>

`).join("") : '<p class="empty-message">Your cart is empty.</p>';
$("cartTotal").innerHTML = cart.length
? `<strong>Subtotal: ${peso(cartSubtotal())}</strong>`
: "";
document.querySelectorAll("[data-minus]").forEach(button =>
button.onclick = () => changeQuantity(Number(button.dataset.minus),-1)
);
document.querySelectorAll("[data-plus]").forEach(button =>
button.onclick = () => changeQuantity(Number(button.dataset.plus),1)
);
document.querySelectorAll("[data-remove]").forEach(button =>
button.onclick = () => {
cart = cart.filter(p => p.id !== Number(button.dataset.remove));
updateCart();
toast("Item removed from cart.");
}
);
}
$("cartButton").onclick = () => {
if (!currentUser) return showPage("loginPage");
updateCart();
showPage("cartPage");
};
$("continueShopping").onclick = () => showPage("shopPage");
/* CHECKOUT AND DELIVERY */
function deliveryDate() {
const date = new Date();
date.setDate(date.getDate()+2);
date.setHours(10,0,0,0);
return date;
}
function deliveryText(date) {
return date.toLocaleDateString("en-PH",{
weekday:"long",year:"numeric",month:"long",day:"numeric"
}) + " | 10:00 AM – 12:00 PM";
}
function updateDelivery() {
$("estimatedDelivery").textContent = deliveryText(deliveryDate());

}
function resetPayment() {
document.querySelectorAll('[name="paymentMethod"]').forEach(radio => radio.checked =
false);
$("paymentSelection").classList.add("hidden");
$("paymentDetails").classList.add("hidden");
}
$("checkoutButton").onclick = () => {
if (!cart.length) return toast("Your cart is empty.");
if (!currentUser) return showPage("loginPage");
$("deliveryName").value = currentUser.name;
$("deliveryEmail").value = currentUser.email;
$("checkoutSummary").innerHTML = `
<h3>Order Summary</h3>
${cart.map(p => `<p>${escapeHTML(p.name)} × ${p.quantity} <strong>$
{peso(p.price*p.quantity)}</strong></p>`).join("")}
<h3>Total: ${peso(cartSubtotal())}</h3>
`;
updateDelivery();
resetPayment();
showPage("checkoutPage");
};
function selectPayment(method) {
const [icon,style,description] = payments[method];
$("selectedPaymentIcon").textContent = icon;
$("selectedPaymentIcon").className = `payment-icon ${style}`;
$("selectedPaymentText").textContent = method;
$("selectedPaymentDescription").textContent = description;
$("paymentSelection").classList.remove("hidden");
$("paymentDetails").classList.remove("hidden");
$("paymentTitle").textContent = `${method} Payment`;
const messages = {
"GCash":"Continue with GCash through the secure payment provider.",
"Maya":"Continue with Maya through the secure payment provider.",
"MariBank":"Continue with MariBank through the secure payment provider.",
"Google Pay":"Continue with Google Pay through the secure payment provider.",
"QR Ph":"Scan the merchant QR Ph code to pay.",
"Credit / Debit Card":"Continue to the secure card payment page.",
"Cash on Delivery":"Pay when your order arrives."
};
$("paymentDescription").textContent = messages[method];

$("paymentStatus").textContent = method === "Cash on Delivery"
? "Payment due upon delivery."
: `${method} selected. Payment confirmation is required.`;
}
document.querySelectorAll('[name="paymentMethod"]').forEach(radio => {
radio.onchange = () => selectPayment(radio.value);
});
$("checkoutForm").onsubmit = event => {
event.preventDefault();
if (!cart.length) return toast("Your cart is empty.");
const selected = document.querySelector('[name="paymentMethod"]:checked');
if (!selected) return toast("Please select a payment method.");
const date = deliveryDate();
const method = selected.value;
const orderId = "KV-" + Date.now().toString().slice(-8);
const total = cartSubtotal();
const paymentStatus = method === "Cash on Delivery"
? "Payment due upon delivery"
: "Awaiting payment confirmation";
const order = {
orderId,
customer:$("deliveryName").value.trim(),
email:$("deliveryEmail").value.trim(),
address:$("deliveryAddress").value.trim(),
phone:$("deliveryPhone").value.trim(),
payment:method,
paymentStatus,
total,
items:cart.map(p => ({
id:p.id,
name:p.name,
category:p.category,
price:p.price,
quantity:p.quantity
})),
date:new Date().toLocaleString("en-PH"),
deliveryDate:date.toISOString(),
deliveryWindow:"10:00 AM – 12:00 PM",
status:"Order Placed"
};
const list = orders();

list.unshift(order);
save("kvogueOrders",list);
$("orderNumber").textContent = `Order Number: ${orderId}`;
$("orderPayment").textContent = `Payment Method: ${method}`;
$("orderPaymentStatus").textContent = `Payment Status: ${paymentStatus}`;
$("orderTotal").textContent = `Order Total: ${peso(total)}`;
$("orderDelivery").textContent = `Estimated Delivery: ${deliveryText(date)}`;
$("orderAddress").textContent = `Delivery Address: ${order.address}`;
cart = [];
updateCart();
event.target.reset();
resetPayment();
showPage("successPage");
toast("Your order has been placed!");
};
/* ORDER HISTORY */
function escapeHTML(value) {
return String(value).replace(/[&<>"']/g,c => ({
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#39;"
})[c]);
}
function renderOrders() {
if (!currentUser) return showPage("loginPage");
const list = orders().filter(order => order.email === currentUser.email);
$("ordersList").innerHTML = list.length ? list.map(order => `
<div class="order-card">
<strong>${escapeHTML(order.orderId)}</strong>
<p>Order Date: ${escapeHTML(order.date)}</p>
<p>Payment Method: ${escapeHTML(order.payment)}</p>
<p>Payment Status: ${escapeHTML(order.paymentStatus)}</p>
<p>Order Total: ${peso(order.total || 0)}</p>
<p>Delivery Address: ${escapeHTML(order.address)}</p>
<p>Contact Number: ${escapeHTML(order.phone)}</p>
<p>Estimated Delivery: ${deliveryText(new Date(order.deliveryDate))}</p>
<p>Items: ${(order.items || []).map(item =>
`${escapeHTML(item.name || item.category)} × ${item.quantity}`
).join(", ")}</p>

<span class="order-status">${escapeHTML(order.status)}</span>
</div>
`).join("") : '<p class="empty-message">You do not have any orders yet.</p>';
}
$("ordersBack").onclick = $("detailsBack").onclick = () => showPage("shopPage");
$("viewOrdersAfterCheckout").onclick = () => {
renderOrders();
showPage("ordersPage");
};
$("backToShop").onclick = () => {
$("searchInput").value = "";
chooseCategory("All");
showPage("shopPage");
};
/* INITIALIZE WEBSITE */
buildCategories();
updateCart();
if (currentUser) {
updateMenu();
renderProfile();
showPage("shopPage");
} else {
showPage("welcomePage");
}
renderProducts();