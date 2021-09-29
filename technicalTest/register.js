import { Selector } from 'testcafe';
import { elements } from './pages'

const elementByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});

export default function (xpath) {
    return Selector(elementByXPath(xpath));
}


fixture `Register at Pawoon`
.page('https://dashboard.pawoon.com/login')

test(`As a guest, I can register at Pawoon`, async t => {
    await t
    .setNativeDialogHandler(() => true)
    .setTestSpeed(0.2)
    .click(Selector(elementByXPath(elements.daftarSekarang)))
    .typeText(Selector(elementByXPath(elements.namaLengkap)), 'Evinna Ginola')
    .typeText(Selector(elementByXPath(elements.email)), 'evinnagnl@mailinator.com')
    .typeText(Selector(elementByXPath(elements.phone)), '0899992211')
    .typeText(Selector(elementByXPath(elements.password)), 'Evinna123')
    .click(elementByXPath(elements.checkboxAgree))
    .click(Selector(elementByXPath(elements.lanjutkanButton)))

    .typeText(Selector(elementByXPath(elements.namaBisnis)), 'Evinna Fashion')
    .click(Selector(elementByXPath(elements.jenisBisnis)))
    .click(Selector(elementByXPath(elements.bisnisFashion)))
    .click(Selector(elementByXPath(elements.bisnistokoPakaian)))
    .typeText(Selector(elementByXPath(elements.kotaBisnis)), 'jakarta')
    .click(Selector(elementByXPath(elements.jakartaSelatan)))
    .click(Selector(elementByXPath(elements.lanjutkanButton2)))
    .expect(Selector(elements.verification).innerText).eql('Verifikasi No Handphone')
    // .takeScreenshot()
})
