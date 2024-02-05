import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  public prod_name:string[]=["book","pen","pencil","textbook","eraser"];
  public prod_price:number[]=[10,5,2,20,4];
  public prod_img:string[]=["https://m.media-amazon.com/images/I/71qMFxtcfdL._AC_UF1000,1000_QL80_.jpg","https://media.istockphoto.com/id/1059543698/photo/pen.jpg?s=612x612&w=0&k=20&c=xydmq5zg2BIGZGcjJfWF6uo-yeJ4mkdRNr4aA4zJ740=","https://5.imimg.com/data5/SELLER/Default/2022/6/KZ/CP/DZ/141339582/apsara-pencil.jpg","https://www.bu.edu/files/2017/09/resize-18-1651-TEXTBOOK-037.jpg","https://5.imimg.com/data5/TB/HB/MY-54644535/dust-free-eraser-500x500.jpg"];
  public prod_desc:string[]=["Captivating and insightful, our book transports readers to new worlds, providing an immersive journey through captivating storytelling and thought-provoking content.","leek and dependable, our pen is designed for effortless writing, delivering a refined and consistent performance for both professional and creative endeavors.","Versatile and reliable, our pencil is a go-to writing instrument, perfect for expressing creativity and ensuring smooth and precise everyday writing tasks.","Comprehensive and insightful, our textbook provides a rich learning experience, offering in-depth content to empower students in their academic journey.","Efficient and precise, our eraser product effortlessly removes pencil marks, offering a seamless and clean writing experience for students and professionals alike"];
}
