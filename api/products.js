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
    }
  ]);
}
