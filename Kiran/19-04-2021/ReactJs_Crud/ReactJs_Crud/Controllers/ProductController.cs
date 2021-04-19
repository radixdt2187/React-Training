using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ReactJs_Crud.App_Start;
using ReactJs_Crud.Models;

namespace ReactJs_Crud.Controllers
{
   /* [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]*/
    //[TempClassFile]
    public class ProductController : ApiController
    {
        DB_KiranEntities DB = new DB_KiranEntities();
        [HttpPost]
    
        public object CreateProduct(Product product)
        {
            try
            {
                if (product.Id == 0)
                {
                    Product products = new Product();
                    products.ProductName = product.ProductName;
                    products.Price = product.Price;
                    products.Brand = product.Brand;
                    products.Colour = product.Colour;
                    DB.Products.Add(products);
                    DB.SaveChanges();
                    return new Response
                    {
                        Status = "Success",
                        Message = "Data inserted Successfully"
                    };
                }
                else
                {
                    var obj = DB.Products.Where(x => x.Id == product.Id).ToList().FirstOrDefault();
                    if(obj.Id>0)
                    {
                        obj.ProductName = product.ProductName;
                        obj.Price = product.Price;
                        obj.Brand = product.Brand;
                        obj.Colour = product.Colour;
                        DB.SaveChanges();
                        return new Response
                        {
                            Status = "Update Success",
                            Message = "Data updated Successfully"
                        };

                    }
                }
            }
            catch(Exception ex)
            {

            }
            return new Response
            {
                Status = "Error",  
                Message = "Data not insert"
            };


        }

        [HttpGet]  
        public object Getproduct()
  
        {  
            var prod = DB.Products.ToList();  
            return prod;  
        }


        [HttpDelete]  
        public object DeleteProducts(int id)
        {  
            var obj = DB.Products.Where(x => x.Id == id).ToList().FirstOrDefault();  
            DB.Products.Remove(obj);  
            DB.SaveChanges();  
            return new Response  
            {  
                Status = "Delete",  
                Message = "Delete Successfuly"  
            };  
        }  
        [HttpGet]  
        public object ProductDetailsById(int id)
        {  
            var obj = DB.Products.Where(x => x.Id == id).ToList().FirstOrDefault();  
            return obj;  
        }  


  
    }
}
