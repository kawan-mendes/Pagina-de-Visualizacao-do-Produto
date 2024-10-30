import Busca from "../../components/busca";
import Layout from "../../components/Layout/App";
import ProductCard from "../../components/ProductCard/App";
import img from "../../../public/product-thumb-5.jpeg"

const Product = {

   img: img,
  descontooff:"30",
  title:"Ténis",
  nomeproduto:"NIKE-SuperRep Go Neutral Running Shoe Men",
  preco:"200",
  precodesconto:"100"
}





export default function App() {
  return (
    <>
    <ProductCard img= { Product.img}
     descontooff={Product.descontooff}
     title={Product.title}
     nomeProduto={Product.nomeproduto}
     preco={Product.preco}
     precoDesconto={Product.precodesconto}
    />
    {/* <Layout>
      
    </Layout>
    <Busca></Busca> */}
    </>
  );
}
