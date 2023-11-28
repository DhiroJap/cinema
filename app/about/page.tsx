import { Metadata } from 'next';
import { Page } from '@/styles';


export const metadata: Metadata = {
  title: 'GALAXY CINEMA - About Us',
  description: 'About Page',
};

export default function About() {
  return(
    <>
    <Page justifyContent='center' alignItems='center' >

    <h1 className='title'>Test</h1>
    <img src="https://21cineplex.com//theme/v5/assets/img/detail-cinema-1.jpg" alt="cinema-img" width= "1000" height= '400'/>
    <br />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, fuga explicabo? Quas, tempora! Pariatur accusamus hic dolore laboriosam esse vero iure quia eius, illum praesentium autem molestias, ipsum necessitatibus voluptatibus?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eaque. Error obcaecati alias tempore aliquam voluptates, libero voluptatem, cupiditate repudiandae porro numquam necessitatibus rem explicabo consequuntur architecto optio quod soluta.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, porro magni delectus fugiat expedita natus, obcaecati cumque ullam vero iure tempore in error recusandae. Quibusdam vero blanditiis animi voluptatum autem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo at quas quisquam in quos deleniti totam repellat error ad beatae rerum, fuga culpa tempora enim autem dicta iusto hic?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat pariatur dolores magnam natus ipsum consequatur, laudantium placeat iure hic libero dignissimos, excepturi quod saepe! Esse nostrum sit magnam ipsa!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro fuga tempora deserunt possimus quam perferendis ea, sunt id! Suscipit rerum ab maxime quasi eveniet neque assumenda a culpa aspernatur?
    </p>
    </Page>
   
    </>
  )
}
