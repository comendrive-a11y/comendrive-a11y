"use client";

import React from "react";

export default function HomePage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");

  const t = {
    halfDayTitle: lang === "en" ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    halfDaySlogan:
      lang === "en"
        ? "More than a tour. A real drive."
        : "Bir turdan fazlası. Gerçek bir sürüş deneyimi.",
    halfDaySubtitle:
      lang === "en"
        ? "Forest off-road driving, dust, adrenaline and a refreshing swim stop. A premium small-group tour with real driving experience."
        : "Orman içi off-road sürüş, toz, adrenalin ve serinletici yüzme molası. Gerçek sürüş hissi sunan premium küçük grup turu.",
    halfDayDesc:
      lang === "en"
        ? "Starting from Hisarönü, this half-day buggy safari takes you through 35 km of real off-road driving with a 1-hour swim stop at Gemiler Beach. We are the only company in the city offering buggy safari with a beach swim break. Tours run on weekdays in two daily departures and each slot is limited to a maximum of 8 buggies for a small-group, semi-private experience."
        : "Hisarönü çıkışlı bu yarım günlük buggy safari turu, sizi 35 km gerçek off-road sürüşe çıkarır ve Gemiler Beach’te 1 saatlik yüzme molası sunar. Şehirde buggy safari ile plaj yüzme molasını birleştiren tek firmayız. Turlar hafta içi her gün 2 ayrı slotta yapılır ve her slot maksimum 8 buggy ile sınırlıdır; yani küçük grup, yarı özel bir deneyim sunar.",
    halfDayGalleryLabel: lang === "en" ? "Tour Gallery" : "Tur Galerisi",
    halfDayBook: lang === "en" ? "Book Half Day" : "Yarım Gün Rezervasyon",
    halfDayDetailsTitle: lang === "en" ? "Tour Details" : "Tur Detayları",
    halfDayDetails:
      lang === "en"
        ? [
            "Location: Hisarönü, Fethiye",
            "Weekdays only",
            "Two departures daily: 09:00–12:30 / 14:00–17:30",
            "35 km off-road driving",
            "1-hour swim stop at Gemiler Beach",
            "550 cc automatic Mud Monster buggy",
            "Maximum 8 buggies per slot",
          ]
        : [
            "Lokasyon: Hisarönü, Fethiye",
            "Sadece hafta içi",
            "Günde 2 çıkış: 09:00–12:30 / 14:00–17:30",
            "35 km off-road sürüş",
            "Gemiler Beach’te 1 saat yüzme molası",
            "550 cc otomatik Mud Monster buggy",
            "Her slotta maksimum 8 buggy",
          ],
    halfDayIncludedTitle: lang === "en" ? "Included" : "Dahil Olanlar",
    halfDayIncluded:
      lang === "en"
        ? [
            "Protective goggles",
            "1 bottle of water",
            "Holiday activity insurance",
            "Professional guide service",
            "Transfer",
            "Gemiler Beach entrance",
          ]
        : [
            "Koruyucu gözlük",
            "1 şişe su",
            "Tatil aktivite sigortası",
            "Rehberlik hizmeti",
            "Transfer",
            "Gemiler Beach giriş ücreti",
          ],
    halfDayExtraTitle: lang === "en" ? "Extra / Optional" : "Ekstra / Opsiyonel",
    halfDayExtra:
      lang === "en"
        ? ["Photos", "Drinks at the beach"]
        : ["Fotoğraflar", "Plajdaki içecekler"],
    halfDayBringTitle: lang === "en" ? "What to Bring" : "Yanınızda Getirmeniz Gerekenler",
    halfDayBring:
      lang === "en"
        ? ["Driving licence", "Sunglasses", "Towel", "Swimwear", "Some money for beach drinks"]
        : ["Ehliyet", "Güneş gözlüğü", "Havlu", "Swimwear", "Plajdaki içecekler için bir miktar para"],
    halfDayRulesTitle: lang === "en" ? "Driver Rules" : "Sürücü Kuralları",
    halfDayRules:
      lang === "en"
        ? ["Minimum driving age: 18", "Not suitable for children under 4", "Driver must bring driving licence or provisional licence"]
        : ["Minimum sürüş yaşı: 18", "4 yaş altı çocuklar için uygun değildir", "Sürücü ehliyet veya provisional licence getirmelidir"],

    fullDayTitle: lang === "en" ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    fullDaySlogan:
      lang === "en"
        ? "Half day for fun. Full day for discovery."
        : "Yarım gün eğlence için. Tam gün keşif için.",
    fullDaySubtitle:
      lang === "en"
        ? "Mountains, hidden roads, ancient history, premium lunch and a beach swim stop — a complete day for real explorers."
        : "Dağlar, gizli yollar, antik tarih, premium öğle yemeği ve plaj yüzme molası — gerçek kaşifler için dolu dolu bir gün.",
    fullDayDesc:
      lang === "en"
        ? "This full-day off-road route starts from our truck and climbs up to 1500 metres on Babadağ with breathtaking views. The route includes the ancient Lycian city of Pınara, a photo stop above Hidden Canyon, an exclusive lunch with Butterfly Valley views and a 1-hour swim stop at Kıdrak Beach. The biggest highlight of this tour is discovering off-road routes that almost nobody else drives. Recommended for experienced drivers and guests without fear of heights."
        : "Bu tam günlük off-road rota, truck çıkışıyla başlar ve Babadağ’da 1500 metre yüksekliğe kadar muhteşem manzaralar eşliğinde devam eder. Tur kapsamında antik Likya kenti Pınara, Hidden Canyon tepesinde fotoğraf molası, Butterfly Valley manzaralı özel öğle yemeği ve Kıdrak Beach’te 1 saat yüzme molası bulunur. Bu turun en büyük özelliği, neredeyse kimsenin sürmediği off-road yolları keşfetmektir. Deneyimli sürücüler ve yükseklik korkusu olmayan misafirler için tavsiye edilir.",
    fullDayGalleryLabel: lang === "en" ? "Tour Gallery" : "Tur Galerisi",
    fullDayBook: lang === "en" ? "Book Full Day" : "Tam Gün Rezervasyon",
    fullDayDetailsTitle: lang === "en" ? "Tour Details" : "Tur Detayları",
    fullDayDetails:
      lang === "en"
        ? [
            "Saturday & Sunday only",
            "09:00–17:00",
            "75 km total driving route",
            "Babadağ climb up to 1500 metres",
            "Visit to ancient city of Pınara",
            "Photo break at Hidden Canyon",
            "Exclusive lunch with Butterfly Valley view",
            "1-hour swim stop at Kıdrak Beach",
          ]
        : [
            "Sadece Cumartesi & Pazar",
            "09:00–17:00",
            "Toplam 75 km sürüş rotası",
            "Babadağ’da 1500 metreye kadar çıkış",
            "Pınara antik kenti ziyareti",
            "Hidden Canyon’da fotoğraf molası",
            "Butterfly Valley manzaralı özel öğle yemeği",
            "Kıdrak Beach’te 1 saat yüzme molası",
          ],
    fullDayIncludedTitle: lang === "en" ? "Included" : "Dahil Olanlar",
    fullDayIncluded:
      lang === "en"
        ? ["All-day water", "Premium lunch", "Beach entrance fee", "Photos included", "Guide service", "Insurance"]
        : ["Gün boyu su", "Premium öğle yemeği", "Plaj giriş ücreti", "Fotoğraflar dahil", "Rehberlik hizmeti", "Sigorta"],
    fullDayBringTitle: lang === "en" ? "What to Bring" : "Yanınızda Getirmeniz Gerekenler",
    fullDayBring:
      lang === "en"
        ? ["Driving licence", "Sunglasses", "Towel", "Swimwear"]
        : ["Ehliyet", "Güneş gözlüğü", "Havlu", "Swimwear"],
    fullDayRulesTitle: lang === "en" ? "Driver & Passenger Rules" : "Sürücü & Yolcu Kuralları",
    fullDayRules:
      lang === "en"
        ? ["Minimum driver age: 20", "Driving licence required", "Minimum passenger age: 6", "Recommended for experienced drivers", "Not suitable for guests with fear of heights"]
        : ["Minimum sürücü yaşı: 20", "Ehliyet zorunludur", "Minimum yolcu yaşı: 6", "Deneyimli sürücüler için tavsiye edilir", "Yükseklik korkusu olan misafirler için uygun değildir"],

    kidsTitle: lang === "en" ? "Kids Quad Bike" : "Kids Quad Bike",
    kidsSlogan:
      lang === "en"
        ? "Little riders. Big smiles."
        : "Küçük sürücüler. Büyük gülümsemeler.",
    kidsSubtitle:
      lang === "en"
        ? "A safe and exciting first off-road experience for children on the city’s biggest closed track."
        : "Çocuklar için şehrin en büyük kapalı parkurunda güvenli ve heyecan dolu ilk off-road deneyimi.",
    kidsDesc:
      lang === "en"
        ? "Kids ride brand-new Yamaha 50 cc ATVs on a 1.2 km closed track under guide supervision. The activity is designed for children aged 6 to 14, with a maximum weight of 60 kg. Safety comes first: helmets are included and the ATVs have rear safety limiters. Parents can relax in the chilling zone while children enjoy a fun activity that also builds coordination and confidence."
        : "Çocuklar, rehber eşliğinde 1.2 km kapalı parkurda yepyeni Yamaha 50 cc ATV’lerle sürüş yapar. Aktivite 6–14 yaş arası ve maksimum 60 kg çocuklar için tasarlanmıştır. Güvenlik ön plandadır: kask dahildir ve ATV’lerin arkasında emniyet kilitleri vardır. Aileler chilling zone alanında dinlenirken çocuklar hem eğlenir hem de koordinasyon ve özgüven kazanır.",
    kidsGalleryLabel: lang === "en" ? "Activity Gallery" : "Aktivite Galerisi",
    kidsBook: lang === "en" ? "Book Kids Quad" : "Kids Quad Rezervasyon",
    kidsDetailsTitle: lang === "en" ? "Activity Details" : "Aktivite Detayları",
    kidsDetails:
      lang === "en"
        ? [
            "Brand-new Yamaha 50 cc ATVs",
            "1.2 km closed track",
            "Guided riding",
            "50-minute activity",
            "City’s biggest kids track",
            "Parent chilling zone",
            "Helmet included",
          ]
        : [
            "Yepyeni Yamaha 50 cc ATV’ler",
            "1.2 km kapalı parkur",
            "Rehberli sürüş",
            "50 dakikalık aktivite",
            "Şehrin en büyük çocuk parkuru",
            "Aileler için chilling zone",
            "Kask dahil",
          ],
    kidsScheduleTitle: lang === "en" ? "Daily Hours" : "Günlük Saatler",
    kidsSchedule:
      lang === "en"
        ? ["10:00", "11:30", "15:00", "18:00"]
        : ["10:00", "11:30", "15:00", "18:00"],
    kidsRulesTitle: lang === "en" ? "Requirements" : "Kurallar",
    kidsRules:
      lang === "en"
        ? ["Age: 6–14", "Maximum weight: 60 kg", "Designed only for children"]
        : ["Yaş: 6–14", "Maksimum kilo: 60 kg", "Sadece çocuklar için tasarlanmıştır"],

    reservationNote:
      lang === "en"
        ? "Booking infrastructure will be connected to Bokun and virtual POS later."
        : "Rezervasyon altyapısı daha sonra Bokun ve sanal POS ile bağlanacaktır.",
    languageButton: lang === "en" ? "TR" : "EN",
  };

  return (
    <main className="min-h-screen bg-[#f5f2ec] text-stone-900">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex justify-end">
          <button
            onClick={() => setLang(lang === "en" ? "tr" : "en")}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            {t.languageButton}
          </button>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight">{t.halfDayTitle}</h2>
          <p className="mt-3 text-lg font-medium italic text-stone-600">{t.halfDaySlogan}</p>
          <p className="mt-5 max-w-2xl text-2xl leading-snug text-stone-700">{t.halfDaySubtitle}</p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-700">{t.halfDayDesc}</p>

          <div className="mt-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
              {t.halfDayGalleryLabel}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={`halfday-${item}`}
                  className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-stone-300 bg-stone-100 text-center text-sm text-stone-500"
                >
                  {lang === "en" ? `Half Day Photo ${item}` : `Yarım Gün Fotoğraf ${item}`}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#booking-half-day"
              className="inline-flex rounded-full bg-stone-900 px-6 py-4 text-lg font-medium text-white transition hover:opacity-90"
            >
              {t.halfDayBook}
            </a>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <InfoBlock title={t.halfDayDetailsTitle} items={t.halfDayDetails} />
            <InfoBlock title={t.halfDayIncludedTitle} items={t.halfDayIncluded} />
            <InfoBlock title={t.halfDayExtraTitle} items={t.halfDayExtra} />
            <InfoBlock title={t.halfDayBringTitle} items={t.halfDayBring} />
          </div>

          <div className="mt-8 max-w-2xl">
            <InfoBlock title={t.halfDayRulesTitle} items={t.halfDayRules} />
          </div>
        </div>
      </section>

      <section className="bg-[#faf9f7]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold tracking-tight">{t.fullDayTitle}</h2>
            <p className="mt-3 text-lg font-medium italic text-stone-600">{t.fullDaySlogan}</p>
            <p className="mt-5 max-w-2xl text-2xl leading-snug text-stone-700">{t.fullDaySubtitle}</p>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-700">{t.fullDayDesc}</p>

            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                {t.fullDayGalleryLabel}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={`fullday-${item}`}
                    className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-stone-300 bg-stone-100 text-center text-sm text-stone-500"
                  >
                    {lang === "en" ? `Full Day Photo ${item}` : `Tam Gün Fotoğraf ${item}`}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#booking-full-day"
                className="inline-flex rounded-full bg-stone-900 px-6 py-4 text-lg font-medium text-white transition hover:opacity-90"
              >
                {t.fullDayBook}
              </a>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <InfoBlock title={t.fullDayDetailsTitle} items={t.fullDayDetails} />
              <InfoBlock title={t.fullDayIncludedTitle} items={t.fullDayIncluded} />
              <InfoBlock title={t.fullDayBringTitle} items={t.fullDayBring} />
              <InfoBlock title={t.fullDayRulesTitle} items={t.fullDayRules} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold tracking-tight">{t.kidsTitle}</h2>
            <p className="mt-3 text-lg font-medium italic text-stone-600">{t.kidsSlogan}</p>
            <p className="mt-5 max-w-2xl text-2xl leading-snug text-stone-700">{t.kidsSubtitle}</p>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-700">{t.kidsDesc}</p>

            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                {t.kidsGalleryLabel}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={`kids-${item}`}
                    className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-stone-300 bg-stone-100 text-center text-sm text-stone-500"
                  >
                    {lang === "en" ? `Kids Quad Photo ${item}` : `Kids Quad Fotoğraf ${item}`}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#booking-kids-quad"
                className="inline-flex rounded-full bg-stone-900 px-6 py-4 text-lg font-medium text-white transition hover:opacity-90"
              >
                {t.kidsBook}
              </a>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <InfoBlock title={t.kidsDetailsTitle} items={t.kidsDetails} />
              <InfoBlock title={t.kidsScheduleTitle} items={t.kidsSchedule} />
            </div>

            <div className="mt-8 max-w-2xl">
              <InfoBlock title={t.kidsRulesTitle} items={t.kidsRules} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-stone-300 bg-stone-100 p-8 text-stone-700">
          <p className="text-base">{t.reservationNote}</p>
        </div>
      </section>

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-[#25D366] px-6 py-4 text-xl font-bold text-white shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-3 text-base leading-7 text-stone-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-stone-900" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
