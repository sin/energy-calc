import React from 'react'
import { ComparisonTable, ExternalitiesTable } from '..'
import './DetailedResults.css'

export function DetailedResults({ today, results }) {
  return (
    <div className="DetailedResults">
      <h3>
        {'Emisje CO'}
        <sub>2</sub>
        {' (kt / rok)'}
      </h3>
      <p>
        Dwutlenku węgla emitowany w ciągu jednego roku przy produkcji energii elektrycznej.
        Obliczenia opierają się na tak zwanych analizach cyklu życia, które obejmują emisje z
        budowy, eksploatacji, gospodarki paliwowej i rozbiórki zakładu. Jednostką jest kilotona
        (kt), jedna kilotona to 1000 ton.
      </p>
      <ComparisonTable current={today.co2} proposed={results.co2} sumValues={true} />
      <h3>Energia (TWh / rok)</h3>
      <p>
        Energia wyprodukowana przez każde ze źródeł w ciągu jednego roku. Jednostką jest
        terawatogodzina (TWh), jedna terawatogodzina to miliard kilowatogodzin (kWh).
      </p>
      <ComparisonTable
        current={today.energy}
        proposed={results.energy}
        format={{ fractionDigits: 1 }}
        sumValues={true}
      />
      <h3>Moc zainstalowana (GW)</h3>
      <p>
        Łączna moc zainstalowana źródła energii to suma mocy znamionowych urządzeń generujących
        energię. Jednostką jest gigawat (GW), jeden gigawat to 1000 megawatów.
      </p>
      <ComparisonTable
        current={today.installed}
        proposed={results.installed}
        format={{ commaPos: 3, fractionDigits: 1 }}
        sumValues={true}
      />
      <h3>Moc dostępna (GW)</h3>
      <p>
        Zdolność produkcyjna w czasie najwyższego zapotrzebowania na energię. Jednostką jest gigawat
        (GW), jeden gigawat to 1000 megawatów.
      </p>
      <ComparisonTable
        current={today.available}
        proposed={results.available}
        format={{ commaPos: 3, fractionDigits: 1 }}
        sumValues={true}
      />
      <h3>Współczynnik wykorzystania mocy</h3>
      <p>
        Współczynnik wykorzystania mocy (capacity factor) każdego źródła produkującego energię.
        Najwyższy to 100%, co oznaczałoby, że elektrownia działała z najwyższą mocą przez całą dobę,
        przez cały rok. Wszystkie elektrownie pracują tak dużo, jak to możliwe, z wyjątkiem ropy i
        gazu, które eksploatujemy tak mało, jak to możliwe, bez pwodowania deficytu energii w
        systemie.
      </p>
      <ComparisonTable
        current={today.capacityFactors}
        proposed={results.capacityFactors}
        format={{ isPercent: true }}
      />
      <h3>Oddziaływanie na środowisko</h3>
      <p>Podsumowanie wpływu na środowisko.</p>
      <ExternalitiesTable current={today} proposed={results} />
    </div>
  )
}
