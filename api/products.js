export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Üniversal Süper Seal – Tek Pinli Yağ Müşür Soketi",
      code: "KRD1001",
      pins: 1,
      category: "Müşür Soketi",
      description: "Üniversal kullanım",
      image: "images/KRD1001.png"
    },
    {
      id: 2,
      name: "Kızdırma Buji Soketi",
      code: "KRD1001E",
      pins: 1,
      category: "Isıtma Soketi",
      description: "Isıtma bujisi soketi",
      image: "images/KRD1001E.png"
    },
    {
    id: 3,
    name: "VW / Peugeot Motor Yağ Basınç Sensör Soketi",
    code: "KRD1004",
    pins: 1,
    category: "Soket",
    description: "Audi, Seat, Skoda, VAG ve Volkswagen araçlarla uyumlu motor yağ basınç sensör soketi.",
    image: "/images/KRD1004.png"
  },
  {
    id: 4,
    name: "VW / Peugeot Yağ Basınç Müşür Soketi",
    code: "KRD1005",
    pins: 1,
    category: "Soket",
    description: "Audi, Seat, Skoda ve Volkswagen araçlarla uyumlu yağ basınç müşür soketi.",
    image: "/images/KRD1005.png"
  },
  {
    id: 5,
    name: "VW / Peugeot Yağ Basınç Müşür Soketi",
    code: "KRD1005A",
    pins: 1,
    category: "Soket",
    description: "Audi, Seat, Skoda ve Volkswagen araçlarla uyumlu yağ basınç sensör soketi.",
    image: "/images/KRD1005A.png"
  },
  {
    id: 6,
    name: "VW Marş Motoru Otomatiği Soketi",
    code: "KRD1006",
    pins: 1,
    category: "Soket",
    description: "Audi, Seat, Skoda ve Volkswagen araçlarla uyumlu marş motoru otomatiği soketi.",
    image: "/images/KRD1006.png"
  },
  {
    id: 7,
    name: "Ford Yağ Müşür Soketi",
    code: "KRD1007",
    pins: 1,
    category: "Soket",
    description: "Citroën, Fiat, Ford, Jaguar, Land Rover, Mazda ve Peugeot araçlarla uyumlu yağ basınç şalteri soketi.",
    image: "/images/KRD1007.png"
  },
  {
    id: 8,
    name: "Yağ Müşür Soketi (Üniversal)",
    code: "KRD1010",
    pins: 1,
    category: "Soket",
    description: "Toyota araçlarla uyumlu yağ basınç sensörü.",
    image: "/images/KRD1010.png"
  },
   {
    id: 9,
    name: " Yağ Basınç Sensör Soketi",
    code: "KRD1015",
    pins: 1,
    category: "Soket",
    description: " GENERAL MOTORS,GENESIS, HYUNDAI, KIA, VAUXHALL araçlara uyumlu Yağ Basınç Sensör Soketi.",
    image: "/images/KRD1015.png"
  }, 
  {
    id: 10,
    name: "Geri Vites Müşür Soketi",
    code: "KRD2000",
    pins: 2,
    category: "Soket",
    description: "ABS FREN BALATA, FAN MOTOR, GERİ VİTES MÜŞÜR SOKETİ [DİŞİ] /Alfa Romeo, Autobianchi, Citroën, Fiat, Iveco, Innocenti, Peugeot ve Seat araçlarla uyumlu radyatör fan soketi. ",
    image: "/images/KRD2000A.png"
  },
   {
    id: 11,
    name: "FAN MOTOR ERKEK SOKETİ",
    code: "KRD2000E",
    pins: 2,
    category: "Soket",
    description: "ABS FREN BALATA, FAN MOTOR, GERİ VİTES MÜŞÜR SOKETİ [ERKEK]",
    image: "/images/KRD2000E.png"
  },
   {
    id: 12,
    name: "Enektör Soketi “Delphi”",
    code: "KRD2002",
    pins: 2,
    category: "Soket",
    description: "Citroën, Dacia, Fiat, Ford, Nissan, Peugeot, Renault ve Suzuki araçlarla uyumlu enjektör memesi soketi. ",
    image: "/images/KRD2002.png"
  },
   {
    id: 13,
    name: "Enjektör Soketi",
    code: "KRD2002A",
    pins: 2,
    category: "Soket",
    description: "Chevrolet, Citroën, Ford, Hyundai, Infiniti, Jeep, Kia, Mercedes-Benz, Opel, Peugeot, Seat, Skoda, SsangYong ve Volkswagen araçlarla uyumlu enjektör soketi. ",
    image: "/images/KRD2002A.png"
  },
   {
    id: 14,
    name: "Enjektör, Hararet Müşür, ve Rolanti Motor Soketi [ERKEK][ÜNİVERSAL]",
    code: "KRD2004",
    pins: 2,
    category: "Soket",
    description: "Audi, Asia Motors, BMW, BYD, Chery, Geely, Hyundai, Kia, Seat, Skoda, Suzuki ve Volkswagen araçlarla uyumlu yakıt deposu havalandırma / hava tahliye valfi soketi./ Alfa Romeo, Citroën, Chevrolet, Daewoo, Dacia, Fiat, General Motors, Lancia, Mercedes-Benz, Opel, Peugeot, SsangYong, Toyota ve Vauxhall araçlarla uyumlu vuruntu sensörü soketi. / General Motors ve Opel araçlarla uyumlu rölanti ayar valfi soketi. / Alfa Romeo, Audi, BMW, Citroën, Fiat, Ferrari, Infiniti, Lancia, Land Rover, MG, Mini, Nissan, Peugeot, Porsche, Rover, Seat, Skoda ve Volkswagen araçlarla uyumlu geri vites şalteri soketi. /Alfa Romeo, Citroën, Peugeot, Ferrari, Fiat, Hyundai, Infiniti, Kia, Lancia, Nissan, Renault, Rover, Subaru ve Suzuki araçlarla uyumlu yağ basınç şalteri soketi. /Alfa Romeo, Audi, BMW, Dacia, DAF, EvoBus, Fiat, Ford, Lancia, Mercedes-Benz, Renault, Renault Trucks, Seat, Skoda, Scania, Volvo ve Volkswagen araçlarla uyumlu enjektör soketi.",
    image: "/images/KRD2004.png"
  },
    {
    id: 15,
    name: " Su Fiskiye Motor Soketi / Sinyal Lambası Soketi",
    code: "KRD2004A",
    pins: 2,
    category: "Soket",
    description: "Audi, Porsche, Seat, Skoda ve Volkswagen araçlarla uyumlu korna soketi./ Audi, Ford, Ford USA, General Motors, Mercedes-Benz, Nissan, Opel, Peugeot, Saab, Seat, SsangYong, Vauxhall ve Volkswagen araçlarla uyumlu cam suyu pompası soketi./ Seat, Skoda ve Volkswagen araçlarla uyumlu sinyal lambası soketi.",
    image: "/images/KRD2004A.png"
  },
  {
    id: 16,
    name: "Su Fiskiye Motor Soketi (Yan Ayaklı) ",
    code: "KRD2004B",
    pins: 2,
    category: "Soket",
    description: "Ford, Ford USA, Land Rover ve Mazda araçlarla uyumlu cam suyu pompası soketi. ",
    image: "/images/KRD2004B.png"
  },
  {
    id: 17,
    name: "Enjektör Soketi",
    code: "KRD2004AB",
    pins: 2,
    category: "Soket",
    description: "Mercedes, Opel araçlarla uyumlu enjektör soketi. ",
    image: "/images/KRD2004AB.png"
  },
  {
    id: 18,
    name: " Sigma Şarj Dinamo, Yağ, Hararet ve Geri Vites Müşür, Krank Sensör Soketi [DİŞİ]",
    code: "KRD2005",
    pins: 2,
    category: "Soket",
    description: " Citroën, Peugeot, Dacia, Fiat, Ford, Nissan ve Renault araçlarla uyumlu yakıt sıcaklığı basınç sensörü soketi./Dacia, General Motors, Nissan, Opel, Renault ve Vauxhall araçlarla uyumlu krank mili konum sensörü (impuls vericisi) soketi. /BMW, Citroën, Peugeot, Fiat, Ford, Land Rover, Mazda, Mini, Nissan, Renault, Suzuki, Toyota ve Volvo araçlarla uyumlu yağ basınç şalteri soketi. /Alfa Romeo, BMW, Citroën, Fiat, Ford, Jaguar, Lancia, Land Rover, Mazda, Mini, Mitsubishi, Peugeot, Suzuki, Toyota ve Volvo araçlarla uyumlu emme manifoldu sıcaklık sensörü soketi. / Abarth, Alfa Romeo, Cadillac, Chrysler, Citroën, Ferrari, Fiat, Ford, General Motors, Jeep, Lancia, Opel, Peugeot, Saab, Subaru, Suzuki ve Vauxhall araçlarla uyumlu hararet ve soğutucu akışkan sıcaklık sensörü soketi. /Chrysler, Citroën, Dacia, DS, Ferrari, Fiat, General Motors, Iveco, Jeep, Lancia, Mercedes-Benz, Mitsubishi, Nissan, Opel, Peugeot, Renault, Suzuki, Toyota ve Vauxhall araçlarla uyumlu geri vites lambası şalteri soketi.",
    image: "/images/KRD2005.png"
  },
  {
    id: 19,
    name: "Sigma Şarj Dinamo, Yağ, Hararet ve Geri Vites Müşür, Krank Sensör Soketi [ERKEK] ",
    code: "KRD2005E",
    pins: 2,
    category: "Soket",
    description: " ",
    image: "/images/KRD2005E.png"
  },
  {
    id: 20,
    name: "Kostal Enjektör Soketi",
    code: "KRD2007",
    pins: 2,
    category: "Soket",
    description: "BMW ve Mercedes-Benz araçlarla uyumlu hava süspansiyon (Airmatic) kompresör pompası soketi./Audi, Chevrolet, General Motors, Hyundai, Infiniti, Kia, Mercedes-Benz, Opel, Seat, Skoda, SsangYong ve Volkswagen araçlarla uyumlu basınç regülatör ayar ventili soketi./Ford, Hyundai, Kia ve Mercedes-Benz araçlarla uyumlu far soketi./ Citroën, Peugeot, Dacia, Ford, Infiniti, Mazda, Mercedes-Benz, Nissan, Renault, Scania ve Toyota araçlarla uyumlu enjektör tamir soketi.",
    image: "/images/KRD2007.png"
  },
  {
    id: 21,
    name: "Klima, Balata, Su Pompa, Plaka Işık, Dış Sıcaklık, Geri Vites Müşür Soketi [DİŞİ]",
    code: "KRD2007A",
    pins: 2,
    category: "Soket",
    description: "Audi, Bentley, Porsche, Seat, Skoda ve Volkswagen araçlarla uyumlu emme hava sıcaklığı sensör soketi./Audi, BMW, Chevrolet, Citroën, Cupra, Ford, Honda, MAN, Mercedes-Benz, Mini, Mitsubishi, Peugeot, Porsche, Seat, Skoda, Smart, Suzuki ve Volkswagen araçlarla uyumlu cam suyu pompası soketi. /Volkswagen araçlarla uyumlu dış ısı sensör soketi./Audi, Ford, Mercedes-Benz, Seat, Skoda ve Volkswagen (VAG) araçlarla uyumlu klima kompresör soketi. ",
    image: "/images/KRD2007A.png"
  },
  {
    id: 22,
    name: "Klima, Balata, Airbag, Enjektör, Su Sıcaklık, Krank Sensör Soketi [ERKEK] ",
    code: "KRD2007AE",
    pins: 2,
    category: "Soket",
    description: "Klima, Balata, Airbag, Enjektör, Su Sıcaklık, Krank Sensör Soketi [ERKEK] ",
    image: "/images/KRD2007AE.png"
  },
{
    id: 23,
    name: "Su Fiskiye Motoru ve Konjektör Soketi [DİŞİ] ",
    code: "KRD2007B",
    pins: 2,
    category: "Soket",
    description: "Audi, Seat, Skoda, Volkswagen ve VAG araçlarla uyumlu cam suyu pompası soketi. ",
    image: "/images/KRD2007B.png"
  },
  {
    id: 24,
    name: "Fan Motor Soketi",
    code: "KRD2007C",
    pins: 2,
    category: "Soket",
    description: "Audi, Seat, Skoda ve Volkswagen araçlarla uyumlu fan soketi. /Audi, Seat, Skoda, Volkswagen ve VAG araçlarla uyumlu el freni ayar elemanı soketi.  ",
    image: "/images/KRD2007C.png"
  },

  {
    id: 25,
    name: "D Tipi Ters Kilit ve Şarj Dinamo Soketi ",
    code: "KRD2007D",
    pins: 2,
    category: "Soket",
    description: "Audi, Seat, Skoda, Volkswagen ve VAG araçlarla uyumlu dış hava sıcaklığı sensörü soketi. ",
    image: "/images/KRD2007D.png"
  },

  {
    id: 26,
    name: "Kostal Mor Kilitli Enjektör Soketi, Korna ve Basınç Pompa Soketi ",
    code: "KRD2007M",
    pins: 2,
    category: "Soket",
    description: "Audi, Cupra, Seat, Skoda, Volkswagen ve VAG araçlarla uyumlu püskürtme valfi soketi. ",
    image: "/images/KRD2007M.png"
  },
  {
    id: 27,
    name: "Yan Kilitli Enjektör, Eksantirik Ayar Manyetik Kablo Soketi ",
    code: "KRD2007X",
    pins: 2,
    category: "Soket",
    description: "Chrysler ve Mercedes-Benz araçlarla uyumlu kam ve eksantrik mili solenoidi soketi. ",
    image: "/images/KRD2007X.png"
  },
  {
    id: 28,
    name: "Enjektör Rail Boru Soketi ",
    code: "KRD2007Y",
    pins: 2,
    category: "Soket",
    description: "Audi, BMW, Porsche, Seat, Skoda, Volkswagen ve VAG araçlarla uyumlu yakıt yüksek basınç pompası soketi. ",
    image: "/images/KRD2007Y.png"
  },
  {
    id: 29,
    name: "Park Sinyal Soketi ",
    code: "KRD2009",
    pins: 2,
    category: "Soket",
    description: "Toyota ve Lexus araçlarla uyumlu park sinyal lambası soketi. ",
    image: "/images/KRD2009.png"
  },
  {
    id: 30,
    name: "Fan Motoru Müşürü ve Kalorifer Rezistans Soketi",
    code: "KRD2011",
    pins: 2,
    category: "Soket",
    description: "Renault araçlarla uyumlu kalorifer motoru direnci soketi./ Citroën, Opel, Renault ve General Motors araçlarla uyumlu radyatör fanı sıcaklık şalteri soketi. ",
    image: "/images/KRD2011.png"
  },
  {
    id: 31,
    name: "Volant Okuyucu, Sis Park, Krank Devir Sensör, Kaptör Soketi [SİYAH] ",
    code: "KRD2012",
    pins: 2,
    category: "Soket",
    description: "RENAULT araçlarında Eksantrik Mili Sensörü Soketi. ",
    image: "/images/KRD2012.png"
  },
  {
    id: 32,
    name: " Krank Devir Sensör,Volant Okuyucu, Sis Park, Kaptör Soketi [MAVİ] ",
    code: "KRD2012M",
    pins: 2,
    category: "Soket",
    description: "Dacia, Infiniti, Nissan, Renault ve Renault Trucks araçlarla uyumlu krank mili impuls vericisi soketi. ",
    image: "/images/KRD2012M.png"
  },
  {
    id: 33,
    name: "Ateşleme Bobini Soketi ",
    code: "KRD2013",
    pins: 2,
    category: "Soket",
    description: "Buick, Cadillac, Chevrolet, Dacia, Daewoo, General Motors, Hyundai, Kia, Infiniti, Lada, Nissan, Opel, Pontiac, Renault ve Renault Trucks araçlarla uyumlu ateşleme bobini soketi. ",
    image: "/images/KRD2013.png"
  },
  {
    id: 34,
    name: "Sis Farı Soketi ",
    code: "KRD2015",
    pins: 2,
    category: "Soket",
    description: "OPEL araçlara uyumlu Sis Lambası Soketi",
    image: "/images/KRD2015.png"
  },
  {
    id: 35,
    name: "Soket ",
    code: "KRD2016B",
    pins: 2,
    category: "Soket",
    description: "Soket",
    image: "/images/KRD2016B.png"
  },
  {
    id: 36,
    name: "Korna, Geri Vites Müşür, Eksantrik Sensör Soketi ",
    code: "KRD2018",
    pins: 2,
    category: "Soket",
    description: "Ford araçlarla uyumlu korna soketi./Ford, Jaguar ve Tesla araçlarla uyumlu ABS tekerlek hız sensörü soketi./Ford, Land Rover, Jaguar, Mazda ve Volvo araçlarla uyumlu geri vites lambası şalteri soketi. ",
    image: "/images/KRD2018.png"
  },
  {
    id: 37,
    name: "Geri Vites Müşür Soketi ",
    code: "KRD2018A",
    pins: 2,
    category: "Soket",
    description: "Ford, Land Rover, Volvo araçlarıyla uyumlu geri vites müşür soketi. ",
    image: "/images/KRD2018A.png"
  },
  {
    id: 38,
    name: "Su Fiskiye Soketi",
    code: "KRD2018B",
    pins: 2,
    category: "Soket",
    description: "Ford, Ford USA ve Volvo araçlarla uyumlu cam suyu pompası soketi. ",
    image: "/images/KRD2018B.png"
  },
  {
    id: 39,
    name: " Bobin ve Enjektör Soketi",
    code: "KRD2018C",
    pins: 2,
    category: "Soket",
    description: "Mercedes ve Opel araçlarıyla uyumlu enjektör soketi. ",
    image: "/images/KRD2018C.png"
  },
  {
    id: 40,
    name: "Bosch Tipi Enjektör ve Hararet Müşürü Soketi ",
    code: "KRD2020",
    pins: 2,
    category: "Soket",
    description: "BMW, Cummins, DAF, Ford, Iveco, KHD, Liebherr, MAN, Perkins, Peugeot, Renault, Rover, Volvo ve VW araçlarla uyumlu alternatör tamir soketi./Alfa Romeo, Chevrolet, Fiat, General Motors, Lancia, Opel ve Vauxhall araçlarla uyumlu krank mili & impuls vericisi soketi./ Alfa Romeo, Audi, Citroën, Fiat, Ford, Hyundai, Kia, MAN, Lancia, Opel, Peugeot, Seat, Skoda, Suzuki, Vauxhall ve VW araçlarla uyumlu enjektör püskürtme valfi soketi./Alfa Romeo, Audi, Citroën, Fiat, Ford, Hyundai, Kia, MAN, Lancia, Opel, Peugeot, Seat, Skoda, Suzuki, Vauxhall ve VW araçlarla uyumlu enjektör püskürtme valfi soketi.",
    image: "/images/KRD2020.png"
  },
  {
    id: 41,
    name: "Benzinli Enjektör ve Krank Soketi",
    code: "KRD2021",
    pins: 2,
    category: "Soket",
    description: "Audi, Seat, Skoda ve VW araçlarla uyumlu enjektör tamir soketi. ",
    image: "/images/KRD2021.png"
  },
  {
    id: 42,
    name: "Krank Sensör, Hararet, Yağ Müşür,Vuruntu Sensör, Şarj Sinyal Soketi  ",
    code: "KRD2022",
    pins: 2,
    category: "Soket",
    description: "Krank Sensör, Hararet, Yağ Müşür,Vuruntu Sensör, Şarj Sinyal Soketi ",
    image: "/images/KRD2000A.png"
  },
  {
    id: 43,
    name: "Park, Şarj ve Hız Sensör Soketi ",
    code: "KRD202B",
    pins: 2,
    category: "Soket",
    description: "Renault araçlarla uyumlu hız sensör soketi ",
    image: "/images/KRD2022B.png"
  },
  {
    id: 44,
    name: "Delphi Tip Manifold Hava Sıcaklık Sensörü ",
    code: "KRD2023A",
    pins: 2,
    category: "Soket",
    description: "Chevrolet, General Motors, Honda, Isuzu, Opel ve Volvo araçlarla uyumlu manifold & emme havası sıcaklığı sensörü soketi. ",
    image: "/images/KRD2023A.png"
  },

  {
    id: 45,
    name: "Delphi Tip Sensör ve Yağ Sıcaklık Sensör Soketi",
    code: "KRD2023B",
    pins: 2,
    category: "Soket",
    description: "Acura, Alfa Romeo, Cadillac, Chevrolet, Chrysler, Daewoo, Ferrari, Fiat, General Motors, Holden, Honda, Isuzu, Jeep, Lancia, Opel, Renault ve Volvo araçlarla uyumlu yağ sıcaklık sensörü soketi. ",
    image: "/images/KRD2023B.png"
  },{
    id: 46,
    name: "Süper Seal Geri Vites Müşürü, Kalorifer Rezistans Soketi [ERKEK][ÜNİVERSAL]",
    code: "KRD2024",
    pins: 2,
    category: "Soket",
    description: "Abarth, Alfa Romeo, Chrysler, Fiat, Jeep, Lada ve Lancia araçlarla uyumlu ateşleme bobini soketi; Fiat araçlarla uyumlu yan sinyal soketi; Scania ve Volvo araçlarla uyumlu alternatör tamir soketi; Nissan, Opel, Renault ve Vauxhall araçlarla uyumlu kalorifer motoru direnci soketi; Abarth, Alfa Romeo, Chrysler, Citroën, Fiat, General Motors, Innocenti, Jeep, Lancia, Opel, Peugeot ve Vauxhall araçlarla uyumlu geri vites lambası şalteri soketi.",
    image: "/images/KRD2024.png"
  },{
    id: 47,
    name: " İmpuls Vericisi, Krank Mili Soketi, BRC Enjektör Soketi ve Tekerlek Devir Sayısı Sensörü Soketi",
    code: "KRD2026",
    pins: 2,
    category: "Soket",
    description: "Alfa Romeo, Chevrolet, Citroën, Fiat, Ford, General Motors, Lancia, Opel, Peugeot ve Suzuki araçlarla uyumlu krank mili impuls vericisi soketi; Abarth, Alfa Romeo, Chevrolet, Fiat, Ford, Lancia, Opel ve Saab araçlarla uyumlu tekerlek devir sayısı (ABS) sensörü soketi. ",
    image: "/images/KRD2026.png"
  },{
    id: 48,
    name: "Konnektör Soketi ",
    code: "KRD2027",
    pins: 2,
    category: "Soket",
    description: "Konnektör Soketi",
    image: "/images/KRD2027.png"
  },{
    id: 49,
    name: "Alternatör&Şarj Dinamo Çevirici Soketi ",
    code: "KRD2027A",
    pins: 2,
    category: "Soket",
    description: " 2003–2005 model 6 i Hatchback (5 kapılı) ve 6 i Limousine (4 kapılı) 2.3L 2260cc L4 GAS DOHC motorlu araçlar ile 2000–2001 model MPV DX / ES / LX standart yolcu van ve minibüs (3 kapılı) 2.5L 2497cc V6 GAS DOHC motorlu araçlarla uyumludur.",
    image: "/images/KRD2027A.png"
  },{
    id: 50,
    name: "Klima Kompresör Kasnak Soketi ",
    code: "KRD2029",
    pins: 2,
    category: "Soket",
    description: "Renault marka araçlarda klima kompresör kasnağı ile uyumlu sokettir. ",
    image: "/images/KRD2029.png"
  },{
    id: 51,
    name: "H11 Orijinal Ampul Soketi",
    code: "KRD2029A",
    pins: 2,
    category: "Soket",
    description: "H11 Orijinal Ampul Soketi ",
    image: "/images/KRD2029A.png"
  },{
    id: 52,
    name: "H11 Orijinal Soket ",
    code: "KRD2029B",
    pins: 2,
    category: "Soket",
    description: "H11 Orijinal Soket ",
    image: "/images/KRD2029B.png"
  },{
    id: 53,
    name: "Hararet Müşürü, Klima Kompressör Bobini ve Park Sensör Soketi ",
    code: "KRD2030",
    pins: 2,
    category: "Soket",
    description: " Honda ve Acura araçlarla uyumlu park yardım sensörü, emme havası sıcaklığı sensörü ve hararet/soğutucu akışkan sıcaklık sensörü soketleri.",
    image: "/images/KRD2030.png"
  },{
    id: 54,
    name: "Hyundai Soket",
    code: "KRD2030H",
    pins: 2,
    category: "Soket",
    description: "Hyundai Soket ",
    image: "/images/KRD2030H.png"
  },{
    id: 55,
    name: "Direksiyon Pompa, Map Sensörü ve Kalorifer Fan Rezistans Soketi",
    code: "KRD2031",
    pins: 2,
    category: "Soket",
    description: "Citroën, Dacia, Nissan, Peugeot ve Renault araçlarla uyumlu direksiyon pompası soketi ile Citroën, Dacia, DS, Opel, Peugeot ve Renault araçlarla uyumlu radyatör fanı rezistansı elektrik motoru soketi. ",
    image: "/images/KRD2031.png"
  },{
    id: 56,
    name: "Park Lamba ve Kapı Swich Soketi",
    code: "KRD2032A",
    pins: 2,
    category: "Soket",
    description: "Park Lamba, Kapı Swich, Kalorifer Rezistans, Role, Sinyal, Plaka Işık Soketi ",
    image: "/images/KRD2032A.png"
  },{
    id: 57,
    name: "ABS Sensör ve Hararet Müşür Soketi ",
    code: "KRD2035",
    pins: 2,
    category: "Soket",
    description: "Mercedes-Benz araçlarla uyumlu ana far tamir soketi; BMW, Mini ve Rolls-Royce araçlarla uyumlu dış ısı sensörü soketi; Citroën, Fiat, GM, Opel ve Peugeot araçlarla uyumlu ABS sensörü soketi; Alfa Romeo, BMW, Chrysler, Fiat, Ford, Hyundai, Kia, Lancia, Mini ve Rolls-Royce araçlarla uyumlu sinyal lamba soketi; Land Rover araçlarla uyumlu bagaj kilidi tamir soketi. ",
    image: "/images/KRD2035.png"
  },{
    id: 58,
    name: "Bobin Soketi ",
    code: "KRD2037A",
    pins: 2,
    category: "Soket",
    description: "Hyundai ve KIA araçlarıyla uyumlu bobin soketi. ",
    image: "/images/KRD2037A.png"
  },{
    id: 59,
    name: "Krank &Kam Mili Konum Sensörü ",
    code: "KRD2037B",
    pins: 2,
    category: "Soket",
    description: "Daihatsu, Isuzu, Lexus, Suzuki ve Toyota araçlarla uyumlu krank ve kam mili konum sensörü. ",
    image: "/images/KRD2037B.png"
  },{
    id: 60,
    name: "Toyota Marş Soketi",
    code: "KRD2037F",
    pins: 2,
    category: "Soket",
    description: "Toyota Marş Soketi ",
    image: "/images/KRD2037F.png"
  },{
    id: 61,
    name: "Volanti Valf, Müşür, Hava Sıcaklık Sensör Soketi ",
    code: "KRD2038",
    pins: 2,
    category: "Soket",
    description: "Alfa Romeo, Chrysler, Dodge, Fiat, Jeep ve Lancia araçlarla uyumlu rölanti hava ayar valfi, ABS tekerlek hız sensörü ve dış hava sıcaklığı sensörü soketleri. ",
    image: "/images/KRD2038.png"
  },{
    id: 62,
    name: "Ford Müşür Soketi ",
    code: "KRD2038A",
    pins: 2,
    category: "Soket",
    description: "Ford Müşür Soketi ",
    image: "/images/KRD2038A.png"
  },{
    id: 63,
    name: "Enjektör, Park Sensör, Kalem Bobin, Yakıt Pompası Soketi ",
    code: "KRD2039",
    pins: 2,
    category: "Soket",
    description: "Buick, General Motors, Opel araçlarla uyumlu dış hava ortam sıcaklık sensörü soketi; Abarth, Alfa Romeo, Audi, Chrysler, Fiat, Ford, Hyundai, Jeep, Kia, Lancia, Mercedes-Benz, Seat, Skoda, VAG ve VW araçlarla uyumlu enjektör & püskürtme valf soketi. ",
    image: "/images/KRD2039.png"
  },{
    id: 64,
    name: "Mercedes Enjektör Soketi ",
    code: "KRD2039B",
    pins: 2,
    category: "Soket",
    description: "Mercedes araçlarla uyumlu Enjektör Soketi",
    image: "/images/KRD2039B.png"
  },{
    id: 65,
    name: "Hararet Müşürü",
    code: "KRD2045",
    pins: 2,
    category: "Soket",
    description: "Toyota Hararet Müşürü ",
    image: "/images/KRD2045.png"
  },{
    id: 66,
    name: "EGR Vakum Solenoid Vana Soketi ",
    code: "KRD2045A",
    pins: 2,
    category: "Soket",
    description: "TOYOTA araçlarıyla uyumlu EGR Vakum Solenoid Vana Soketi ",
    image: "/images/KRD2045A.png"
  },{
    id: 67,
    name: " DEUTSCH 2li İş Makinası Hidrolik Bobin Bağlantı ve ABS Tekerlek Hız Sensörü Soketi ",
    code: "KRD2049",
    pins: 2,
    category: "Soket",
    description: "Renault, Renault Trucks ve Volvo araçlarla uyumlu ABS tekerlek hız sensörü soketi. ",
    image: "/images/KRD2049.png"
  },{
    id: 68,
    name: "DEUTSCH 2li İş Makinası Erkek ",
    code: "KRD2049E",
    pins: 2,
    category: "Soket",
    description: "DEUTSCH 2li İş Makinası Erkek  ",
    image: "/images/KRD2049E.png"
  },{
    id: 69,
    name: " Direksiyon Pompası Soketi",
    code: "KRD2052",
    pins: 2,
    category: "Soket",
    description: "VOLKSWAGEN Direksiyon Pompası Soketi ",
    image: "/images/KRD2052.png"
  },{
    id: 70,
    name: " Direksiyon Pompası Soketi",
    code: "KRD2054",
    pins: 2,
    category: "Soket",
    description: "Audi, Seat, Skoda ve VW araçlarla uyumlu direksiyon pompası soketi. ",
    image: "/images/KRD2054.png"
  },{
    id: 71,
    name: "Üniversal Yüksek Amper Soket ",
    code: "KRD2055",
    pins: 2,
    category: "Soket",
    description: "Üniversal Yüksek Amper Soket ",
    image: "/images/KRD2055E.png"
  },{
    id: 72,
    name: "Üniversal Yüksek Amper Soket [ERKEK] ",
    code: "KRD2055E",
    pins: 2,
    category: "Soket",
    description: "Üniversal Yüksek Amper Soket [ERKEK]  ",
    image: "/images/KRD2055E.png"
  },{
    id: 73,
    name: "Fan Soketi ",
    code: "KRD2057",
    pins: 2,
    category: "Soket",
    description: "Ford ve Lincoln araçlarla uyumlu fan soketi. ",
    image: "/images/KRD2057.png"
  },{
    id: 74,
    name: "Ekskavatör Basınç Anahtarı Soketi",
    code: "KRD2058",
    pins: 2,
    category: "Soket",
    description: "Acura ve Honda araçarla uyumlu Ekskavatör Basınç Anahtarı Soketi ",
    image: "/images/KRD2058.png"
  },{
    id: 75,
    name: "Direksiyon Pompa Soketi ",
    code: "KRD2059",
    pins: 2,
    category: "Soket",
    description: "Citroën, Peugeot, Dacia ve Renault araçlarla uyumlu direksiyon pompası soketi. ",
    image: "/images/KRD2059.png"
  },{
    id: 76,
    name: "Hararet Müşürü Soketi ",
    code: "KRD2060A",
    pins: 2,
    category: "Soket",
    description: "Audi, Cupra, MAN, Seat, Skoda, VW ve VAG araçlarla uyumlu hararet müşürü soketi. ",
    image: "/images/KRD2060A.png"
  },{
    id: 77,
    name: "Sinyal Soketi [DAF/MAN]",
    code: "KRD2066",
    pins: 2,
    category: "Soket",
    description: "Sinyal Soketi [DAF/MAN] ",
    image: "/images/KRD2066.png"
  },{
    id: 78,
    name: "Sinyal Soketi [DAF/MAN] ",
    code: "KRD2067",
    pins: 2,
    category: "Soket",
    description: "Sinyal Soketi [DAF/MAN]",
    image: "/images/KRD2067.png"
  },{
    id: 79,
    name: "Ateşleme Bobin Soketi ",
    code: "KRD2070",
    pins: 2,
    category: "Soket",
    description: "VW/ VOLVO Ateşleme Bobini Soketi ",
    image: "/images/KRD2070.png"
  },{
    id: 80,
    name: "Mercedes Vana Bağlantı Soketi ",
    code: "KRD2081",
    pins: 2,
    category: "Soket",
    description: "Mercedes Vana Bağlantı Soketi ",
    image: "/images/KRD2081.png"
  },{
    id: 81,
    name: "Gündüz Farı, Sis Farı İş Makinası Soketi ",
    code: "KRD2084",
    pins: 2,
    category: "Soket",
    description: "Gündüz Farı, Sis Farı İş Makinası Soketi ",
    image: "/images/KRD2084.png"
  },{
    id: 82,
    name: "Gündüz Far Soketi ",
    code: "KRD2085",
    pins: 2,
    category: "Soket",
    description: "Gündüz Far Soketi ",
    image: "/images/KRD2085.png"
  },{
    id: 83,
    name: "Soket ",
    code: "KRD2085X",
    pins: 2,
    category: "Soket",
    description: "Soket ",
    image: "/images/KRD2085X.png"
  },{
    id: 84,
    name: "Soket ",
    code: "KRD2086C",
    pins: 2,
    category: "Soket",
    description: "Soket ",
    image: "/images/KRD2086C.png"
  },{
    id: 85,
    name: "Süper Seal Map, Kilometre Hız Sensör Soketi [ERKEK] [Üniversal]",
    code: "KRD3001",
    pins: 3,
    category: "Soket",
    description: "Alfa Romeo, Buick, Cadillac, Chevrolet, Citroën, Daewoo, DS, Ferrari, Fiat, General Motors, Holden, Honda, Hummer, Isuzu, Lancia, Oldsmobile, Opel, Peugeot, Pontiac, Renault, Renault Trucks, Saab, Smart, Vauxhall araçlarla uyumlu MAF/Hava Basınç Sensörü ve sinyal lambası tamir soketi. ",
    image: "/images/KRD3001.png"
  },{
    id: 86,
    name: "Süper Seal Oto Elektrik Tesisat Soketi [DİŞİ] [ÜNİVERSAL] ",
    code: "KRD3001E",
    pins: 3,
    category: "Soket",
    description: "Süper Seal Oto Elektrik Tesisat Soketi [DİŞİ] [ÜNİVERSAL] ",
    image: "/images/KRD3001E.png"
  },{
    id: 87,
    name: "Delphi Enjeksiyon,Potansiyometre ve Gaz Kelebek Sensör Soketi [SİYAH]",
    code: "KRD3002",
    pins: 3,
    category: "Soket",
    description: "Alfa Romeo, Audi, DS, Dacia, Citroën, Peugeot, Ferrari, Fiat, Innocenti, Ford, Lancia, Renault, Renault Trucks, SEAT, Skoda, Trident, VAG, VW, Volvo araçlarla uyumlu Gaz Kelebeği Konum Sensör Soketi. ",
    image: "/images/KRD3002.png"
  },{
    id: 88,
    name: "Enjeksiyon, Bobin, Hız Sensör Soketi ",
    code: "KRD3006",
    pins: 3,
    category: "Soket",
    description: "Alfa Romeo, Audi, Autobianchi, Bentley, Dacia, Citroën, Peugeot, Chrysler, Europestar, Ferrari, Fiat, FSO, Honda, Hitachi, Hyundai, Kia, Innocenti, Iveco, Land Rover, Lamborghini, Lotus, Lada, Maserati, Moskvich, Proton, Renault, Renault Trucks, Rover, SEAT, Skoda, VAG, VW, Tesla araçlarla uyumlu Ateşleme Bobini Soketi./Hyundai, Mitsubishi araçlarla uyumlu Emme Borusu Basınç Sensör Soketi./ Audi, Porsche, SEAT, Skoda, VAG, VW araçlarla uyumlu Oksijen/Lambda Sondası Soketi.",
    image: "/images/KRD3006.png"
  },{
    id: 89,
    name: "Sigma Krank Sensör, Şanzuman, Far, Hararet Müşür Soketi",
    code: "KRD3007",
    pins: 3,
    category: "Soket",
    description: "Chevrolet, Dacia, Fiat, General Motors, Infiniti, Lada, Mercedes-Benz, Nissan, Opel, Renault, Smart, Vauxhall araçlarla uyumlu Geri Vites Lambası Soketi./Alfa Romeo, Citroën, Peugeot, Fiat, Lancia araçlarla uyumlu Soğutucu Akışkan Sıcaklık Sensörü Soketi./Chevrolet, Dacia, General Motors, Hitachi, Infiniti, Mitsubishi, Nissan, Opel, Renault, Renault Trucks, Suzuki, Vauxhall, Volvo araçlarla uyumlu Eksantrik Mili Sensör Soketi. ",
    image: "/images/KRD3007.png"
  },{
    id: 90,
    name: "Bosch Dizel Enjektör, Map Sensör Soketi ",
    code: "KRD3008A",
    pins: 3,
    category: "Soket",
    description: "Chevrolet, Cadillac ve Ford marka araçlarla uyumlu Bosch Dizel Enjektör, Map Sensör Soketi ",
    image: "/images/KRD3008A.png"
  },{
    id: 91,
    name: "Hararet Müşürü, Hız Sensör Soketi ",
    code: "KRD3009",
    pins: 3,
    category: "Soket",
    description: "Renault araçlarla uyumlu Hız Sensörü Soketi./ Alfa Romeo, Citroën, Peugeot, Dacia, Fiat, General Motors, Infiniti, Iveco, Lada, Lancia, Nissan, Opel, Renault, Renault Trucks, Standard Automobile, Vauxhall araçlarla uyumlu Hararet Müşürü Soketi.",
    image: "/images/KRD3009.png"
  },{
    id: 92,
    name: "Klima Basınç Şalteri Sensörü Soketi ",
    code: "KRD3010",
    pins: 3,
    category: "Soket",
    description: "Alfa Romeo, John Deere, Chevrolet, Chrysler, Dacia, Ford, Ford USA, Fiat, General Motors, Hitachi, Hyundai, Kia, Nissan, Opel, Renault, Renault Trucks, Saab, Lancia, Volvo, Vauxhall araçlarla uyumlu Klima Basınç Şalteri Sensörü Soketi. ",
    image: "/images/KRD3010.png"
  },{
    id: 93,
    name: "Park Sensör, Klima Müşür ve Krank Sensör Soketi",
    code: "KRD3011",
    pins: 3,
    category: "Soket",
    description: "Audi, Bentley, Porsche, SEAT, Skoda, VAG, VW araçlarla uyumlu Park Sensör Soketi. / VW uyumlu klima müşür soketi.",
    image: "/images/KRD3011.png"
  },{
    id: 94,
    name: "Klima Müşür Soketi",
    code: "KRD3011A",
    pins: 3,
    category: "Soket",
    description: "VW uyumlu klima müşür soketi. ",
    image: "/images/KRD3011A.png"
  },{
    id: 95,
    name: "Krank Mili Pozisyon Sensör Soketi/ D Tip 3'lü Kalın Terminal ",
    code: "KRD3011B",
    pins: 3,
    category: "Soket",
    description: "Audi, Ford, Porsche, SEAT, Skoda, VW araçlarla uyumlu Krank Mili Pozisyon Sensör Soketi. ",
    image: "/images/KRD3011B.png"
  },{
    id: 96,
    name: "Turbo Map Sensörü, Egzoz Soketi, Şarj Basınç Soketi ",
    code: "KRD3012A",
    pins: 3,
    category: "Soket",
    description: "Toyota, Hitachi, DS, Lexus araçlarla uyumlu Emme Basınç Sensör Soketi ve Egzoz Basınç Sensör Soketi. ",
    image: "/images/KRD3012A.png"
  },{
    id: 97,
    name: "Klima Müşür, Konjektör, Şarj Dinamosu Alternatör ve Far Soketi",
    code: "KRD3013",
    pins: 3,
    category: "Soket",
    description: "Citroën, Peugeot, DAF, Kubota, Infiniti, Toyota, Volvo, Nissan, Suzuki, Hyundai, Kia araçlarla uyumlu Şarj Dinamosu & Alternatör Soketi ve Far Soketi. ",
    image: "/images/KRD3013.png"
  },{
    id: 98,
    name: "Park Sensör ve Klima Müşür Soketi ",
    code: "KRD3014",
    pins: 3,
    category: "Soket",
    description: "Dacia, Fiat, General Motors, Infiniti, Mercedes-Benz, Nissan, Opel, Renault, Renault Trucks, Vauxhall, Alfa Romeo, BMW, Citroën, Eagle, Ferrari, Ford, Jaguar, Land Rover, Mercedes-Benz, Peugeot, Lancia, Renault, Saab, Volvo araçlarla uyumlu Egzoz Basınç Sensör Soketi ve Park Sensör Soketi. ",
    image: "/images/KRD3014.png"
  },{
    id: 99,
    name: "LPG, Krank Okuyucu, Eksantrik Milli Konum Sensör ve Dizel Enjektör Bobin Soketi ",
    code: "KRD3016",
    pins: 3,
    category: "Soket",
    description: "Alfa Romeo, Chevrolet, Chrysler, Citroën, Fiat, Ford, General Motors, Lancia, Opel, Peugeot, Subaru, Suzuki, Vauxhall araçlarla uyumlu Eksantrik Mili Konum Sensörü Soketi ve Ateşleme Bobin Soketi. ",
    image: "/images/KRD3016.png"
  },{
    id: 100,
    name: "Eksantrik Milli Pozisyon, Krank Milli Sensör, Klima Müşür, Km Okuyucu Sensör Soketi ",
    code: "KRD3017",
    pins: 3,
    category: "Soket",
    description: "Alfa Romeo, Dacia, Fiat, Hitachi, Lancia, Nissan, Opel, Renault, Renault Trucks, Smart, Vauxhall araçlarla uyumlu Klima Basınç Sensör Soketi, Eksantrik Mili Pozisyon Sensör Soketi, Hız Sensör Soketi, Krank Mili Konum Sensör Soketi ve Far Seviye Ayarlama Tamir Soketi. ",
    image: "/images/KRD3017.png"
  },{
    id: 101,
    name: "Arka Park Sensörü ve Eksantrik Mili Sensörü Soketi ",
    code: "KRD3018",
    pins: 3,
    category: "Soket",
    description: "Alfa Romeo, Chrysler, Fiat, Ford, General Motors, Hyundai, Jeep, Lancia, Opel, Vauxhall, Audi, MAN, SEAT, Skoda, VAG, VW, Land Rover, Porsche araçlarla uyumlu Krank Mili Sensörü Soketi, Eksantrik Mili Sensörü Soketi ve Arka Park Sensörü Soketi. ",
    image: "/images/KRD3018.png"
  },{
    id: 102,
    name: "Geri Vites&Sürüş Lambası Sensörü ",
    code: "KRD3018A",
    pins: 3,
    category: "Soket",
    description: "Audi, VAG, VW araçlarla uyumlu Geri Sürüş Lambası Sensörü. ",
    image: "/images/KRD3018A.png"
  },{
    id: 103,
    name: "Beyaz Park Sensörü ",
    code: "KRD3018C",
    pins: 3,
    category: "Soket",
    description: "Beyaz Park Sensörü ",
    image: "/images/KRD3018C.png"
  },{
    id: 104,
    name: "Kilometre Okuyucu & Hız Sensör, Şarj & Alternatör Konjektör Soketi",
    code: "KRD3023A",
    pins: 3,
    category: "Soket",
    description: "Ford, Ford USA ve Mazda araçlarla uyumlu Hız Sensör Soketi; Ford, Mazda ve Mitsubishi araçlarla uyumlu Şarj & Alternatör Konjektör Soketi. ",
    image: "/images/KRD3023A.png"
  },{
    id: 105,
    name: "3 Pin Denso L8 Serisi Konnektör ",
    code: "KRD3023D",
    pins: 3,
    category: "Soket",
    description: "3 Pin Denso L8 Serisi Konnektör ",
    image: "/images/KRD3023D.png"
  },{
    id: 106,
    name: "İş Makinası Yakıt Basınç Sensörü Soketi DEUTSCH 3'lü ",
    code: "KRD3031",
    pins: 3,
    category: "Soket",
    description: "CATERPILLAR Yakıt Basınç Sensörü Soketi.",
    image: "/images/KRD3031.png"
  },{
    id: 107,
    name: "DEUTSCH 3'lü İş Makinesi (Üçgen) [ERKEK] ",
    code: "KRD3031E",
    pins: 3,
    category: "Soket",
    description: "DEUTSCH 3'lü İş Makinesi (Üçgen) [ERKEK] ",
    image: "/images/KRD3031E.png"
  },{
    id: 108,
    name: "Enjektör Soketi ",
    code: "KRD3034",
    pins: 3,
    category: "Soket",
    description: "Ford, Mercedes-Benz, BMW ve Volvo araçlarla uyumlu Enjektör Soketi. ",
    image: "/images/KRD3034.png"
  },{
    id: 109,
    name: " Kalorifer Motor Soketi ",
    code: "KRD4002",
    pins: 2,
    category: "Soket",
    description: "Ford araçlarla uyumlu  Kalorifer Motor Soketi ",
    image: "/images/KRD4002.png"
  },{
    id: 110,
    name: "Gaz Kelebeği Rolanti Ayar Valfi ve Ateşleme Bobini Soketi ",
    code: "KRD4003",
    pins: 4,
    category: "Soket",
    description: "Alfa Romeo, Audi, BMW, Citroën, Fiat, Lancia, General Motors, Opel, Peugeot, Renault, SEAT, Skoda, Volvo, VW ve Vauxhall araçlarla uyumlu Gaz Kelebeği Rölanti Ayar Valfi Soketi. ",
    image: "/images/KRD4003.png"
  },{
    id: 111,
    name: "Süper Seal Oksijen Sensör, Ateşleme Bobin Rezistans Soketi [ERKEK][ÜNİVERSAL] ",
    code: "KRD4008",
    pins: 4,
    category: "Soket",
    description: "Süper Seal Oksijen Sensör, Ateşleme Bobin Rezistans Soketi [ERKEK][ÜNİVERSAL] ",
    image: "/images/KRD4008.png"
  },{
    id: 112,
    name: "Bobin Soket Karşılığı",
    code: "KRD4008E",
    pins: 4,
    category: "Soket",
    description: "Bobin Soket Karşılığı ",
    image: "/images/KRD4008E.png"
  },{
    id: 113,
    name: "Şamandıra, Maf Sensör, Fan Rezistans, Kalorifer Motoru Direnci ve Yakıt Pompası Tesisatı Tamir Soketi  ",
    code: "KRD4010",
    pins: 4,
    category: "Soket",
    description: "Citroën, Ford, Peugeot ve Renault araçlarla uyumlu Şamandıra, MAF Sensör ve Fan Rezistans Soketi./ Citroën, DS, Peugeot, Mercedes-Benz, Nissan, Opel, Renault ve Renault Trucks araçlarla uyumlu Kalorifer Motoru Direnci ve Yakıt Pompası Tesisatı Tamir Soketi. ",
    image: "/images/KRD4010.png"
  },{
    id: 114,
    name: "Emme Basınç Sensörü, +'lü Bosch Sensör Soketi ",
    code: "KRD4011B",
    pins: 4,
    category: "Soket",
    description: "Audi, Bentley, Mercedes-Benz, Opel, Porsche, Volvo ve VW araçlarla uyumlu Emme Basınç Sensörü Soketi ",
    image: "/images/KRD4011B.png"
  },{
    id: 115,
    name: "Hararet Müşür Soketi  ",
    code: "KRD4016A",
    pins: 4,
    category: "Soket",
    description: "Audi, Dacia, General Motors, Infiniti, Mitsubishi, Nissan, Opel, Renault, Renault Trucks, Suzuki, Vauxhall ve Volvo araçlarla uyumlu Hararet Müşür Soketi.",
    image: "/images/KRD4016A.png"
  },{
    id: 116,
    name: "Dörtlü Flaşör Şalteri,Fren Lambası Şalteri ve Megane Bağaj Kilidi Soketi  ",
    code: "KRD4017",
    pins: 4,
    category: "Soket",
    description: "Dacia, Nissan ve Renault araçlarla uyumlu Arka Bagaj Kilidi Soketi; Nissan, Opel, Renault ve Vauxhall araçlarla uyumlu Dörtlü Flaşör Şalteri Soketi; Chevrolet, Citroën, Peugeot, DS, Fiat, General Motors, Infiniti, Lada, Lancia, Mercedes-Benz, Nissan, Opel, Renault, Toyota, Ford, Volkswagen ve Vauxhall araçlarla uyumlu Fren Lambası Şalteri Soketi. ",
    image: "/images/KRD4017.png"
  },{
    id: 117,
    name: "Map Sensör,Oksijen Sensör,Sıcaklık Sensör,Hava Yastığı Sensör Soketi   ",
    code: "KRD4022",
    pins: 4,
    category: "Soket",
    description: "Audi, Ford, Seat, Skoda, VW ve VAG araçlarla uyumlu MAP ve emiş borusu basınç sensörü soketi. ",
    image: "/images/KRD4022.png"
  },{
    id: 118,
    name: "Ateşleme Bobin,Map Sensör, Silecek Motoru,Emme Manifoldu Sensör ve Arka Lamba Soketi  ",
    code: "KRD4022A",
    pins: 4,
    category: "Soket",
    description: "Audi, Bentley, Lamborghini, Opel, Fiat, MAN, Seat, Skoda, VW ve VAG araçlarla uyumlu ateşleme bobin soketi./ Audi, Ford, Seat, Skoda ve Volkswagen araçlarla uyumlu MAP sensör soketi. ",
    image: "/images/KRD4022A.png"
  },{
    id: 119,
    name: " Hava Yoğunluk Ölçer&Akışmetre ve Su Sıcaklığı/Hararet Müşürü Sensörü Soketi ",
    code: "KRD4036",
    pins: 4,
    category: "Soket",
    description: " Audi, MAN, Seat, Skoda, Volkswagen ve VAG grubu araçlarla uyumlu hava yoğunluk ölçer (MAF/akışmetre) soketi.",
    image: "/images/KRD4036.png"
  },{
    id: 120,
    name: "Kalorifer Rezistans  ve Radyatör Fan Rezistans Soketi",
    code: "KRD4037",
    pins: 4,
    category: "Soket",
    description: "Audi, Cupra, Ford, Porsche, Seat, Skoda, Volvo ve Volkswagen araçlarla uyumlu radyatör fan rezistans soketi.",
    image: "/images/KRD4037.png"
  },
  {
    id: 121,
    name: "Gaz Kelebeği Konum Sensör ve Depo Şamandıra Soketi  ",
    code: "KRD4043",
    pins: 4,
    category: "Soket",
    description: "Ford, Isuzu, Lexus, Mazda, Toyota, Hyundai ve Kia araçlarla uyumlu depo şamandıra ve gaz kelebeği konumu sensör soketi. ",
    image: "/images/KRD4043.png"
  },{
    id: 122,
    name: "Kilometre&Hız Sensörü ve Egzoz Sıcaklığı Sensörü Soketi ",
    code: "KRD4044",
    pins: 4,
    category: "Soket",
    description: "Mercedes-Benz, DAF, Iveco, MAN, Renault Trucks, Scania ve Volvo araçlarla uyumlu egzoz sıcaklığı sensörü ile kilometre & hız sensörü soketi. ",
    image: "/images/KRD4044.png"
  },{
    id: 123,
    name: "Kilometre&Hız Sensörü ve Egzoz Sıcaklığı Sensörü Soketi Kablolu",
    code: "KRD4044K",
    pins: 4,
    category: "Soket",
    description: "Mercedes-Benz, DAF, Iveco, MAN, Renault Trucks, Scania ve Volvo araçlarla uyumlu egzoz sıcaklığı sensörü ile kilometre & hız sensörü soketi. ",
    image: "/images/KRD4044K.png"
  },{
    id: 124,
    name: "5'li Süper Seal Yakıt Filtresi Su Sensör ve Ateşleme Bobin Soketi [Üniversal]  ",
    code: "KRD5001",
    pins: 5,
    category: "Soket",
    description: "Alfa Romeo, Citroën, Fiat, General Motors, Lancia, Opel, Peugeot, Iveco, Hitachi ve Rover araçlarla uyumlu yakıt sistemi su sensörü, mazot filtre müşürü ve şamandıra soketi. ",
    image: "/images/KRD5001.png"
  },{
    id: 125,
    name: "Süper Seal Oto Elektrik Tesisat Soketi [Üniversal]",
    code: "KRD5001E",
    pins: 5,
    category: "Soket",
    description: "Süper Seal Oto Elektrik Tesisat Soketi [Üniversal] ",
    image: "/images/KRD5001E.png"
  },{
    id: 126,
    name: "Ateşleme Bobini Soketi ",
    code: "KRD5002D",
    pins: 5,
    category: "Soket",
    description: "Audi, Ford, Porsche, SEAT, Skoda ve Volkswagen araçlarla uyumlu Ateşleme Bobini Soketi. ",
    image: "/images/KRD5002D.png"
  },{
    id: 127,
    name: "Gaz Pedalı Konum Sensörü, Klima Basınç Şalteri Soketi ",
    code: "KRD5005",
    pins: 5,
    category: "Soket",
    description: "Alfa Romeo, BMW, Chrysler, Citroën, Fiat, Iveco, Lancia, Maserati ve Volvo araçlarla uyumlu Klima Basınç Şalteri & Müşürü Soketi. ",
    image: "/images/KRD5005.png"
  },{
    id: 128,
    name: "Akışmetre/MAF Sensör Soketi / Bosch Tipi 5’li ",
    code: "KRD5009",
    pins: 5,
    category: "Soket",
    description: "Fiat, Karrier, KHD, Porsche, VW ve Volvo araçlarla uyumlu Akışmetre / MAF Sensör Soketi. ",
    image: "/images/KRD5009.png"
  },{
    id: 129,
    name: " Hava Akış Sensörü, MAF Sensörü, STOP Lambası Soketi",
    code: "KRD5010",
    pins: 5,
    category: "Soket",
    description: "Fiat, VW ve Skoda araçlarla uyumlu Stop Lambası Soketi ve Fiat, VAG, Seat, Skoda, VW araçlarla uyumlu MAF Sensörü / Hava Akış Sensörü Soketi. ",
    image: "/images/KRD5010.png"
  },{
    id: 130,
    name: "Soket Bosch Tipi Konjektör, Alternatör Tamir Soketi ",
    code: "KRD5011",
    pins: 5,
    category: "Soket",
    description: "Audi, Seat, Skoda, VW, VAG, Mercedes-Benz, DAF, Iveco, Scania, Renault Trucks, Volvo ve Evobus araçlarla uyumlu Alternatör Tamir Soketi. ",
    image: "/images/KRD5011.png"
  },{
    id: 131,
    name: "MAF/Hava Akışmetre Sensör Soketi ",
    code: "KRD5012",
    pins: 5,
    category: "Soket",
    description: "Hitachi, Honda, Hyundai, Acura, Lexus, Isuzu, Mitsubishi, Subaru, Suzuki, Toyota ve Volvo araçlarla uyumlu MAF / Hava Akışmetre Sensör Soketi. ",
    image: "/images/KRD5012.png"
  },{
    id: 132,
    name: "Havalandırma Rezistans Soketi ",
    code: "KRD5016",
    pins: 5,
    category: "Soket",
    description: "Alfa Romeo, Chrysler, General Motors, Lancia, Fiat, Abarth, Citroën, Opel ve Peugeot araçlarla uyumlu havalandırma (kalorifer) rezistans soketi. ",
    image: "/images/KRD5016.png"
  },{
    id: 133,
    name: "Kalorifer Rezistans Soketi ",
    code: "KRD5017",
    pins: 5,
    category: "Soket",
    description: "Abarth, Chrysler, Citroën, Fiat, Iveco, Lancia ve Peugeot araçlarla uyumlu kalorifer rezistans soketi. ",
    image: "/images/KRD5017.png"
  },{
    id: 134,
    name: "Akışmetre,Cam Kriko, Hava Yoğunluk ve Far / Stop Soketi  ",
    code: "KRD6003",
    pins: 6,
    category: "Soket",
    description: "Renault, Citroën ve Peugeot cam kaldırma modül soketi ile Citroën, Nissan, Peugeot, Renault ve Renault Trucks araçlarla uyumlu akışmetre / hava yoğunluk sensör soketi. ",
    image: "/images/KRD6003.png"
  },{
    id: 135,
    name: "Akışmetre,Cam Kriko, Hava Yoğunluk ve Far / Stop Soketi ",
    code: "KRD6003M",
    pins: 6,
    category: "Soket",
    description: "Akışmetre,Cam Kriko, Hava Yoğunluk ve Far / Stop Soketi ",
    image: "/images/KRD6003M.png"
  },{
    id: 136,
    name: "Süper Seal Ateşleme Bobin ve Stop Soketi [ÜNİVERSAL]",
    code: "KRD6008",
    pins: 6,
    category: "Soket",
    description: "Alfa Romeo, Chrysler, Ferrari, Fiat, Ford, Hitachi, Lancia ve Maserati araçlarla uyumlu ateşleme bobini soketi. ",
    image: "/images/KRD6008.png"
  },{
    id: 137,
    name: "Süper Seal &'lı Karşılığı",
    code: "KRD6008E",
    pins: 6,
    category: "Soket",
    description: "Süper Seal &'lı Karşılığı ",
    image: "/images/KRD6008E.png"
  },{
    id: 138,
    name: "Gaz Pedalı,Gaz Kelebeği, EGR Valfi ve Far Motoru Modülü Soketi ",
    code: "KRD6011",
    pins: 6,
    category: "Soket",
    description: "MW, Daimler ve Mercedes-Benz araçlarla uyumlu gaz pedalı soketi./Alfa Romeo, Chrysler, General Motors, Fiat, Jeep, Lancia ve Mercedes-Benz araçlarla uyumlu gaz kelebeği soketi./ Audi, Seat, Skoda ve Volkswagen araçlarla uyumlu EGR valfi soketi./Audi, BMW, Fiat, Ford, Land Rover, Mercedes-Benz, Opel, Saab, Porsche, VAG ve Volvo araçlarla uyumlu far aralık ayarlama (far motor) modül soketi. ",
    image: "/images/KRD6011.png"
  },{
    id: 139,
    name: "Direksiyon Pompa ve Hava Akış Sensör Soketi ",
    code: "KRD6012",
    pins: 6,
    category: "Soket",
    description: "Toyota, Mazda, Hitachi, Infiniti, Nissan, Opel, Renault ve Suzuki araçlarla uyumlu Hava Akış (MAF) Sensör Soketi. ",
    image: "/images/KRD6012.png"
  },{
    id: 140,
    name: "Akışmetre Soketi ",
    code: "KRD6013A",
    pins: 6,
    category: "Soket",
    description: "Ford, Ford USA, Citroën, Jaguar, Hitachi, Mazda, Land Rover, Peugeot ve Volvo araçlarla uyumlu MAF & Akışmetre Sensörü Soketi. ",
    image: "/images/KRD6013A.png"
  },{
    id: 141,
    name: "Gaz Kelebeği Konum Sensörü Soketi ",
    code: "KRD6017",
    pins: 6,
    category: "Soket",
    description: "Chevrolet ve Buick araçlarla uyumlu gaz kelebeği soketi.",
    image: "/images/KRD6017.png"
  },{
    id: 142,
    name: "Far Soketi ",
    code: "KRD6019",
    pins: 6,
    category: "Soket",
    description: "Hyndai ve Kia araçlarla uyumlu far soketi.",
    image: "/images/KRD6019.png"
  },{
    id: 143,
    name: "ISUZU Stop / Müşür ve SCANİA   Far Soketi ",
    code: "KRD6020",
    pins: 6,
    category: "Soket",
    description: "ISUZU Stop / Müşür ve SCANİA   Far Soketi ",
    image: "/images/KRD6020.png"
  },{
    id: 144,
    name: "Gaz Kelebeği Konum Sensörü ve Stop Lambası Soketi ",
    code: "KRD6029",
    pins: 6,
    category: "Soket",
    description: "Chevrolet, General Motors, Opel ve Hitachi araçlarla uyumlu gaz kelebeği konum sensörü soketi./ BMW, Audi, Fiat, Mini, Seat, Skoda, Volkswagen (VAG) araçlarla uyumlu stop lambası soketi. ",
    image: "/images/KRD6029.png"
  },{
    id: 145,
    name: "Mercedes Stop Soketi ",
    code: "KRD6035",
    pins: 6,
    category: "Soket",
    description: "Mercedes Stop Soketi ",
    image: "/images/KRD6035.png"
  },{
    id: 146,
    name: "6'lı Stop Klima Soketi ",
    code: "KRD6080",
    pins: 6,
    category: "Soket",
    description: " Renault, Citroen ve Peugeot marka araçlarla uyumlu 6'lı Stop Klima Soketi. ",
    image: "/images/KRD6080.png"
  },{
    id: 147,
    name: "6'lı Stop Klima Soketi Yeşil ",
    code: "KRD6080Y",
    pins: 6,
    category: "Soket",
    description: "Renault, Citroen ve Peugeot marka araçlarla uyumlu 6'lı Stop Klima Soketi. ",
    image: "/images/KRD6080Y.png"
  },{
    id: 148,
    name: "Far Soketi ",
    code: "KRD7001",
    pins: 7,
    category: "Soket",
    description: "FORD Far Soketi  ",
    image: "/images/KRD7001.png"
  },{
    id: 149,
    name: "Stop Soketi ",
    code: "KRD7006",
    pins: 7,
    category: "Soket",
    description: "Mercedes-Benz, Renault Trucks, Scania, Volvo, MAN, Citroën, Fiat, Iveco, Peugeot, Volkswagen, Claas ve DAF araçlarla uyumlu arka lamba bağlantı soketi. ",
    image: "/images/KRD7006.png"
  },{
    id: 150,
    name: "Ağır Vasıta Stop Soketi ",
    code: "KRD7009",
    pins: 7,
    category: "Soket",
    description: "Mercedes-Benz, DAF ve Scania araçlarla uyumlu stop lambası soketi. ",
    image: "/images/KRD7009.png"
  },{
    id: 151,
    name: "Beyin Kızdırma Soketi ",
    code: "KRD8002",
    pins: 8,
    category: "Soket",
    description: "Renault Beyin Kızdırma Soketi ",
    image: "/images/KRD8002.png"
  },{
    id: 152,
    name: "Oto Elektrik Tesisat Soketi [ERKEK] ",
    code: "KRD8030",
    pins: 8,
    category: "Soket",
    description: "Oto Elektrik Tesisat Soketi [ERKEK] ",
    image: "/images/KRD8030.png"
  },{
    id: 153,
    name: "Direksiyon Pompa ve Far Soketi ",
    code: "KRD9002",
    pins: 9,
    category: "Soket",
    description: "Citroën, DS ve Peugeot far sistemleri ile Citroën, Dacia, Peugeot, Renault ve Nissan araçların direksiyon hidrolik pompa sistemleriyle uyumlu bağlantı soketi. ",
    image: "/images/KRD9002.png"
  },{
    id: 154,
    name: "Forklift aydınlatma anahtarı soketi",
    code: "KRD10006",
    pins: 10,
    category: "Soket",
    description: "Forklift aydınlatma anahtarı soketi ",
    image: "/images/KRD10006.png"
  },{
    id: 155,
    name: "Far Soketi ",
    code: "KRD10007A",
    pins: 10,
    category: "Soket",
    description: "HYUNDAI Far Soketi",
    image: "/images/KRD10007A.png"
  },{
    id: 156,
    name: "Renault Sigorta Kutusu ve Röle Soketi ",
    code: "KRD12001",
    pins: 12,
    category: "Soket",
    description: " Renault Sigorta Kutusu ve Renault Röle Soketi",
    image: "/images/KRD12001.png"
  },{
    id: 157,
    name: "Üniversal Süper Seal 2 Pinli Dişi ",
    code: "KRD2006E",
    pins: 2,
    category: "Soket",
    description: "Üniversal Süper Seal 2 Pinli Dişi ",
    image: "/images/KRD2006E.png"
  },{
    id: 158,
    name: "Üniversal Süper Seal 2 Pinli Dişi ",
    code: "KRD2098A",
    pins: 2,
    category: "Soket",
    description: "Üniversal Süper Seal 2 Pinli Dişi ",
    image: "/images/KRD2098A.png"
  },{
    id: 159,
    name: "9005-9006 Ampul Soketi",
    code: "KRD1699",
    pins: 2,
    category: "Soket",
    description: "9005-9006 Ampul Soketi ",
    image: "/images/KRD1699.png"
  },{
    id: 160,
    name: "Üniversal Çift Duylu 1016 ",
    code: "KRD0061",
    pins: 0,
    category: "Soket",
    description: "Üniversal Çift Duylu 1016 ",
    image: "/images/KRD0061.png"
  },{
    id: 161,
    name: "Üniversal Japon Tekli Duylu ",
    code: "KRD0062",
    pins: 0,
    category: "Soket",
    description: "Üniversal Japon Tekli Duylu ",
    image: "/images/KRD0062.png"
  },{
    id: 162,
    name: "Üniversal Çift Duy T20 ",
    code: "KRD00064",
    pins: 0,
    category: "Soket",
    description: "Üniversal Çift Duy T20 ",
    image: "/images/KRD0064.png"
  },{
    id: 163,
    name: "Fiat E.M. Çift Duy 20 ",
    code: "KRD0064G",
    pins: 0,
    category: "Soket",
    description: "Fiat E.M. Çift Duy 20 ",
    image: "/images/KRD0064G.png"
  },
  ]);
}
