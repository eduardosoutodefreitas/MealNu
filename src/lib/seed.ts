import { prisma } from "../lib/prisma";

async function main() {
  const foodCategoriesData = [
    {
      name: "Frutos do mar",
    },
    {
      name: "Carnes",
    },
    {
      name: "Petiscos",
    },
    {
      name: "Drinks",
    },
    {
      name: "Kids",
    },
  ];
  const dishesData = [
    {
      name: "Filé de salmão",
      description:
        "Deixe-se encantar por nosso Salmão Grelhado com Crosta de Especiarias, uma verdadeira explosão de sabores que certamente conquistará seu paladar. Nossos chefs habilidosos selecionam cuidadosamente os filés de salmão mais frescos, conferindo-lhes uma camada delicada de especiarias exóticas, incluindo páprica defumada, cominho, gengibre, coentro e alho em pó. O resultado é uma crosta irresistivelmente crocante que realça o sabor natural do salmão.",
      imageUrl:
        "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg",
      price: 159.9,
      peopleServed: 2,
      foodCategory: "Frutos do mar",
      waitingTime: 50,
    },
    {
      name: "Macarronada de frutos do mar",
      description:
        "Explore as profundezas do sabor marinho com a nossa irresistível Macarronada de Frutos do Mar. Esta deliciosa criação culinária combina a frescura do mar com a perfeição da massa, proporcionando uma experiência gastronômica única e memorável. Nossos chefs habilidosos selecionam a dedo uma variedade de frutos do mar frescos, incluindo camarões suculentos, lulas tenras e mexilhões saborosos, preparados com maestria em um molho especial à base de tomates frescos, alho perfumado e uma pitada de pimenta vermelha para um toque de calor.",
      imageUrl:
        "https://images.pexels.com/photos/14965999/pexels-photo-14965999/free-photo-of-delicioso-saboroso-gostoso-jantar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 139.9,
      peopleServed: 2,
      foodCategory: "Frutos do mar",
      waitingTime: 40,
    },
    {
      name: "Macarrão à bolonhesa",
      description:
        "Uma porção generosa de macarrão cozido al dente, harmoniosamente combinado com nosso molho à bolonhesa caseiro e irresistível. Perfeito para os pequenos apreciadores de uma refeição reconfortante e saborosa. O molho à bolonhesa é preparado com carinho, incorporando carne moída suculenta e um toque especial de temperos selecionados. Uma delícia que fará as crianças sorrirem em cada garfada.",
      imageUrl:
        "https://images.pexels.com/photos/3908197/pexels-photo-3908197.jpeg",
      price: 35.9,
      peopleServed: 1,
      foodCategory: "Kids",
      waitingTime: 30,
    },
    {
      name: "Camarão alho e óleo",
      description:
        "Uma explosão de sabores marinhos! Camarões cuidadosamente fritos até a crocância perfeita.  Prepare-se para desfrutar de uma verdadeira festa de sabores marinhos que fará você desejar mais a cada mordida. Aproveite esta delícia em excelente companhia ou saboreie como um prato singular de dar água na boca.",
      imageUrl:
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=745&q=80",
      price: 59.9,
      peopleServed: 2,
      foodCategory: "Petiscos",
      waitingTime: 30,
    },
    {
      name: "Hamburguer da casa",
      description:
        "Uma experiência gastronômica única espera por você em nosso Hambúrguer da Casa. Com uma suculenta carne grelhada no ponto perfeito, este hambúrguer é uma das estrela do nosso cardápio. Para elevar o sabor, adicionamos fatias crocantes de bacon defumado e uma generosa porção de nosso molho especial, criando uma combinação que derrete na boca. Um verdadeiro prazer para os amantes de hambúrgueres e sabores autênticos.",
      imageUrl:
        "https://images.pexels.com/photos/3742373/pexels-photo-3742373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 39.9,
      peopleServed: 1,
      foodCategory: "Petiscos",
      waitingTime: 20,
    },
    {
      name: "Picanha premium",
      description:
        "Prepare-se para uma indulgência única com a nossa Picanha Premium. Selecionamos cuidadosamente o corte mais nobre e suculento de picanha, que é delicadamente grelhado até atingir a perfeição. A carne é macia e suculenta, desprendendo-se em suculentos pedaços a cada mordida. Acompanhada de uma seleção de molhos especiais e guarnições à sua escolha, esta Picanha Premium é um verdadeiro deleite para o paladar, ideal para ser apreciada em boa companhia.",
      imageUrl:
        "https://images.pexels.com/photos/7807394/pexels-photo-7807394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 129.9,
      peopleServed: 2,
      foodCategory: "Carnes",
      waitingTime: 45,
    },
    {
      name: "Porção de pastéis de camarão",
      description:
        "Saboreie a combinação perfeita entre crocância e sabor com a nossa Porção de Pastéis de Camarão. Cada pastel é recheado generosamente com camarões frescos e suculentos, temperados com um toque especial de especiarias. Fritos até ficarem dourados e irresistíveis, esses pastéis são ideais para compartilhar momentos deliciosos com alguém especial.",
      imageUrl:
        "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 49.9,
      peopleServed: 1,
      foodCategory: "Petiscos",
      waitingTime: 15,
    },
    {
      name: "Teriyaki de salmão",
      description:
        "Mergulhe nas notas exóticas do nosso Teriyaki de Salmão, um prato que combina a delicadeza do salmão grelhado com o sabor doce e salgado do molho teriyaki. O salmão é cuidadosamente caramelizado no teriyaki, resultando em um prato deliciosamente suculento e repleto de umami. Uma experiência de sabor que agradará os paladares mais refinados.",
      imageUrl:
        "https://i.pinimg.com/564x/35/5a/90/355a90e22ae5c5ba6d4d462431a6c479.jpg",
      price: 79.9,
      peopleServed: 1,
      foodCategory: "Frutos do mar",
      waitingTime: 35,
    },
    {
      name: "Bisteca de porco",
      description:
        "Deleite-se com a suculência e o sabor único da nossa Bisteca de Porco, perfeitamente grelhada e temperada. Acompanhada de deliciosas batatas coradas, crocantes por fora e macias por dentro, essa combinação é um verdadeiro clássico que despertará sensações nostálgicas e prazeres gastronômicos. Ideal para desfrutar a dois e criar memórias inesquecíveis.",
      imageUrl:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
      price: 89.9,
      peopleServed: 2,
      foodCategory: "Carnes",
      waitingTime: 40,
    },
    {
      name: "Iscas de contra filé",
      description:
        "Se você aprecia carne macia e saborosa, vai se apaixonar pela nossa Porção de Iscas de Contrafilé. Essas suculentas iscas são temperadas com especiarias selecionadas e grelhadas até ficarem douradas e irresistíveis. Acompanhadas de molhos especiais à sua escolha, essa porção é ideal para compartilhar e satisfazer seu desejo por uma experiência carnívora de dar água na boca.",
      imageUrl:
        "https://images.unsplash.com/photo-1678684279246-96e6afb970f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=923&q=80",
      price: 89.9,
      peopleServed: 2,
      foodCategory: "Carnes",
      waitingTime: 40,
    },
    {
      name: "Arroz de camarão",
      description:
        "Nossa especialidade culinária de Arroz de Camarão com Sururu é uma verdadeira festa de sabores do mar. O arroz é cuidadosamente preparado com camarões suculentos e sururu, enriquecido com temperos e ervas frescas, proporcionando uma explosão de sabores em cada garfada. Essa porção generosa é perfeita para ser apreciada em família ou com um grupo de amigos.",
      imageUrl:
        "https://images.unsplash.com/photo-1614124544688-723cb2414de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1589&q=80",
      price: 159.9,
      peopleServed: 3,
      foodCategory: "Frutos do mar",
      waitingTime: 50,
    },
    {
      name: "Caipirinha",
      description:
        "Descubra a variedade de sabores e cores em nossas Caipirinhas Variadas. Desfrute da tradicional caipirinha de limão, da refrescante caipirinha de morango ou da tropical caipirinha de maracujá. Cada opção é preparada com cachaça de qualidade, frutas frescas e gelo, resultando em uma bebida irresistível para refrescar seu paladar.",
      imageUrl:
        "https://images.pexels.com/photos/110472/pexels-photo-110472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 29.9,
      peopleServed: 1,
      foodCategory: "Drinks",
      waitingTime: 10,
    },
    {
      name: "Gin frutas vermelhas",
      description:
        "Deixe-se levar pelas notas frutadas e aromáticas do nosso Gin de Frutas Vermelhas. Um mix de gin premium, frutas vermelhas frescas e especiarias selecionadas criam uma bebida refrescante e sofisticada, perfeita para momentos de descontração e prazer.",
      imageUrl:
        "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 39.9,
      peopleServed: 1,
      foodCategory: "Drinks",
      waitingTime: 10,
    },
    {
      name: "Explosão tropical",
      description:
        "Descubra uma explosão de sabores tropicais em nosso Drink especial. Preparado com uma mistura equilibrada de sucos naturais cuidadosamente selecionados, este coquetel é uma verdadeira viagem para os trópicos. Saboreie a doçura exótica e refrescante desta bebida irresistível, perfeita para desfrutar momentos de descontração e prazer. Saúde!",
      imageUrl:
        "https://images.pexels.com/photos/2823680/pexels-photo-2823680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 45.0,
      peopleServed: 1,
      foodCategory: "Drinks",
      waitingTime: 10,
    },
  ];
  const restaurantEventsData = [
    {
      eventName: "Restaurant's Drinks",
      bannerUrl:
        "https://images.pexels.com/photos/12580176/pexels-photo-12580176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      eventName: "Shrimp",
      bannerUrl:
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=745&q=80",
    },
  ];

  const foodCategories = await prisma.foodCategory.createMany({
    data: foodCategoriesData,
  });

  const dishes = await prisma.dish.createMany({
    data: dishesData,
  });

  const restaurantEvents = await prisma.restaurantEvent.createMany({
    data: restaurantEventsData,
  });

  console.log("Seed data inserted successfully:", {
    restaurantEvents,
    dishes,
    foodCategories,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
