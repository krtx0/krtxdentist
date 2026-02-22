class CustomNavbar extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `

<header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div class="flex justify-between items-center h-20">

<div class="flex items-center gap-2">
<div class="w-10 h-10 bg-medical-800 rounded-lg flex items-center justify-center text-white">
<i data-lucide="shield-plus"></i>
</div>

<div>
<h1 class="text-xl font-semibold text-stone-800">Dr. KRTX's</h1>
<p class="text-xs text-stone-500 uppercase">Dental Clinic</p>
</div>
</div>

<nav class="hidden md:flex items-center gap-8">
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#why-us">Why Choose Us</a>
<a href="#process">Process</a>
<a href="#faq">FAQ</a>
</nav>

<button id="mobile-btn" class="md:hidden">
<i data-lucide="menu"></i>
</button>

</div>

</div>

<div id="mobile-menu" class="hidden md:hidden bg-white border-t">
<div class="p-6 space-y-4">
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#why-us">Why Choose Us</a>
<a href="#process">Process</a>
<a href="#faq">FAQ</a>
</div>
</div>

</header>
`;

    const btn = this.querySelector("#mobile-btn");
    const menu = this.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Lucide icons auto work now
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

customElements.define("custom-navbar", CustomNavbar);
