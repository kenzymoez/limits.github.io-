







const productsData = [
  {id:1,title:'Living room',desc:'Neat design with subtle elegance.',price:'0T5L',img:'0T5L.jpg'},
  {id:2,title:'Bathroom',desc:'Cozy tones for a comfortable setting.',price:'2FFA',img:'2FFA.jpg'},
  {id:3,title:'Living room',desc:'Comfortable design with modern vibes.',price:'3WKO',img:'3WKO.jpg'},
  {id:4,title:'Bedroom',desc:'A restful space with familiar warmth.',price:'Z3BT',img:'Z3BT.jpg'},
  {id:5,title:'Bathroom',desc:'Smooth surfaces with refined simplicity.',price:'4QV8',img:'4QV8.jpg'},
  {id:6,title:'Living room',desc:'A spacious, uncluttered style.',price:'7S9W',img:'7S9W.jpg'},
  {id:7,title:'Dining',desc:'A table that blends ease with style.',price:'9TH1',img:'9TH1.jpg'},
  {id:8,title:'Bathroom',desc:'Functional layouts with modern charm.',price:'24YG',img:'24YG.jpg'},
  {id:9,title:'Bedroom',desc:'Spacious design with modern comfort.',price:'54LR',img:'54LR.jpg'},
  {id:10,title:'Bathroom',desc:'Clean lines and a clutter-free atmosphere.',price:'089I',img:'089I.jpg'},
  {id:11,title:'Living room',desc:'A sleek-design sofa designed for cozy gatherings — perfect for lounge corners.',price:'93I6',img:'93I6.jpg'},
  {id:12,title:'Living room',desc:'A smart centerpiece for the room.',price:'7612',img:'7612.jpg'},
  {id:13,title:'Living room',desc:'Clean lines with a fresh look.',price:'A19O',img:'A19O.jpg'},
  {id:14,title:'Bedroom',desc:'Subtle beauty with enduring design.',price:'BAYA',img:'BAYA.jpg'},
  {id:15,title:'Dining',desc:'Subtle elegance with a modern twist.',price:'CSRB',img:'CSRB.jpg'},
  {id:16,title:'Bedroom',desc:'Modern style blended with warmth.',price:'DLM8',img:'DLM8.jpg'},
  {id:17,title:'Bedroom',desc:'Familiar details with elegance.',price:'DY72',img:'DY72.jpg'},
  {id:18,title:'Bathroom',desc:'Smooth textures for a clean finish.',price:'ERJC',img:'ERJC.jpg'},
  {id:19,title:'Living room',desc:'Smooth finishes with a modern edge — less is more in this design.',price:'HHYB',img:'HHYB.jpg'},
  {id:20,title:'Bedroom',desc:'Sleek lines with a calm atmosphere.',price:'JRQ1',img:'JRQ1.jpg'},
  {id:21,title:'Kitchen',desc:'Cozy tones and familiar details that create a welcoming atmosphere.',price:'JXO9',img:'JXO9.jpg'},
  {id:22,title:'Kitchen',desc:'A design that feels both elegant and familiar.',price:'QY3X',img:'QY3X.jpg'},
  {id:23,title:'Bathroom',desc:'Gentle details that bring warmth and grace.',price:'RV6S',img:'RV6S.jpg'},
  {id:24,title:'Bathroom',desc:'Comfortable yet stylish design.',price:'TBNX',img:'TBNX.jpg'},
  {id:25,title:'Kitchen',desc:'Striking finishes with a confident modern edge.',price:'YJE4',img:'YJE4.jpg'},
  {id:26,title:'Kitchen',desc:'Striking finishes with a confident modern edge.',price:'YJE4',img:'YJE4_2.jpg'}
];

const productsEl = document.getElementById('products');
const template = document.getElementById('cardTemplate');

function renderProducts(list){
  productsEl.innerHTML='';
  list.forEach(p => {
    const node = template.content.cloneNode(true);
    node.querySelector('.prod-img').src = p.img;
    node.querySelector('.prod-img').alt = p.title + ' image';
    node.querySelector('.prod-title').textContent = p.title;
    node.querySelector('.prod-desc').textContent = p.desc;
    node.querySelector('.price').textContent = p.price;
    const detailsBtn = node.querySelector('.detailsBtn');
    detailsBtn.addEventListener('click', ()=> openModal(p));
    productsEl.appendChild(node);
  });
}

function openModal(product){
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden','false');
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = 'Product code: ' + product.price;

}

function closeModal(){
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden','true');
}

document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', (e)=>{ if(e.target.id==='modal') closeModal(); });
document.getElementById('search').addEventListener('input', (e)=>{
  const q = e.target.value.toLowerCase().trim();
  renderProducts(productsData.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
});

renderProducts(productsData);

window.addEventListener("scroll", function() {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {header.classList.add("scrolled");
  } else {header.classList.remove("scrolled");}
  });

  const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {backToTopBtn.style.display = "block";
  } else {backToTopBtn.style.display = "none";}
});

backToTopBtn.addEventListener("click", (e) => {e.preventDefault();
  const start = window.scrollY;
  const duration = 1500; // 1.5 seconds
  const startTime = performance.now();

function scrollStep(currentTime) {
  const elapsed = currentTime - startTime;
  const progress = Math.min(elapsed / duration, 1);
    // Ease-out effect: fast at first, slow near top
    const ease = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, start * (1 - ease));
    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }
  requestAnimationFrame(scrollStep);
});