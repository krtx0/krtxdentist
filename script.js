// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
    } else {
        icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

// FAQ Accordion
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-content').forEach(item => {
        if (item !== content && !item.classList.contains('hidden')) {
            item.classList.add('hidden');
            item.previousElementSibling.querySelector('.faq-icon').classList.remove('rotate-45');
        }
    });
    
    // Toggle current FAQ
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-45');
}

// Service Modal Data
const serviceData = {
    preventive: {
        title: 'Preventive Dentistry',
        content: `
            <div class="space-y-4 text-stone-600">
                <p class="leading-relaxed">Preventive dentistry is the foundation of lifelong oral health. Our comprehensive preventive services are designed to stop dental problems before they start, saving you time, discomfort, and expense.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">What We Offer:</h4>
                <ul class="space-y-3 ml-1">
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Regular Checkups:</strong> Comprehensive examinations every 6 months to detect issues early, including oral cancer screening and gum health assessment.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Professional Cleaning:</strong> Remove plaque and tartar buildup that regular brushing misses, plus polishing for a fresh, clean feeling.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Oral Hygiene Guidance:</strong> Personalized coaching on brushing, flossing techniques, and product recommendations for your specific needs.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Early Detection:</strong> Digital X-rays and intraoral imaging to catch cavities, cracks, and other issues before they become painful problems.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Protective Treatments:</strong> Fluoride applications and dental sealants for children and adults at risk of decay.</span></li>
                </ul>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Who Should Consider This?</h4>
                <p class="leading-relaxed">Preventive care is essential for everyone, from toddlers to seniors. We especially recommend frequent checkups for children establishing dental habits, patients with a history of gum disease, and those with medical conditions affecting oral health.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Benefits:</h4>
                <p class="leading-relaxed">Prevent costly restorative procedures, avoid dental emergencies, maintain fresh breath, keep your natural teeth for life, and enjoy the confidence of a healthy smile.</p>
            </div>
        `
    },
    pediatric: {
        title: 'Pediatric Dentistry',
        content: `
            <div class="space-y-4 text-stone-600">
                <p class="leading-relaxed">We create positive dental experiences that set your child up for a lifetime of oral health. Dr. KRTX's specialized training in pediatric dentistry ensures your child receives gentle, age-appropriate care in an environment designed specifically for young patients.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Our Child-Focused Services:</h4>
                <ul class="space-y-3 ml-1">
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>First Dental Visits:</strong> We recommend the first visit by age 1. These early appointments focus on familiarization, parent education, and gentle examination.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Cavity Prevention:</strong> Fluoride treatments, dental sealants on permanent molars, and dietary guidance to protect developing teeth.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Gentle Restorative Care:</strong> If treatment is needed, we use child-appropriate techniques, tell-show-do explanations, and minimal sedation when necessary.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Habit Counseling:</strong> Guidance on thumb sucking, pacifier use, and mouth breathing to ensure proper jaw development.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Growth Monitoring:</strong> Tracking dental and facial development to identify need for orthodontic intervention early.</span></li>
                </ul>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Anxiety-Free Environment:</h4>
                <p class="leading-relaxed">Our pediatric zone features child-friendly decor, small-sized equipment, and a patient, unhurried approach. We explain procedures in age-appropriate language, use positive reinforcement, and allow parents to be present during treatment to ensure comfort.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Benefits of Early Care:</h4>
                <p class="leading-relaxed">Children who have positive early dental experiences grow into adults who prioritize oral health. Early intervention prevents complex issues, reduces future dental costs, and establishes proper oral hygiene habits that last a lifetime.</p>
            </div>
        `
    },
    rct: {
        title: 'Root Canal Treatment (RCT)',
        content: `
            <div class="space-y-4 text-stone-600">
                <p class="leading-relaxed">Modern root canal treatment is nothing like the painful procedures of the past. Using advanced techniques and precision equipment, Dr. KRTX performs comfortable RCT that relieves pain and saves your natural tooth, avoiding the need for extraction and replacement.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">When is RCT Needed?</h4>
                <p class="leading-relaxed">Deep decay reaching the pulp, cracked or fractured teeth, repeated dental procedures on a tooth, or severe trauma can all necessitate root canal therapy. Symptoms include persistent pain, sensitivity to hot/cold, gum swelling, or tooth discoloration.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Our Precision Process:</h4>
                <ul class="space-y-3 ml-1">
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Advanced Diagnosis:</strong> Digital X-rays and 3D imaging to map the exact anatomy of your root canals before treatment begins.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Comfort Management:</strong> Local anesthesia ensures the procedure is painless. We also offer sedation options for anxious patients.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Microscopic Precision:</strong> Using dental operating microscopes and rotary endodontic instruments for thorough cleaning and shaping of complex canal systems.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Biocompatible Filling:</strong> Sealing the cleaned canals with gutta-percha and adhesive cement to prevent reinfection.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Restoration:</strong> Placement of a crown to protect the treated tooth and restore full chewing function.</span></li>
                </ul>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Benefits:</h4>
                <p class="leading-relaxed">Eliminates pain caused by infection, preserves your natural tooth (maintaining jawbone integrity and bite alignment), prevents spread of infection to other teeth or systemic health issues, and restores normal chewing and sensation.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Recovery:</h4>
                <p class="leading-relaxed">Most patients return to normal activities the next day. Mild sensitivity for a few days is normal and managed with over-the-counter pain relievers. We provide detailed aftercare instructions and follow-up to ensure successful healing.</p>
            </div>
        `
    },
    restorative: {
        title: 'Restorative Dentistry',
        content: `
            <div class="space-y-4 text-stone-600">
                <p class="leading-relaxed">Whether you have damaged, decayed, or missing teeth, our restorative solutions bring back function and aesthetics. We use biocompatible, durable materials that mimic natural tooth structure for seamless, long-lasting results.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Restoration Options:</h4>
                <ul class="space-y-3 ml-1">
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Tooth-Colored Fillings:</strong> Composite resin fillings that bond directly to tooth structure, matching your natural color while preserving more healthy tooth than traditional amalgam.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Dental Crowns:</strong> Custom-fabricated ceramic, zirconia, or porcelain-fused-to-metal caps that cover damaged teeth to restore strength, shape, and appearance.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Bridges:</strong> Fixed prosthetics that replace one or more missing teeth by anchoring to adjacent natural teeth or implants, restoring your bite and preventing tooth shifting.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Inlays & Onlays:</strong> Conservative restorations for teeth with moderate decay or damage—stronger than fillings but less invasive than full crowns.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Implant Restorations:</strong> Crowns and bridges supported by dental implants for the most secure, natural-feeling tooth replacement option.</span></li>
                </ul>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">The Restoration Process:</h4>
                <p class="leading-relaxed">We begin with a comprehensive examination and digital imaging to assess the extent of damage. For crowns and bridges, we use digital impressions (no messy molds) and work with top-tier dental labs for precise fabrication. Temporary restorations protect your teeth while permanent ones are crafted, ensuring you're never without a functional smile.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Materials & Technology:</h4>
                <p class="leading-relaxed">We use only biocompatible, metal-free options when possible—IPS e.max ceramic for anterior aesthetics, zirconia for posterior strength, and high-grade composite resins. All materials are BPA-free and hypoallergenic, ensuring safety along with beauty.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Functional Restoration:</h4>
                <p class="leading-relaxed">Beyond aesthetics, we focus on occlusion (bite alignment) to ensure your restored teeth work harmoniously with your jaw joints and muscles. This prevents future wear, TMJ issues, and ensures comfortable chewing.</p>
            </div>
        `
    },
    cosmetic: {
        title: 'Cosmetic Dentistry',
        content: `
            <div class="space-y-4 text-stone-600">
                <p class="leading-relaxed">Your smile is your most important accessory. Our cosmetic services combine artistry with dental science to create natural-looking, beautiful enhancements that complement your facial features and personality. We believe in "conservative cosmetics"—achieving dramatic results with minimal intervention.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Cosmetic Solutions:</h4>
                <ul class="space-y-3 ml-1">
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Professional Whitening:</strong> In-office power whitening using advanced LED technology for immediate results, or custom take-home trays for gradual brightening. Safe for enamel, effective on coffee, wine, and tobacco stains.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Porcelain Veneers:</strong> Ultra-thin ceramic shells bonded to front surfaces to correct gaps, chips, severe discoloration, or mild misalignment. Minimal preparation preserves your natural tooth structure.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Cosmetic Bonding:</strong> Quick, affordable resin application to repair chips, close small gaps, or reshape teeth in a single visit—ideal for minor imperfections.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Smile Design:</strong> Digital smile simulation using your photos to preview results before treatment. We analyze tooth proportions, gum line symmetry, lip dynamics, and facial features for harmonious results.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Gum Contouring:</strong> Laser reshaping of gum tissue to correct gummy smiles or uneven gum lines, revealing more of your natural tooth structure.</span></li>
                </ul>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">The Cosmetic Process:</h4>
                <p class="leading-relaxed">We begin with a comprehensive smile analysis and discussion of your goals. Using digital photography and 3D scanning, we create a mock-up of your proposed smile for your approval. Only then do we proceed with treatment, ensuring the final result matches your vision and expectations.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Natural Aesthetics:</h4>
                <p class="leading-relaxed">We avoid "Chiclet" or overly white artificial looks. Instead, we match restorations to natural tooth translucency, surface texture, and subtle color gradations. The result is a smile that looks healthy and authentic, not obviously "done."</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Confidence Impact:</h4>
                <p class="leading-relaxed">Cosmetic improvements often translate to professional and social benefits. Patients report smiling more freely, feeling more confident in photographs, and making better first impressions. It's an investment in both your appearance and self-assurance.</p>
            </div>
        `
    },
    orthodontics: {
        title: 'Orthodontics',
        content: `
            <div class="space-y-4 text-stone-600">
                <p class="leading-relaxed">Straight teeth aren't just about aesthetics—they're easier to clean, less prone to wear, and contribute to proper jaw function. Whether you're a teen or adult, we offer orthodontic solutions tailored to your lifestyle, from discreet clear aligners to efficient traditional braces.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Treatment Options:</h4>
                <ul class="space-y-3 ml-1">
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Clear Aligners:</strong> Removable, transparent trays (Invisalign/others) that gradually shift teeth without metal brackets. Ideal for mild to moderate crowding or spacing. Remove for eating and brushing.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Ceramic Braces:</strong> Traditional bracket-and-wire system using tooth-colored or clear brackets for a less noticeable appearance than metal. Effective for complex movements.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Self-Ligating Braces:</strong> Advanced bracket system using sliding mechanisms instead of elastic ties, reducing friction, appointment frequency, and overall treatment time.</span></li>
                    <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0"></i><span><strong>Retainers:</strong> Fixed and removable options to maintain results after active treatment, ensuring your smile stays aligned for life.</span></li>
                </ul>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Comprehensive Evaluation:</h4>
                <p class="leading-relaxed">We assess not just tooth position but jaw relationships, facial symmetry, airway health, and bite function. This holistic approach ensures orthodontic treatment enhances your overall oral health, not just alignment.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Adult Orthodontics:</h4>
                <p class="leading-relaxed">It's never too late for straighter teeth. We offer aesthetic options designed for professional adults, including lingual braces (hidden behind teeth) and clear aligners that fit seamlessly into business and social settings. Treatment may coordinate with restorative work for comprehensive smile rejuvenation.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Treatment Duration:</h4>
                <p class="leading-relaxed">Simple cases may resolve in 6-12 months, while comprehensive treatment typically takes 18-24 months. We use digital treatment planning to predict timelines accurately and show you projected results before starting.</p>
                
                <h4 class="font-semibold text-stone-800 mt-6 mb-2">Benefits Beyond Straight Teeth:</h4>
                <p class="leading-relaxed">Proper alignment reduces risk of gum disease (easier cleaning), prevents uneven tooth wear and fractures, can alleviate TMJ pain and headaches, improves speech clarity, and creates facial symmetry that enhances overall appearance.</p>
            </div>
        `
    }
};

// Modal Functions
function openServiceModal(serviceKey) {
    const modal = document.getElementById('service-modal');
    const content = document.getElementById('modal-content');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    const data = serviceData[serviceKey];
    if (!data) {
        console.error('Service not found:', serviceKey);
        return;
    }
    
    title.textContent = data.title;
    body.innerHTML = data.content;
    
    modal.classList.remove('hidden');
    // Small delay to allow display:block to apply before adding opacity class
    setTimeout(() => {
        content.classList.add('scale-100');
        content.classList.remove('scale-95', 'opacity-0');
    }, 10);
    
    // Re-initialize icons in the modal content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    const content = document.getElementById('modal-content');
    
    content.classList.remove('scale-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('service-modal');
        if (!modal.classList.contains('hidden')) {
            closeServiceModal();
        }
    }
});

// Appointment Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointment-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Submitting...</span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your appointment request. Dr. KRTX\'s team will contact you within 24 hours to confirm your appointment.');
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Ensure Lucide icons are created after all content loads
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});