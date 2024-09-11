import Retro from '../assets/images/image-retro-pcs.jpg'
import Laptops from '../assets/images/image-top-laptops.jpg'
import Gaming from '../assets/images/image-gaming-growth.jpg'
function List(){
return <section className='p-5 space-y-9 xxl:hidden'>
<div className='flex gap-5'>
  <div className='flex-shrink-0'>
    <img className='h-40 w-30 object-cover' src={Retro} alt="" />
  </div>
  <div>
    <h1 className='text-4xl font-bold font-Inter text-primary-SoftRed mb-3'>01<br /></h1>
    <p className='font-Inter font-bold text-lg mb-2'>Reviving Retro PCs</p>
    <p className='font-Inter text-sm text-neutral-DarkGrayishBlue mb-2 leading-relaxed'>What happens when old PCs are given modern upgrades?</p>
  </div>
</div>
<div className='flex gap-5'>
  <div className='flex-shrink-0'>
    <img className='h-40 w-30 object-cover' src={Laptops} alt="" />
  </div>
  <div>
    <h1 className='text-4xl font-bold font-Inter text-primary-SoftRed mb-3'>02<br /></h1>
    <p className='font-Inter font-bold text-lg mb-2'>Top 10 Laptops of 2022</p>
    <p className='font-Inter text-sm text-neutral-DarkGrayishBlue mb-2 leading-relaxed'>Our best picks for various needs and budgets.</p>
  </div>
</div>
<div className='flex gap-5'>
  <div className='flex-shrink-0'>
    <img className='h-40 w-30 object-cover' src={Gaming} alt="" />
  </div>
  <div>
    <h1 className='text-4xl font-bold font-Inter text-primary-SoftRed mb-3'>03<br /></h1>
    <p className='font-Inter font-bold text-lg mb-2'>The Growth of Gaming</p>
    <p className='font-Inter text-sm text-neutral-DarkGrayishBlue mb-2 leading-relaxed'>How the pandemic has sparked fresh opportunities.</p>
  </div>
</div>
</section>





}

export default List;