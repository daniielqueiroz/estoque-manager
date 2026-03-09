// prisma/seed.ts
import { PrismaClient, SaleStatus } from "@prisma/client";

const prisma = new PrismaClient();

function pickCyclic<T>(arr: T[], idx: number): T {
  return arr[Math.abs(idx) % arr.length];
}

async function main() {
  await prisma.saleItem.deleteMany();
  await prisma.sale.deleteMany();
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Arroz Tipo 1",
        description: "Pacote 5kg",
        price: 29.99,
        quantity: 200,
        category: "Alimentos",
      },
      {
        name: "Feijao Carioca",
        description: "Pacote 1kg",
        price: 8.5,
        quantity: 300,
        category: "Alimentos",
      },
      {
        name: "Macarrao Espaguete",
        description: "Pacote 500g",
        price: 4.75,
        quantity: 250,
        category: "Alimentos",
      },
      {
        name: "Farinha de Trigo",
        description: "Pacote 1kg",
        price: 5.2,
        quantity: 180,
        category: "Alimentos",
      },
      {
        name: "Acucar Cristal",
        description: "Pacote 1kg",
        price: 4.9,
        quantity: 220,
        category: "Alimentos",
      },
      {
        name: "Sal Refinado",
        description: "Pacote 1kg",
        price: 2.5,
        quantity: 300,
        category: "Alimentos",
      },
      {
        name: "Oleo de Soja",
        description: "Garrafa 900ml",
        price: 7.8,
        quantity: 150,
        category: "Alimentos",
      },
      {
        name: "Leite Integral",
        description: "Caixa 1L",
        price: 6.2,
        quantity: 400,
        category: "Alimentos",
      },
      {
        name: "Manteiga com Sal",
        description: "Pote 200g",
        price: 12.9,
        quantity: 120,
        category: "Alimentos",
      },
      {
        name: "Biscoito Recheado",
        description: "Pacote 140g",
        price: 3.25,
        quantity: 350,
        category: "Alimentos",
      },
      {
        name: "Maionese Tradicional",
        description: "Pote 500g",
        price: 9.9,
        quantity: 130,
        category: "Alimentos",
      },
      {
        name: "Molho de Tomate",
        description: "Sache 340g",
        price: 4.5,
        quantity: 200,
        category: "Alimentos",
      },
      {
        name: "Cafe Torrado",
        description: "Pacote 500g",
        price: 18.75,
        quantity: 160,
        category: "Bebidas",
      },
      {
        name: "Suco de Laranja",
        description: "Caixa 1L",
        price: 8.9,
        quantity: 100,
        category: "Bebidas",
      },
      {
        name: "Refrigerante Cola",
        description: "Garrafa 2L",
        price: 9.5,
        quantity: 200,
        category: "Bebidas",
      },
      {
        name: "Agua Mineral",
        description: "Garrafa 500ml",
        price: 2.0,
        quantity: 500,
        category: "Bebidas",
      },
      {
        name: "Cerveja Lager",
        description: "Lata 350ml",
        price: 4.5,
        quantity: 300,
        category: "Bebidas",
      },
      {
        name: "Vinho Tinto Seco",
        description: "Garrafa 750ml",
        price: 29.9,
        quantity: 80,
        category: "Bebidas",
      },
      {
        name: "Shampoo Anticaspa",
        description: "Frasco 400ml",
        price: 24.9,
        quantity: 100,
        category: "Higiene",
      },
      {
        name: "Condicionador Hidratante",
        description: "Frasco 400ml",
        price: 22.5,
        quantity: 90,
        category: "Higiene",
      },
      {
        name: "Sabonete Liquido",
        description: "Frasco 250ml",
        price: 7.99,
        quantity: 200,
        category: "Higiene",
      },
      {
        name: "Creme Dental Menta",
        description: "Tubo 90g",
        price: 5.75,
        quantity: 250,
        category: "Higiene",
      },
      {
        name: "Desodorante Roll-on",
        description: "Frasco 50ml",
        price: 11.9,
        quantity: 150,
        category: "Higiene",
      },
      {
        name: "Detergente Neutro",
        description: "Frasco 500ml",
        price: 3.99,
        quantity: 400,
        category: "Limpeza",
      },
      {
        name: "Sabao em Po",
        description: "Caixa 1kg",
        price: 14.5,
        quantity: 150,
        category: "Limpeza",
      },
      {
        name: "Agua Sanitaria",
        description: "Garrafa 1L",
        price: 5.2,
        quantity: 200,
        category: "Limpeza",
      },
      {
        name: "Esponja de Cozinha",
        description: "Pacote c/ 3 unid",
        price: 4.99,
        quantity: 300,
        category: "Limpeza",
      },
      {
        name: "Lampada LED 9W",
        description: "Bivolt 6500K",
        price: 16.9,
        quantity: 120,
        category: "Eletronicos",
      },
      {
        name: "Pilha AA",
        description: "Cartela c/ 4 unid",
        price: 12.9,
        quantity: 200,
        category: "Eletronicos",
      },
    ],
  });

  const allProducts = await prisma.product.findMany();

  const customers = [
    "Ana Paula Silva",
    "Bruno Costa",
    "Carla Mendes",
    "Diego Ferreira",
    "Elisa Santos",
    "Felipe Rocha",
    "Gabriela Lima",
    "Henrique Oliveira",
    "Isabela Martins",
    "Joao Pedro Souza",
    "Karina Alves",
    "Leonardo Pereira",
    "Marina Gomes",
    "Nicolas Barbosa",
    "Olivia Carvalho",
    "Pedro Henrique Nunes",
    "Quenia Ribeiro",
    "Rafael Azevedo",
    "Sabrina Lopes",
    "Thiago Monteiro",
    "Ursula Figueiredo",
    "Vitor Hugo Dias",
    "Wanessa Araujo",
    "Xavier Correia",
    "Yasmin Teixeira",
  ];

  // Statuses: ~10% CANCELLED
  const statuses: SaleStatus[] = [
    "CONFIRMED",
    "CONFIRMED",
    "CONFIRMED",
    "CONFIRMED",
    "CONFIRMED",
    "CONFIRMED",
    "CONFIRMED",
    "CONFIRMED",
    "CONFIRMED",
    "CANCELLED",
  ];

  // 210 vendas distribuídas de 02/01/2026 a 08/03/2026 (~65 dias)
  const startDate = new Date("2026-01-02T08:00:00.000Z");
  const totalDays = 65;
  const totalSales = 210;

  let salesCreated = 0;

  for (let i = 0; i < totalSales; i++) {
    const dayOffset = Math.floor((i / totalSales) * totalDays);
    const hourOffset = (i * 67) % 10; // varia entre 0-9, horário de 8h às 17h
    const minuteOffset = (i * 37) % 60;

    const saleDate = new Date(startDate);
    saleDate.setDate(saleDate.getDate() + dayOffset);
    saleDate.setHours(8 + hourOffset, minuteOffset, 0, 0);

    const customer = pickCyclic(customers, i * 3 + 7);
    const status = pickCyclic(statuses, i * 7);

    // 1 a 4 itens por venda de forma determinística
    const itemCount = (i % 4) + 1;
    const items: { productId: string; quantity: number; unitPrice: number; createdAt: Date }[] =
      [];

    for (let j = 0; j < itemCount; j++) {
      const product = pickCyclic(allProducts, i * 5 + j * 11);
      const qty = (j % 3) + 1;

      // evita produto duplicado na mesma venda
      if (!items.find((it) => it.productId === product.id)) {
        items.push({
          productId: product.id,
          quantity: qty,
          unitPrice: product.price,
          createdAt: saleDate,
        });
      }
    }

    const totalAmount = items.reduce(
      (acc, it) => acc + it.quantity * it.unitPrice,
      0,
    );

    await prisma.sale.create({
      data: {
        customerName: customer,
        totalAmount,
        status,
        createdAt: saleDate,
        items: { create: items },
      },
    });

    salesCreated++;
  }

  console.log("Seed executado com sucesso.");
  console.log(`Produtos inseridos: ${allProducts.length}`);
  console.log(`Vendas inseridas: ${salesCreated}`);
}

main()
  .catch((error) => {
    console.error("Erro ao executar seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
