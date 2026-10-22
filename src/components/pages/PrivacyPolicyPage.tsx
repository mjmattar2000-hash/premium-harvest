import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-[100rem] mx-auto px-4 py-12 md:py-16">
        <div className="prose prose-sm md:prose-base max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          
          <p className="font-paragraph text-base mb-8 text-gray-700">
            Premium Harvest Limited (brand: Nature's Choice)<br />
            Website: premiumharvest.in<br />
            Last updated: 22 October 2026
          </p>

          <p className="font-paragraph text-base mb-8 text-gray-700">
            This policy explains what personal information we collect when you buy from us, message us on WhatsApp, or call us, why we collect it, and what choices you have. It follows India's Digital Personal Data Protection Act, 2023.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">1. Who we are</h2>
          <p className="font-paragraph text-base mb-4 text-gray-700">
            Premium Harvest Limited sells dates and dry fruits under the brand Nature's Choice.
          </p>
          <p className="font-paragraph text-base mb-4 text-gray-700">
            Registered address:<br />
            1st Floor, Office Premises No. 1A, Shivji Market Co-op. Premises Soc. Ltd.,<br />
            Plot No. 8 and 9, Sector 19 D, Vashi, Navi Mumbai,<br />
            Thane, Maharashtra 400703, India
          </p>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            Contact: premiumharvestbarhi@gmail.com
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">2. What we collect</h2>
          <ul className="font-paragraph text-base mb-8 text-gray-700 list-disc list-inside space-y-2">
            <li>Contact details: your name, phone number and WhatsApp profile name.</li>
            <li>Order details: products, quantities, prices, order number, delivery address and pincode.</li>
            <li>Payment status: whether an order is paid, the payment reference and method. We do not see or store your card, UPI or bank details. Razorpay handles payments.</li>
            <li>Complaint details: photos of the product and its packaging, photos of your bill, your description of the problem, what outcome you want, and the email address and address you give us.</li>
            <li>Messages: the WhatsApp messages you send us and our replies.</li>
            <li>Call details: if you call our customer number, the number you called from, the time, and the menu option you chose.</li>
          </ul>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">3. Why we use it</h2>
          <ul className="font-paragraph text-base mb-4 text-gray-700 list-disc list-inside space-y-2">
            <li>To take, confirm, pack and deliver your order.</li>
            <li>To send payment links and confirm payment.</li>
            <li>To handle complaints, refunds, replacements and quality issues.</li>
            <li>To reply to your questions on WhatsApp or by phone.</li>
            <li>To keep records required by tax and accounting laws.</li>
            <li>To improve our products and service.</li>
          </ul>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            We only send you offers or promotional messages if you have agreed to receive them. You can stop them anytime by replying STOP.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">4. Who we share it with</h2>
          <p className="font-paragraph text-base mb-4 text-gray-700">
            We do not sell your personal information. We share it only with service providers who help us run our business, and only what they need:
          </p>
          <ul className="font-paragraph text-base mb-4 text-gray-700 list-disc list-inside space-y-2">
            <li>Meta (WhatsApp): to send and receive messages.</li>
            <li>Razorpay: to process payments.</li>
            <li>Google (Google Workspace): to store order and complaint records.</li>
            <li>Make.com and PythonAnywhere: to run our automated order, complaint and messaging systems.</li>
            <li>Courier and delivery partners: your name, phone and address, to deliver your order.</li>
            <li>Our phone service provider: to route calls and record call details.</li>
          </ul>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            We may also share information if the law or a government authority requires it.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">5. How long we keep it</h2>
          <ul className="font-paragraph text-base mb-4 text-gray-700 list-disc list-inside space-y-2">
            <li>Order and payment records: as long as tax and accounting laws require.</li>
            <li>Complaint records: 2 years after the complaint is closed.</li>
            <li>Messages and call details: 1 year, unless needed for an open order or complaint.</li>
          </ul>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            After that, we delete or anonymise the information.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">6. How we protect it</h2>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            Access is limited to staff who need it for their work. Our service providers use industry-standard security. No system is perfectly secure, but we take reasonable steps to protect your information.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">7. Your rights</h2>
          <p className="font-paragraph text-base mb-4 text-gray-700">
            You can ask us to:
          </p>
          <ul className="font-paragraph text-base mb-4 text-gray-700 list-disc list-inside space-y-2">
            <li>tell you what information we hold about you;</li>
            <li>correct or update it;</li>
            <li>delete it, unless the law requires us to keep it;</li>
            <li>stop using it for promotional messages.</li>
          </ul>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            You can also withdraw your consent at any time.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">8. How to delete your data</h2>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            To ask us to delete your personal data, email premiumharvestbarhi@gmail.com or send "DELETE MY DATA" to us on WhatsApp, from the phone number you used with us. We will confirm and complete the request within 30 days, except for records the law requires us to keep (for example, tax invoices).
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">9. Children</h2>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            Our products and services are meant for adults. We do not knowingly collect information from anyone under 18.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">10. Grievance officer</h2>
          <p className="font-paragraph text-base mb-4 text-gray-700">
            If you have a concern about how we handle your information, contact:
          </p>
          <p className="font-paragraph text-base mb-4 text-gray-700">
            Name: Vikas<br />
            Email: vikas.jakhere@premiumharvest.in
          </p>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            We will reply within 7 days. If you are not satisfied with our reply, you can approach the Data Protection Board of India.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">11. Changes to this policy</h2>
          <p className="font-paragraph text-base mb-8 text-gray-700">
            We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
