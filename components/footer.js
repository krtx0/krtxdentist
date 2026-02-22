class CustomFooter extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `

<footer class="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div class="grid md:grid-cols-4 gap-8 mb-8">

<div class="col-span-2">

<div class="flex items-center gap-2 mb-4">
<div class="w-8 h-8 bg-medical-800 rounded-lg flex items-center justify-center text-white">
<i data-lucide="shield-plus" class="w-5 h-5"></i>
</div>

<span class="text-xl font-semibold text-white">
Dr. KRTX's Dental Clinic
</span>
</div>

<p class="text-sm leading-relaxed mb-4 max-w-sm">
Providing exceptional dental care with a gentle touch. Led by Dr. KRTX , Gold Medalist in Dentistry, specializing in pediatric and preventive dental care.
</p>

<div class="flex gap-4">

<a href="#" class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-medical-800 hover:text-white transition-colors">
<i data-lucide="facebook" class="w-5 h-5"></i>
</a>

<a href="#" class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-medical-800 hover:text-white transition-colors">
<i data-lucide="instagram" class="w-5 h-5"></i>
</a>

<a href="#" class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-medical-800 hover:text-white transition-colors">
<i data-lucide="linkedin" class="w-5 h-5"></i>
</a>

</div>

</div>


<div>
<h4 class="text-white font-semibold mb-4">Quick Links</h4>

<ul class="space-y-2 text-sm">
<li><a href="#about" class="hover:text-white transition-colors">About Us</a></li>
<li><a href="#services" class="hover:text-white transition-colors">Services</a></li>
<li><a href="#why-us" class="hover:text-white transition-colors">Why Choose Us</a></li>
<li><a href="#faq" class="hover:text-white transition-colors">FAQ</a></li>
<li><a href="#contact" class="hover:text-white transition-colors">Book Appointment</a></li>
</ul>

</div>


<div>
<h4 class="text-white font-semibold mb-4">Contact Info</h4>

<ul class="space-y-3 text-sm">

<li class="flex items-start gap-2">
<i data-lucide="map-pin" class="w-4 h-4 mt-0.5"></i>
<span>123 Healthcare Avenue, Andheri West, Mumbai 400053</span>
</li>

<li class="flex items-center gap-2">
<i data-lucide="phone" class="w-4 h-4"></i>
<span>+91 8369013101</span>
</li>

<li class="flex items-center gap-2">
<i data-lucide="mail" class="w-4 h-4"></i>
<span>drKRTX@dentalclinic.com</span>
</li>

<li class="flex items-center gap-2">
<i data-lucide="clock" class="w-4 h-4"></i>
<span>Mon-Sat: 10AM - 8PM</span>
</li>

</ul>

</div>

</div>


<div class="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

<p class="text-sm">
© 2024 Dr. KRTX's Dental Clinic. All rights reserved.
</p>

<div class="flex gap-6 text-sm">
<a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
<a href="#" class="hover:text-white transition-colors">Terms of Service</a>
</div>

</div>

</div>
</footer>

`;

    // re-render lucide icons after injection
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

customElements.define("custom-footer", CustomFooter);
