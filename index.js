import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    /*
    const newCategory = await prisma.category.create({
        data: {
            name: "Computadoras"
        }
    })

    const newProduct = await prisma.product.create({
        data: {
            id: 1,
            name: "HP GAMING",
            price: 5000,
            stock: 20,
            categoryID: 1
        }
    })

    console.log(newCategory);
    console.log(newProduct);
    */
   
    const deleteProduct = await prisma.product.delete({
        where: {
            id: 1
        }
    })
    console.log(deleteProduct);

}

main()