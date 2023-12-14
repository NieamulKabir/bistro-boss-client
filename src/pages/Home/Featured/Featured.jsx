import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20 bg-fixed">
            <SectionTitle subHeading='check it out' heading="Featured Item"></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-10 px-36 bg-slate-400 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10"> 
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get  some?</p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium temporibus repellat amet. Veniam repellendus rerum consequuntur fugit et laborum dolore rem molestias ex illum, eum corporis provident corrupti quibusdam consectetur assumenda, deleniti incidunt, praesentium eligendi soluta animi inventore dignissimos. Suscipit inventore accusamus tempore dolorum sint molestias voluptas ratione, consectetur ullam! </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;