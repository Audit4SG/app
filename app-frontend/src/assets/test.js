[
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Germany',
    '@type': ['http://www.w3.org/2002/07/owl#Thing', 'http://www.w3.org/2002/07/owl#NamedIndividual', 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Country'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#InterestingPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'InterestingPizza',
      },
      {
        '@language': 'pt',
        '@value': 'PizzaInteressante',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Ne05bdb4ce6104c54a419366c299c2964',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value':
          'Any pizza that has at least 3 toppings. Note that this is a cardinality constraint on the hasTopping property and NOT a qualified cardinality constraint (QCR). A QCR would specify from which class the members in this relationship must be. eg has at least 3 toppings from PizzaTopping. This is currently not supported in OWL.',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Interesting Pizza',
      },
    ],
  },
  {
    '@id': '_:Ne05bdb4ce6104c54a419366c299c2964',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:N5b951fa162a14b77a86c20f248fbbe06',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N5b951fa162a14b77a86c20f248fbbe06',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#minCardinality': [
      {
        '@type': 'http://www.w3.org/2001/XMLSchema#nonNegativeInteger',
        '@value': '3',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasIngredient',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty', 'http://www.w3.org/2002/07/owl#TransitiveProperty'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value': 'NB Transitive - the ingredients of ingredients are ingredients of the whole',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#domain': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Food',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#range': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Food',
      },
    ],
    'http://www.w3.org/2002/07/owl#inverseOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isIngredientOf',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PineKernels',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaPineKernels',
      },
      {
        '@language': 'en',
        '@value': 'PineKernelTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NutTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Pine Kernel',
      },
    ],
  },
  {
    '@id': '_:Na88c0098640e4a80aeef7d9db08113c6',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GreenPepperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#JalapenoPepperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SweetPepperTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#QuattroFormaggi',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'QuatroQueijos',
      },
      {
        '@language': 'en',
        '@value': 'QuattroFormaggi',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N767f2cd9c4b9428ba055f9b6eb8e6efe',
      },
      {
        '@id': '_:N44d957fb354d4f21bc8d43de3f21517b',
      },
      {
        '@id': '_:N6f29f7cdf832466ea4e49081c2584f9c',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Quattro Formaggi',
      },
      {
        '@language': 'en',
        '@value': 'Quattro Formaggi Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Quattro Formaggi',
      },
    ],
  },
  {
    '@id': '_:N767f2cd9c4b9428ba055f9b6eb8e6efe',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FourCheesesTopping',
      },
    ],
  },
  {
    '@id': '_:N44d957fb354d4f21bc8d43de3f21517b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N6f29f7cdf832466ea4e49081c2584f9c',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N2c784230691e435db0a06e55dcf974e3',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N2c784230691e435db0a06e55dcf974e3',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FourCheesesTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HotSpicedBeefTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeBifePicante',
      },
      {
        '@language': 'en',
        '@value': 'HotSpicedBeefTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
      },
      {
        '@id': '_:N6128ad4a8f4e4fd49bb6d97ef88f2a58',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Hot Spiced Beef',
      },
    ],
  },
  {
    '@id': '_:N6128ad4a8f4e4fd49bb6d97ef88f2a58',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Hot',
      },
      {
        '@language': 'pt',
        '@value': 'Picante',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Spiciness',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Hot',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ThinAndCrispyPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'ThinAndCrispyPizza',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Nee8f413d6a284028be7ed102055bc1b6',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Thin And Crispy Pizza',
      },
    ],
  },
  {
    '@id': '_:Nee8f413d6a284028be7ed102055bc1b6',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:N0589b4f8ebe442219e67591812953f76',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N0589b4f8ebe442219e67591812953f76',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ThinAndCrispyBase',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasBase',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCalabreza',
      },
      {
        '@language': 'en',
        '@value': 'PeperoniSausageTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
      },
      {
        '@id': '_:N042cdeef486d43898757327e561a1160',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Peperoni Sausage',
      },
    ],
  },
  {
    '@id': '_:N042cdeef486d43898757327e561a1160',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TobascoPepperSauce',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'MolhoTobascoPepper',
      },
      {
        '@language': 'en',
        '@value': 'TobascoPepperSauceTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SauceTopping',
      },
      {
        '@id': '_:N618129caf6bd40929aa09039fe421ae4',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Tobasco Pepper Sauce',
      },
    ],
  },
  {
    '@id': '_:N618129caf6bd40929aa09039fe421ae4',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Food',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Food',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#DomainConcept',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Food',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Caprina',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Caprina',
      },
      {
        '@language': 'pt',
        '@value': 'Caprina',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:Nd8100f8251d04a23b8de7d56c49ca38a',
      },
      {
        '@id': '_:Na93856af0e864792bcb5714b51afbaee',
      },
      {
        '@id': '_:N6182b34370674025942c05a0cfb7d4a4',
      },
      {
        '@id': '_:Ndfcf200e12fe4992a4095967bf9bccf6',
      },
      {
        '@id': '_:N77fb076585964266acc61ce3473ad940',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Caprina',
      },
      {
        '@language': 'en',
        '@value': 'Caprina Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Caprina',
      },
    ],
  },
  {
    '@id': '_:Nd8100f8251d04a23b8de7d56c49ca38a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GoatsCheeseTopping',
      },
    ],
  },
  {
    '@id': '_:Na93856af0e864792bcb5714b51afbaee',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N6182b34370674025942c05a0cfb7d4a4',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SundriedTomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Ndfcf200e12fe4992a4095967bf9bccf6',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N77fb076585964266acc61ce3473ad940',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Na777af0fe27c4eeea9c9e67b4ccc7993',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Na777af0fe27c4eeea9c9e67b4ccc7993',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GoatsCheeseTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SundriedTomatoTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaBase',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'BaseDaPizza',
      },
      {
        '@language': 'en',
        '@value': 'PizzaBase',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Food',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Pizza Base',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Fiorentina',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Fiorentina',
      },
      {
        '@language': 'pt',
        '@value': 'Fiorentina',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N25db16ac15db4c62a5a890b3f232d4ca',
      },
      {
        '@id': '_:N9ad39e9bbfa7435695a00450b86e8023',
      },
      {
        '@id': '_:N3a5c76b7e0f64b0cab5560473438c524',
      },
      {
        '@id': '_:Ncc1e04dd52b84bc5b5858212e9e5df33',
      },
      {
        '@id': '_:Na3dad6f8d704416cb955b4ba3bcb3bab',
      },
      {
        '@id': '_:Nd830a493afe243e6985e41c288889835',
      },
      {
        '@id': '_:N0460050003a141bcaa01bfc50e5aadcc',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Fiorentina',
      },
      {
        '@language': 'en',
        '@value': 'Fiorentina Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Fiorentina',
      },
    ],
  },
  {
    '@id': '_:N25db16ac15db4c62a5a890b3f232d4ca',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
      },
    ],
  },
  {
    '@id': '_:N9ad39e9bbfa7435695a00450b86e8023',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N3a5c76b7e0f64b0cab5560473438c524',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:Ncc1e04dd52b84bc5b5858212e9e5df33',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
      },
    ],
  },
  {
    '@id': '_:Na3dad6f8d704416cb955b4ba3bcb3bab',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpinachTopping',
      },
    ],
  },
  {
    '@id': '_:Nd830a493afe243e6985e41c288889835',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N0460050003a141bcaa01bfc50e5aadcc',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Ncfdc42ab83e54683a3b3e3d1d0ca1b7d',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Ncfdc42ab83e54683a3b3e3d1d0ca1b7d',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpinachTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Veneziana',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Veneziana',
      },
      {
        '@language': 'pt',
        '@value': 'Veneziana',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N7379e0f514014e8b86fc64f3465e5544',
      },
      {
        '@id': '_:N7627a7c0147a45788babbf5f115c17d3',
      },
      {
        '@id': '_:Nf0901e36f12045ed8a34ba41bd7abbf0',
      },
      {
        '@id': '_:Nc6a62895fc9e454da4bd05d8a4990e32',
      },
      {
        '@id': '_:N5fbf4d1628714c3294bebec19cbab2c4',
      },
      {
        '@id': '_:N8b11e23010f14b56aaaac420a4ec5792',
      },
      {
        '@id': '_:N22df6f4c19624639b2c6fe807d0b9e93',
      },
      {
        '@id': '_:Nabcfb96d192c487383d5b58968fa690b',
      },
      {
        '@id': '_:Nddfa3919b7c44529bb0580be652c5d4b',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Veneziana',
      },
      {
        '@language': 'en',
        '@value': 'Veneziana Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Veneziana',
      },
    ],
  },
  {
    '@id': '_:N7379e0f514014e8b86fc64f3465e5544',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
      },
    ],
  },
  {
    '@id': '_:N7627a7c0147a45788babbf5f115c17d3',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:Nf0901e36f12045ed8a34ba41bd7abbf0',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:Nc6a62895fc9e454da4bd05d8a4990e32',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
      },
    ],
  },
  {
    '@id': '_:N5fbf4d1628714c3294bebec19cbab2c4',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PineKernels',
      },
    ],
  },
  {
    '@id': '_:N8b11e23010f14b56aaaac420a4ec5792',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SultanaTopping',
      },
    ],
  },
  {
    '@id': '_:N22df6f4c19624639b2c6fe807d0b9e93',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nabcfb96d192c487383d5b58968fa690b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N90107c99c64e4b61b5116cf371e6b1b5',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N90107c99c64e4b61b5116cf371e6b1b5',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PineKernels',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SultanaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Nddfa3919b7c44529bb0580be652c5d4b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#hasValue': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Italy',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasCountryOfOrigin',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Giardiniera',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Giardiniera',
      },
      {
        '@language': 'pt',
        '@value': 'Giardiniera',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:Ndd04b0a2688a4df1a6b35c6260594e1a',
      },
      {
        '@id': '_:N99ece3d77aef4c85a410877a08f127a7',
      },
      {
        '@id': '_:Nbb36b6a9d2744799ab45b646b53c0760',
      },
      {
        '@id': '_:Nc98b53ec1b3143c28d3a8b63e049ffbd',
      },
      {
        '@id': '_:N137b6555d5f74e38a24df196e64b4e7b',
      },
      {
        '@id': '_:N467cacd9d2304d59aebc9051cfacf6f4',
      },
      {
        '@id': '_:N4668ab0722824f568b4caaabcf851adb',
      },
      {
        '@id': '_:Nfef7d38dbd8c4a7f897edc0cebc5e2f7',
      },
      {
        '@id': '_:N667414e6ef474805ad1f4b295f8a1b92',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Giardiniera',
      },
      {
        '@language': 'en',
        '@value': 'Giardiniera Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Giardiniera',
      },
    ],
  },
  {
    '@id': '_:Ndd04b0a2688a4df1a6b35c6260594e1a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LeekTopping',
      },
    ],
  },
  {
    '@id': '_:N99ece3d77aef4c85a410877a08f127a7',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:Nbb36b6a9d2744799ab45b646b53c0760',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
      },
    ],
  },
  {
    '@id': '_:Nc98b53ec1b3143c28d3a8b63e049ffbd',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:N137b6555d5f74e38a24df196e64b4e7b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
      },
    ],
  },
  {
    '@id': '_:N467cacd9d2304d59aebc9051cfacf6f4',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PetitPoisTopping',
      },
    ],
  },
  {
    '@id': '_:N4668ab0722824f568b4caaabcf851adb',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SlicedTomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nfef7d38dbd8c4a7f897edc0cebc5e2f7',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N667414e6ef474805ad1f4b295f8a1b92',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N122ff0ea92e14bcb8e866b2e24285a01',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N122ff0ea92e14bcb8e866b2e24285a01',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LeekTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PetitPoisTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SlicedTomatoTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpicyPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaTemperada',
      },
      {
        '@language': 'en',
        '@value': 'SpicyPizza',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Nab79a1593f1b4b5d9e4e98d484082117',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value': 'Any pizza that has a spicy topping is a SpicyPizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Spicy Pizza',
      },
    ],
  },
  {
    '@id': '_:Nab79a1593f1b4b5d9e4e98d484082117',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:Na7a73b47711a4733993e87ac4959f1a9',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Na7a73b47711a4733993e87ac4959f1a9',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpicyTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseyPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'CheesyPizza',
      },
      {
        '@language': 'pt',
        '@value': 'PizzaComQueijo',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Nccf699a2fd894e69b859eb37ec8b770d',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value': 'Any pizza that has at least 1 cheese topping.',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Cheesy Pizza',
      },
    ],
  },
  {
    '@id': '_:Nccf699a2fd894e69b859eb37ec8b770d',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:Nce655a4cd3d64c52b07e347437578f19',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Nce655a4cd3d64c52b07e347437578f19',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeAlho',
      },
      {
        '@language': 'en',
        '@value': 'GarlicTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:Nd945008242df4bd89c741252724ad1ac',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Garlic',
      },
    ],
  },
  {
    '@id': '_:Nd945008242df4bd89c741252724ad1ac',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty', 'http://www.w3.org/2002/07/owl#FunctionalProperty'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value': 'A property created to be used with the ValuePartition - Spiciness.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#range': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Spiciness',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeParmesao',
      },
      {
        '@language': 'en',
        '@value': 'ParmezanTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
      },
      {
        '@id': '_:Nc17cbcf30b6641cca98d0476ebd31523',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Parmezan',
      },
    ],
  },
  {
    '@id': '_:Nc17cbcf30b6641cca98d0476ebd31523',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruttiDiMare',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'FrutosDoMar',
      },
      {
        '@language': 'en',
        '@value': 'FruttiDiMare',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:Nfee0e1d073184d56b142622977af1359',
      },
      {
        '@id': '_:N10795c2891c94a16af4046b3eb5a6023',
      },
      {
        '@id': '_:N43e480633a6d4231bba1aa160109500d',
      },
      {
        '@id': '_:N8188f2f8cf214f50a39d4107b53f1886',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Frutti Di Mare',
      },
      {
        '@language': 'en',
        '@value': 'Frutti Di Mare Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Frutti Di Mare',
      },
    ],
  },
  {
    '@id': '_:Nfee0e1d073184d56b142622977af1359',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
      },
    ],
  },
  {
    '@id': '_:N10795c2891c94a16af4046b3eb5a6023',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MixedSeafoodTopping',
      },
    ],
  },
  {
    '@id': '_:N43e480633a6d4231bba1aa160109500d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N8188f2f8cf214f50a39d4107b53f1886',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N7ce1d2c73a2640ffa73650d0d7ec6973',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N7ce1d2c73a2640ffa73650d0d7ec6973',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MixedSeafoodTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value': 'A pizza that can be found on a pizza menu',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaComUmNome',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#DomainConcept',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'DomainThing',
      },
    ],
    'http://www.w3.org/2002/07/owl#disjointWith': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ValuePartition',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Domain Thing',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeAzeitona',
      },
      {
        '@language': 'en',
        '@value': 'OliveTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:Nf6454221f3db4cc4ac65f516e705017f',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Olive',
      },
    ],
  },
  {
    '@id': '_:Nf6454221f3db4cc4ac65f516e705017f',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatyPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'MeatyPizza',
      },
      {
        '@language': 'pt',
        '@value': 'PizzaDeCarne',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:N10b6f969e4df42ea9eb8110d1982a5aa',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value': 'Any pizza that has at least one meat topping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Meaty Pizza',
      },
    ],
  },
  {
    '@id': '_:N10b6f969e4df42ea9eb8110d1982a5aa',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:Nf9d838ca2fa3489295a27f394a22f3ff',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Nf9d838ca2fa3489295a27f394a22f3ff',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Rosa',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Rosa',
      },
      {
        '@language': 'pt',
        '@value': 'Rosa',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N01fa8764209f4282b6d64ca30b2fa85e',
      },
      {
        '@id': '_:N3e2068fad57a483082b77bdcd1cad5d3',
      },
      {
        '@id': '_:N123ef8f2d6434e788b5357d3e30e4aa5',
      },
      {
        '@id': '_:Naefd590c178d4a78b4da4c82070490d1',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Rosa',
      },
      {
        '@language': 'en',
        '@value': 'Rosa Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Rosa',
      },
    ],
  },
  {
    '@id': '_:N01fa8764209f4282b6d64ca30b2fa85e',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GorgonzolaTopping',
      },
    ],
  },
  {
    '@id': '_:N3e2068fad57a483082b77bdcd1cad5d3',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N123ef8f2d6434e788b5357d3e30e4aa5',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Naefd590c178d4a78b4da4c82070490d1',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N3df6721a37494cef8e232dfca11d0fe3',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N3df6721a37494cef8e232dfca11d0fe3',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GorgonzolaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HerbSpiceTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeErvas',
      },
      {
        '@language': 'en',
        '@value': 'HerbSpiceTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Herb Spice',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaPeperonata',
      },
      {
        '@language': 'en',
        '@value': 'PeperonataTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PepperTopping',
      },
      {
        '@id': '_:N6f921466f78b48dfb577543d4cc8afaa',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Peperonata',
      },
    ],
  },
  {
    '@id': '_:N6f921466f78b48dfb577543d4cc8afaa',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SlicedTomatoTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeTomateFatiado',
      },
      {
        '@language': 'en',
        '@value': 'SlicedTomatoTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
      {
        '@id': '_:N51deaaef27034c3cbcfa0824afa3ede8',
      },
    ],
    'http://www.w3.org/2002/07/owl#disjointWith': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SundriedTomatoTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Sliced Tomato',
      },
    ],
  },
  {
    '@id': '_:N51deaaef27034c3cbcfa0824afa3ede8',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RocketTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaRocket',
      },
      {
        '@language': 'en',
        '@value': 'RocketTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:Na6c1c53e47c34f79ab095b2a44a94f96',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Rocket',
      },
    ],
  },
  {
    '@id': '_:Na6c1c53e47c34f79ab095b2a44a94f96',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruitTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeFrutas',
      },
      {
        '@language': 'en',
        '@value': 'FruitTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Fruit',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ArtichokeTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'ArtichokeTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeArtichoke',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:Ndc3fd4f54af94e9ab64fec33b0a4d6ff',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Artichoke',
      },
    ],
  },
  {
    '@id': '_:Ndc3fd4f54af94e9ab64fec33b0a4d6ff',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FourSeasons',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'FourSeasons',
      },
      {
        '@language': 'pt',
        '@value': 'QuatroQueijos',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N556d23d49a2649e8bddec8046f1b4303',
      },
      {
        '@id': '_:Nccd3843a702f49e1bf679a3c74e0b77b',
      },
      {
        '@id': '_:Ncb5b8d231af643499d0c9bc0efb8ba5a',
      },
      {
        '@id': '_:N26aa5be8f947461a956afb41909f1bab',
      },
      {
        '@id': '_:N6cf9ee541cb94db983580b76a905df9f',
      },
      {
        '@id': '_:Neaf21a7baaf44aeda690a3633e425b5e',
      },
      {
        '@id': '_:Nc974ccd6ac3f4f6d8bf40b15943490fe',
      },
      {
        '@id': '_:N6d320923f0664c318a4a6b4a797ca3a4',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Four Seasons',
      },
      {
        '@language': 'en',
        '@value': 'Four Seasons Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Four Seasons',
      },
    ],
  },
  {
    '@id': '_:N556d23d49a2649e8bddec8046f1b4303',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
      },
    ],
  },
  {
    '@id': '_:Nccd3843a702f49e1bf679a3c74e0b77b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
      },
    ],
  },
  {
    '@id': '_:Ncb5b8d231af643499d0c9bc0efb8ba5a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N26aa5be8f947461a956afb41909f1bab',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
      },
    ],
  },
  {
    '@id': '_:N6cf9ee541cb94db983580b76a905df9f',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:Neaf21a7baaf44aeda690a3633e425b5e',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
      },
    ],
  },
  {
    '@id': '_:Nc974ccd6ac3f4f6d8bf40b15943490fe',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N6d320923f0664c318a4a6b4a797ca3a4',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N1f49f914e3f74184b73029f78c64f496',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N1f49f914e3f74184b73029f78c64f496',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeVegetais',
      },
      {
        '@language': 'en',
        '@value': 'VegetableTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Vegetable Topping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasBase',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty', 'http://www.w3.org/2002/07/owl#FunctionalProperty', 'http://www.w3.org/2002/07/owl#InverseFunctionalProperty'],
    'http://www.w3.org/2000/01/rdf-schema#domain': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#range': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaBase',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subPropertyOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasIngredient',
      },
    ],
    'http://www.w3.org/2002/07/owl#inverseOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isBaseOf',
      },
    ],
  },
  {
    '@id': 'http://purl.org/dc/elements/1.1/title',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SultanaTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaSultana',
      },
      {
        '@language': 'en',
        '@value': 'SultanaTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruitTopping',
      },
      {
        '@id': '_:N4517da393ed946fba189c4ebc9f37bc7',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Sultana',
      },
    ],
  },
  {
    '@id': '_:N4517da393ed946fba189c4ebc9f37bc7',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
      },
    ],
  },
  {
    '@id': '_:N0cc2186b52ba471baf5192ef2e2622b2',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FourCheesesTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GoatsCheeseTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GorgonzolaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PrinceCarlo',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaPrinceCarlo',
      },
      {
        '@language': 'en',
        '@value': 'PrinceCarlo',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N98222349cb104530903d794d72e3ca43',
      },
      {
        '@id': '_:N4a5b7a307d66412a8ff0e293db52ffc9',
      },
      {
        '@id': '_:N76589ab8378646deb9598a9c890f496e',
      },
      {
        '@id': '_:N9c2c43fb30d4454f9a83c9c466e372a1',
      },
      {
        '@id': '_:N43179ae3f1414cc1b19a8454fcd3cd82',
      },
      {
        '@id': '_:N75d218c346f4499889a99e3ab39d5057',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Prince Carlo',
      },
      {
        '@language': 'en',
        '@value': 'Prince Carlo Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Prince Carlo',
      },
    ],
  },
  {
    '@id': '_:N98222349cb104530903d794d72e3ca43',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LeekTopping',
      },
    ],
  },
  {
    '@id': '_:N4a5b7a307d66412a8ff0e293db52ffc9',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N76589ab8378646deb9598a9c890f496e',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
      },
    ],
  },
  {
    '@id': '_:N9c2c43fb30d4454f9a83c9c466e372a1',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RosemaryTopping',
      },
    ],
  },
  {
    '@id': '_:N43179ae3f1414cc1b19a8454fcd3cd82',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N75d218c346f4499889a99e3ab39d5057',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N707c0b29e7fa418b855bdae8de435652',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N707c0b29e7fa418b855bdae8de435652',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LeekTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RosemaryTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeMozzarella',
      },
      {
        '@language': 'en',
        '@value': 'MozzarellaTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
      },
      {
        '@id': '_:Nc9663862bc0647aeafba99543a2f785d',
      },
      {
        '@id': '_:Nc757c5e801584cf8ac3407b05ce1cec6',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Mozzarella',
      },
    ],
  },
  {
    '@id': '_:Nc9663862bc0647aeafba99543a2f785d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': '_:Nc757c5e801584cf8ac3407b05ce1cec6',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#hasValue': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Italy',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasCountryOfOrigin',
      },
    ],
  },
  {
    '@id': 'http://purl.org/dc/terms/contributor',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#UnclosedPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@value': 'An unclosed Pizza cannot be inferred to be either a VegetarianPizza or a NonVegetarianPizza, because it might have other toppings.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaAberta',
      },
      {
        '@language': 'en',
        '@value': 'UnclosedPizza',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
      },
      {
        '@id': '_:Nde1b945c5b23407895a6d56bd9b83b7f',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Unclosed Pizza',
      },
    ],
  },
  {
    '@id': '_:Nde1b945c5b23407895a6d56bd9b83b7f',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N981e33a46ca547c99863959e2af54021',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetarianPizzaEquivalent2',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value':
          'An alternative to VegetarianPizzaEquiv1 that does not require a definition of VegetarianTopping. Perhaps more difficult to maintain. Not equivalent to VegetarianPizza',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaVegetarianaEquivalente2',
      },
      {
        '@language': 'en',
        '@value': 'VegetarianPizza2',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Ne1c6c5fa4b54476da7cc7276b37e6eee',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Vegetarian Pizza2',
      },
    ],
  },
  {
    '@id': '_:Ne1c6c5fa4b54476da7cc7276b37e6eee',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:N73c792eb408f41478324d499bf1007a3',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N73c792eb408f41478324d499bf1007a3',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Ne3203df54dd8434e9da7998e1993500e',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Ne3203df54dd8434e9da7998e1993500e',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruitTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HerbSpiceTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NutTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SauceTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ValuePartition',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@value':
          'A ValuePartition is a pattern that describes a restricted set of classes from which a property can be associated. The parent class is used in restrictions, and the covering axiom means that only members of the subclasses may be used as values. The possible subclasses cannot be extended without updating the ValuePartition class.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'ValorDaParticao',
      },
      {
        '@language': 'en',
        '@value': 'ValuePartition',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Value Partition',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseyVegetableTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value':
          'This class will be unsatisfiable. This is because we have given it 2 disjoint parents, which means it could never have any instances (as nothing can be both a CheeseTopping and a VegetableTopping). NB Called ProbeInconsistentTopping in the ProtegeOWL Tutorial.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'CheesyVegetableTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeQueijoComVegetais',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
      },
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCogumelo',
      },
      {
        '@language': 'en',
        '@value': 'MushroomTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:N05f1d24d82804ea1a0e7702cd77efa9d',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Mushroom',
      },
    ],
  },
  {
    '@id': '_:N05f1d24d82804ea1a0e7702cd77efa9d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CajunSpiceTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'CajunSpiceTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCajun',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HerbSpiceTopping',
      },
      {
        '@id': '_:N085eba3ab80246eeb3e288cef1049fb3',
      },
    ],
    'http://www.w3.org/2002/07/owl#disjointWith': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RosemaryTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Cajun Spice',
      },
    ],
  },
  {
    '@id': '_:N085eba3ab80246eeb3e288cef1049fb3',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AmericanHot',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'AmericanHot',
      },
      {
        '@language': 'pt',
        '@value': 'AmericanaPicante',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N73d9c7c348094f09b34862ba9e80b5c0',
      },
      {
        '@id': '_:Nc638c9e90316419eaf9d747775bfbf1a',
      },
      {
        '@id': '_:N618cced9399942cb8d8bb54b2364462e',
      },
      {
        '@id': '_:N1b362f8919944b95aa84cdb6c2ca4a15',
      },
      {
        '@id': '_:N300d6b3578234d9f8bd029bcd23efadf',
      },
      {
        '@id': '_:N3daba1ce33ee4fa9883c23704494f441',
      },
      {
        '@id': '_:N25eecf9db9e74a50a7e19632653c4908',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'American Hot',
      },
      {
        '@language': 'en',
        '@value': 'American Hot Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'American Hot',
      },
    ],
  },
  {
    '@id': '_:N73d9c7c348094f09b34862ba9e80b5c0',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HotGreenPepperTopping',
      },
    ],
  },
  {
    '@id': '_:Nc638c9e90316419eaf9d747775bfbf1a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#JalapenoPepperTopping',
      },
    ],
  },
  {
    '@id': '_:N618cced9399942cb8d8bb54b2364462e',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N1b362f8919944b95aa84cdb6c2ca4a15',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
      },
    ],
  },
  {
    '@id': '_:N300d6b3578234d9f8bd029bcd23efadf',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N3daba1ce33ee4fa9883c23704494f441',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Nd7dafbd0af41430a875d59c3be82e18b',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Nd7dafbd0af41430a875d59c3be82e18b',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HotGreenPepperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#JalapenoPepperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N25eecf9db9e74a50a7e19632653c4908',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#hasValue': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#America',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasCountryOfOrigin',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Italy',
    '@type': ['http://www.w3.org/2002/07/owl#Thing', 'http://www.w3.org/2002/07/owl#NamedIndividual', 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Country'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#IceCream',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value':
          'A class to demonstrate mistakes made with setting a property domain. The property hasTopping has a domain of Pizza. This means that the reasoner can infer that all individuals using the hasTopping property must be of type Pizza. Because of the restriction on this class, all members of IceCream must use the hasTopping property, and therefore must also be members of Pizza. However, Pizza and IceCream are disjoint, so this causes an inconsistency. If they were not disjoint, IceCream would be inferred to be a subclass of Pizza.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'IceCream',
      },
      {
        '@language': 'pt',
        '@value': 'Sorvete',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Food',
      },
      {
        '@id': '_:N096f1ab6ce904f6c9d542322f3ee988c',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Ice Cream',
      },
    ],
  },
  {
    '@id': '_:N096f1ab6ce904f6c9d542322f3ee988c',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruitTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mushroom',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'Cogumelo',
      },
      {
        '@language': 'en',
        '@value': 'Mushroom',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N041e777a68aa46d796bc5fd666c04393',
      },
      {
        '@id': '_:N80dbee4cec0f442c9f2465ce98ee723c',
      },
      {
        '@id': '_:Nbd92699178a84a088e301997a18c04d8',
      },
      {
        '@id': '_:N0a90e8dbac454207913756193eaa68c3',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Mushroom',
      },
      {
        '@language': 'en',
        '@value': 'Mushroom Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Mushroom',
      },
    ],
  },
  {
    '@id': '_:N041e777a68aa46d796bc5fd666c04393',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N80dbee4cec0f442c9f2465ce98ee723c',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
      },
    ],
  },
  {
    '@id': '_:Nbd92699178a84a088e301997a18c04d8',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N0a90e8dbac454207913756193eaa68c3',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Nb1e0c41ce4f94ec99d935126fc430988',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Nb1e0c41ce4f94ec99d935126fc430988',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'AnchoviesTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeAnchovies',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FishTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Anchovies',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ThinAndCrispyBase',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'BaseFinaEQuebradica',
      },
      {
        '@language': 'en',
        '@value': 'ThinAndCrispyBase',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaBase',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Thin And Crispy Base',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Spiciness',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value': 'A ValuePartition that describes only values from Hot, Medium or Mild. NB Subclasses can themselves be divided up into further partitions.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Spiciness',
      },
      {
        '@language': 'pt',
        '@value': 'Tempero',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ValuePartition',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Nd2f37ab61c4a458f8ee31a99098437d4',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Spiciness',
      },
    ],
  },
  {
    '@id': '_:Nd2f37ab61c4a458f8ee31a99098437d4',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FishTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDePeixe',
      },
      {
        '@language': 'en',
        '@value': 'SeafoodTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
      {
        '@id': '_:N81610df51ad441d0a14f1fafae19c2e1',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Seafood',
      },
    ],
  },
  {
    '@id': '_:N81610df51ad441d0a14f1fafae19c2e1',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://purl.org/dc/elements/1.1/description',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PrawnsTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCamarao',
      },
      {
        '@language': 'en',
        '@value': 'PrawnsTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FishTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Prawns',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PepperTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDePimentao',
      },
      {
        '@language': 'en',
        '@value': 'PepperTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Pepper',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasCountryOfOrigin',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'CaperTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCaper',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:N31eb720215ee44b49ef7ad6e5c2f1185',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Caper',
      },
    ],
  },
  {
    '@id': '_:N31eb720215ee44b49ef7ad6e5c2f1185',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': '_:Nf4c97a7a023949d393a4d2d8e0325b64',
    '@type': ['http://www.w3.org/2002/07/owl#AllDifferent'],
    'http://www.w3.org/2002/07/owl#distinctMembers': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#America',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#England',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#France',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Germany',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Italy',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Siciliana',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Siciliana',
      },
      {
        '@language': 'pt',
        '@value': 'Siciliana',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N8744299baab54b469da0ff1570f04707',
      },
      {
        '@id': '_:N76fd0c4acded44638a935dd8dff052d2',
      },
      {
        '@id': '_:Nce5e3ddcd37a4736ad6a6817d02a465a',
      },
      {
        '@id': '_:N49b23117c64b45fa9ae0ecd690a3c858',
      },
      {
        '@id': '_:N873316a5f13748f7847de2ae4c855de2',
      },
      {
        '@id': '_:N379acd297e6240bf93f73114c7bd887a',
      },
      {
        '@id': '_:N5444b6b0530347d5ab09ff2604bac24c',
      },
      {
        '@id': '_:Nbbaf8656c8604c0dbaf5d6f8a8b0734c',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Siciliana',
      },
      {
        '@language': 'en',
        '@value': 'Siciliana Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Siciliana',
      },
    ],
  },
  {
    '@id': '_:N8744299baab54b469da0ff1570f04707',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
      },
    ],
  },
  {
    '@id': '_:N76fd0c4acded44638a935dd8dff052d2',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ArtichokeTopping',
      },
    ],
  },
  {
    '@id': '_:Nce5e3ddcd37a4736ad6a6817d02a465a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
      },
    ],
  },
  {
    '@id': '_:N49b23117c64b45fa9ae0ecd690a3c858',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
      },
    ],
  },
  {
    '@id': '_:N873316a5f13748f7847de2ae4c855de2',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N379acd297e6240bf93f73114c7bd887a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:N5444b6b0530347d5ab09ff2604bac24c',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nbbaf8656c8604c0dbaf5d6f8a8b0734c',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Nab363b6c5351419cb2b96a15ad3874a3',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Nab363b6c5351419cb2b96a15ad3874a3',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ArtichokeTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GoatsCheeseTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeQueijoDeCabra',
      },
      {
        '@language': 'en',
        '@value': 'GoatsCheeseTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
      },
      {
        '@id': '_:Nf86bd16f930240f48a4a3938863fad9b',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Goats Cheese',
      },
    ],
  },
  {
    '@id': '_:Nf86bd16f930240f48a4a3938863fad9b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': '_:Ncebf83ce97ba40efaa1240a0848e4f5f',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#IceCream',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaBase',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#France',
    '@type': ['http://www.w3.org/2002/07/owl#Thing', 'http://www.w3.org/2002/07/owl#NamedIndividual', 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Country'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AsparagusTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'AsparagusTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeAspargos',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:Nb17284cd799347a284fb4c1832422da2',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Asparagus',
      },
    ],
  },
  {
    '@id': '_:Nb17284cd799347a284fb4c1832422da2',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCebola',
      },
      {
        '@language': 'en',
        '@value': 'OnionTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:Nfd0fa534abb74b058457f2d7090339fc',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Onion',
      },
    ],
  },
  {
    '@id': '_:Nfd0fa534abb74b058457f2d7090339fc',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetarianPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaVegetariana',
      },
      {
        '@language': 'en',
        '@value': 'VegetarianPizza',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:N0bc89dde257d4639b97a6ce14ec4d160',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value':
          'Any pizza that does not have fish topping and does not have meat topping is a VegetarianPizza. Note that instances of this class do not need to have any toppings at all.',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Vegetarian Pizza',
      },
    ],
  },
  {
    '@id': '_:N0bc89dde257d4639b97a6ce14ec4d160',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:N40c74884c7774ec68a38b04fec39eb9f',
          },
          {
            '@id': '_:Nf6895d69f47b4e18931361f2513d0f7f',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N40c74884c7774ec68a38b04fec39eb9f',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#complementOf': [
      {
        '@id': '_:Na5299d3d404845088a25cea66ea886f0',
      },
    ],
  },
  {
    '@id': '_:Na5299d3d404845088a25cea66ea886f0',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FishTopping',
      },
    ],
  },
  {
    '@id': '_:Nf6895d69f47b4e18931361f2513d0f7f',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#complementOf': [
      {
        '@id': '_:N7e73f1dbddc744fd943c3fef74a34191',
      },
    ],
  },
  {
    '@id': '_:N7e73f1dbddc744fd943c3fef74a34191',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SauceTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaEmMolho',
      },
      {
        '@language': 'en',
        '@value': 'SauceTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Sauce',
      },
    ],
  },
  {
    '@id': 'http://www.w3.org/2004/02/skos/core#definition',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Margherita',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Margherita',
      },
      {
        '@language': 'pt',
        '@value': 'Margherita',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N920790e83c844a7c95c03afcb003ffee',
      },
      {
        '@id': '_:N93696eb0e2b646df85997d9aea07d55f',
      },
      {
        '@id': '_:Nba3872f9e3784e2ab9c440ee8a34d7eb',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Margherita',
      },
      {
        '@language': 'en',
        '@value': 'Margherita Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Margherita',
      },
    ],
  },
  {
    '@id': '_:N920790e83c844a7c95c03afcb003ffee',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N93696eb0e2b646df85997d9aea07d55f',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nba3872f9e3784e2ab9c440ee8a34d7eb',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Nc8125599189a44559310bd56204d56fa',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Nc8125599189a44559310bd56204d56fa',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GorgonzolaTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeGorgonzola',
      },
      {
        '@language': 'en',
        '@value': 'GorgonzolaTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
      },
      {
        '@id': '_:Nbef8f8449ede44d1acbaa97e6e5c6855',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Gorgonzola',
      },
    ],
  },
  {
    '@id': '_:Nbef8f8449ede44d1acbaa97e6e5c6855',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.w3.org/2004/02/skos/core#altLabel',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeTomate',
      },
      {
        '@language': 'en',
        '@value': 'TomatoTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:N2cbeeb493a7a420eb4039c662aa0da23',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Tomato',
      },
    ],
  },
  {
    '@id': '_:N2cbeeb493a7a420eb4039c662aa0da23',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ChickenTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'ChickenTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeFrango',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
      },
      {
        '@id': '_:Nef7fa5d6ca624ceab560533b201c82ad',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Chicken',
      },
    ],
  },
  {
    '@id': '_:Nef7fa5d6ca624ceab560533b201c82ad',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RosemaryTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaRosemary',
      },
      {
        '@language': 'en',
        '@value': 'RosemaryTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HerbSpiceTopping',
      },
      {
        '@id': '_:N3c98f01fbf2b4cd392e8a929cc796e5b',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Rosemary',
      },
    ],
  },
  {
    '@id': '_:N3c98f01fbf2b4cd392e8a929cc796e5b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Pizza',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#seeAlso': [
      {
        '@id': 'https://en.wikipedia.org/wiki/Pizza',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Food',
      },
      {
        '@id': '_:N6c74b5c991a146d9ba62df169a83ee36',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Pizza',
      },
    ],
  },
  {
    '@id': '_:N6c74b5c991a146d9ba62df169a83ee36',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasBase',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaBase',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#American',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'American',
      },
      {
        '@language': 'pt',
        '@value': 'Americana',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:Nf8a614281dc04e38b089b10a8567a409',
      },
      {
        '@id': '_:N9324ebdf48a74b498fe400cd3fbcaae2',
      },
      {
        '@id': '_:N36dda0e135cf4ff9997b7228d46b09cf',
      },
      {
        '@id': '_:Nef2c40f1e70a42819661255e7f521e32',
      },
      {
        '@id': '_:N56e5bdab28b54296ab7c37dbda4bd376',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'American',
      },
      {
        '@language': 'en',
        '@value': 'American Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'American',
      },
    ],
  },
  {
    '@id': '_:Nf8a614281dc04e38b089b10a8567a409',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N9324ebdf48a74b498fe400cd3fbcaae2',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
      },
    ],
  },
  {
    '@id': '_:N36dda0e135cf4ff9997b7228d46b09cf',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nef2c40f1e70a42819661255e7f521e32',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N6989d8eb2dd442968550f0c316cd20e1',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N6989d8eb2dd442968550f0c316cd20e1',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N56e5bdab28b54296ab7c37dbda4bd376',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#hasValue': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#America',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasCountryOfOrigin',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmaHamTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDePrezuntoParma',
      },
      {
        '@language': 'en',
        '@value': 'ParmaHamTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
      },
      {
        '@id': '_:N910d4c12b82f4dec918979e4f04fe9e0',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Parma Ham',
      },
    ],
  },
  {
    '@id': '_:N910d4c12b82f4dec918979e4f04fe9e0',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GreenPepperTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDePimentaoVerde',
      },
      {
        '@language': 'en',
        '@value': 'GreenPepperTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PepperTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Green Pepper',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SweetPepperTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDePimentaoDoce',
      },
      {
        '@language': 'en',
        '@value': 'SweetPepperTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PepperTopping',
      },
      {
        '@id': '_:Ncebe9e58a62e4c14b09bc2941706f289',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Sweet Pepper',
      },
    ],
  },
  {
    '@id': '_:Ncebe9e58a62e4c14b09bc2941706f289',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SundriedTomatoTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeTomateRessecadoAoSol',
      },
      {
        '@language': 'en',
        '@value': 'SundriedTomatoTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
      {
        '@id': '_:Ne42d470bd14548e39c5435d502251523',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Sundried Tomato',
      },
    ],
  },
  {
    '@id': '_:Ne42d470bd14548e39c5435d502251523',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': '_:Nfca3f6d47aab448c9ddca31969c67099',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#American',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AmericanHot',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Cajun',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Capricciosa',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Caprina',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Fiorentina',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FourSeasons',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruttiDiMare',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Giardiniera',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LaReine',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Margherita',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mushroom',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Napoletana',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Parmense',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PolloAdAstra',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PrinceCarlo',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#QuattroFormaggi',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Rosa',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Siciliana',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SloppyGiuseppe',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Soho',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#UnclosedPizza',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Veneziana',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Parmense',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Parmense',
      },
      {
        '@language': 'pt',
        '@value': 'Parmense',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N05021406156a456b9a836ae5df0f6d1a',
      },
      {
        '@id': '_:N71bb8f76ee67463aa971245f7db8d30f',
      },
      {
        '@id': '_:Nf0f097aec5964b52bd66f8ce3e4a51bb',
      },
      {
        '@id': '_:N4d7ac4fb30ce4e22a3a7c93fca50b765',
      },
      {
        '@id': '_:N3df53dad2be04a98936957a926665117',
      },
      {
        '@id': '_:Ne33c43b8e7dd4dac856b6454488ab6d9',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Parmese',
      },
      {
        '@language': 'en',
        '@value': 'Parmese Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Parmense',
      },
    ],
  },
  {
    '@id': '_:N05021406156a456b9a836ae5df0f6d1a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AsparagusTopping',
      },
    ],
  },
  {
    '@id': '_:N71bb8f76ee67463aa971245f7db8d30f',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
      },
    ],
  },
  {
    '@id': '_:Nf0f097aec5964b52bd66f8ce3e4a51bb',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N4d7ac4fb30ce4e22a3a7c93fca50b765',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
      },
    ],
  },
  {
    '@id': '_:N3df53dad2be04a98936957a926665117',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Ne33c43b8e7dd4dac856b6454488ab6d9',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Nb0c96935a9d94494babd33a3d2ee4ff2',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Nb0c96935a9d94494babd33a3d2ee4ff2',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AsparagusTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpicyPizzaEquivalent',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value':
          'An alternative definition for the SpicyPizza which does away with needing a definition of SpicyTopping and uses a slightly more complicated restriction: Pizzas that have at least one topping that is both a PizzaTopping and has spiciness hot are members of this class.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaTemperadaEquivalente',
      },
      {
        '@language': 'en',
        '@value': 'SpicyPizzaEquivalent',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:N4f9990b5e99c4714933999cc600ae08c',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Spicy Pizza Equivalent',
      },
    ],
  },
  {
    '@id': '_:N4f9990b5e99c4714933999cc600ae08c',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:N4d6ae648832840cbb9f48f8da4673c0f',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N4d6ae648832840cbb9f48f8da4673c0f',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': '_:N8766eba769ac4999848995eac3c760a5',
      },
    ],
  },
  {
    '@id': '_:N8766eba769ac4999848995eac3c760a5',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
          },
          {
            '@id': '_:Nbeb09be0b51b43edad643217246108cf',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Nbeb09be0b51b43edad643217246108cf',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
      },
    ],
  },
  {
    '@id': '_:N8f72e4406e3b4259a3fc0f9384a7d1eb',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FishTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruitTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HerbSpiceTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NutTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SauceTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza',
    '@type': ['http://www.w3.org/2002/07/owl#Ontology'],
    'http://purl.org/dc/elements/1.1/description': [
      {
        '@language': 'en',
        '@value':
          'An ontology about pizzas and their toppings.\n\nThis is an example ontology that contains all constructs required for the various versions of the Pizza Tutorial run by Manchester University (see http://owl.cs.manchester.ac.uk/publications/talks-and-tutorials/protg-owl-tutorial).',
      },
    ],
    'http://purl.org/dc/elements/1.1/title': [
      {
        '@language': 'en',
        '@value': 'pizza',
      },
    ],
    'http://purl.org/dc/terms/contributor': [
      {
        '@value': 'Nick Drummond',
      },
      {
        '@value': 'Alan Rector',
      },
      {
        '@value': 'Matthew Horridge',
      },
      {
        '@value': 'Chris Wroe',
      },
      {
        '@value': 'Robert Stevens',
      },
    ],
    'http://purl.org/dc/terms/license': [
      {
        '@value': 'Creative Commons Attribution 3.0 (CC BY 3.0)',
      },
    ],
    'http://purl.org/dc/terms/provenance': [
      {
        '@language': 'en',
        '@value':
          'v2.0 Added new annotations to the ontology using standard/well-know annotation properties\n\nv1.5. Removed protege.owl import and references. Made ontology URI date-independent\n\nv1.4. Added Food class (used in domain/range of hasIngredient), Added several hasCountryOfOrigin restrictions on pizzas, Made hasTopping invers functional',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@value': 'pizza',
      },
    ],
    'http://www.w3.org/2002/07/owl#versionIRI': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/2.0.0',
      },
    ],
    'http://www.w3.org/2002/07/owl#versionInfo': [
      {
        '@value': '2.0',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetarianTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value':
          'An example of a covering axiom. VegetarianTopping is equivalent to the union of all toppings in the given axiom. VegetarianToppings can only be Cheese or Vegetable or....etc.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaVegetariana',
      },
      {
        '@language': 'en',
        '@value': 'VegetarianTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Nab4ba5cd6c6544d4a7688ef625cad425',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Vegetarian Topping',
      },
    ],
  },
  {
    '@id': '_:Nab4ba5cd6c6544d4a7688ef625cad425',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
          },
          {
            '@id': '_:N04b359d81aca46918c50ff2f140c3034',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N04b359d81aca46918c50ff2f140c3034',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FruitTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HerbSpiceTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NutTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SauceTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LeekTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeLeek',
      },
      {
        '@language': 'en',
        '@value': 'LeekTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:N843b9ec1fd96426aa61347695c085065',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Leek',
      },
    ],
  },
  {
    '@id': '_:N843b9ec1fd96426aa61347695c085065',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#JalapenoPepperTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeJalapeno',
      },
      {
        '@language': 'en',
        '@value': 'JalapenoPepperTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PepperTopping',
      },
      {
        '@id': '_:N2ce0377b48d14124b1c7c87219b4e023',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Jalapeno Pepper',
      },
    ],
  },
  {
    '@id': '_:N2ce0377b48d14124b1c7c87219b4e023',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Napoletana',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Napoletana',
      },
      {
        '@language': 'pt',
        '@value': 'Napoletana',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N5d7f518d392e42a981aaec74c5ada8ff',
      },
      {
        '@id': '_:Ne3f498db5c5243089ac5fe641094af5b',
      },
      {
        '@id': '_:N54072674549e47b68ca3a5bdb0cfc646',
      },
      {
        '@id': '_:N5c46d6c5d68e4d6883e4740b5837ab44',
      },
      {
        '@id': '_:N863fa5bf2dcf432ca9a3e3baf8fe7579',
      },
      {
        '@id': '_:Nd5f1f137ce9846f59abeaf1900f7ed5d',
      },
      {
        '@id': '_:N2c85aa43cfc74d75b1d77e0b392d22c8',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Napoletana',
      },
      {
        '@language': 'en',
        '@value': 'Napoletana Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Napoletana',
      },
    ],
  },
  {
    '@id': '_:N5d7f518d392e42a981aaec74c5ada8ff',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
      },
    ],
  },
  {
    '@id': '_:Ne3f498db5c5243089ac5fe641094af5b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
      },
    ],
  },
  {
    '@id': '_:N54072674549e47b68ca3a5bdb0cfc646',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N5c46d6c5d68e4d6883e4740b5837ab44',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:N863fa5bf2dcf432ca9a3e3baf8fe7579',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nd5f1f137ce9846f59abeaf1900f7ed5d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N084856213f9946c3a1ed7d8e279479b1',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N084856213f9946c3a1ed7d8e279479b1',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N2c85aa43cfc74d75b1d77e0b392d22c8',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#hasValue': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Italy',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasCountryOfOrigin',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PolloAdAstra',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'PolloAdAstra',
      },
      {
        '@language': 'pt',
        '@value': 'PolloAdAstra',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:Nb4de6cb35b854515be7f1b4332d3696c',
      },
      {
        '@id': '_:N35cf804e6661439b9964dd5151cc3776',
      },
      {
        '@id': '_:Nf18473f88d44413a93ecdc66ee33037b',
      },
      {
        '@id': '_:N12d36357a7944488a87192aa41a985ae',
      },
      {
        '@id': '_:N4ef8614ee33d40338b3eba0d2769198d',
      },
      {
        '@id': '_:N2bbbb980b8e34817ad4a30e7d2502092',
      },
      {
        '@id': '_:Nff946370db234270a336125fd3a95c9e',
      },
      {
        '@id': '_:N9c3137c731514a7faf46e0f076f9eb19',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Pollo Ad Astra',
      },
      {
        '@language': 'en',
        '@value': 'Pollo Ad Astra Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Pollo Ad Astra',
      },
    ],
  },
  {
    '@id': '_:Nb4de6cb35b854515be7f1b4332d3696c',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CajunSpiceTopping',
      },
    ],
  },
  {
    '@id': '_:N35cf804e6661439b9964dd5151cc3776',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ChickenTopping',
      },
    ],
  },
  {
    '@id': '_:Nf18473f88d44413a93ecdc66ee33037b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
      },
    ],
  },
  {
    '@id': '_:N12d36357a7944488a87192aa41a985ae',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N4ef8614ee33d40338b3eba0d2769198d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RedOnionTopping',
      },
    ],
  },
  {
    '@id': '_:N2bbbb980b8e34817ad4a30e7d2502092',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SweetPepperTopping',
      },
    ],
  },
  {
    '@id': '_:Nff946370db234270a336125fd3a95c9e',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N9c3137c731514a7faf46e0f076f9eb19',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N07a280eeb14d498a899057f7c8d6f144',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N07a280eeb14d498a899057f7c8d6f144',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CajunSpiceTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ChickenTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RedOnionTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SweetPepperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isToppingOf',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty', 'http://www.w3.org/2002/07/owl#FunctionalProperty'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value': 'Any given instance of topping should only be added to a single pizza (no cheap half-measures on our pizzas)',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subPropertyOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isIngredientOf',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#England',
    '@type': ['http://www.w3.org/2002/07/owl#Thing', 'http://www.w3.org/2002/07/owl#NamedIndividual', 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Country'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#DeepPanBase',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'BaseEspessa',
      },
      {
        '@language': 'en',
        '@value': 'DeepPanBase',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaBase',
      },
    ],
    'http://www.w3.org/2002/07/owl#disjointWith': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ThinAndCrispyBase',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Deep Pan Base',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty', 'http://www.w3.org/2002/07/owl#InverseFunctionalProperty'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value': 'Note that hasTopping is inverse functional because isToppingOf is functional',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#domain': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#range': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subPropertyOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasIngredient',
      },
    ],
    'http://www.w3.org/2002/07/owl#inverseOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isToppingOf',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SloppyGiuseppe',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'SloppyGiuseppe',
      },
      {
        '@language': 'pt',
        '@value': 'SloppyGiuseppe',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N7d2804d5a0a340158830eb0a6c70c8a6',
      },
      {
        '@id': '_:N53c2e081aa134c88af8dd9ce36a50681',
      },
      {
        '@id': '_:Ncfb61af0db2243979599ca9335d70254',
      },
      {
        '@id': '_:Na478e097b28a4abbaa5f3acd03dc4bb6',
      },
      {
        '@id': '_:Neac8fdf017f840d593376b4feb6d85ca',
      },
      {
        '@id': '_:N608598b0efc84a1485ce395ad763ae57',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Sloppy Giuseppe',
      },
      {
        '@language': 'en',
        '@value': 'Sloppy Giuseppe Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Sloppy Giuseppe',
      },
    ],
  },
  {
    '@id': '_:N7d2804d5a0a340158830eb0a6c70c8a6',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GreenPepperTopping',
      },
    ],
  },
  {
    '@id': '_:N53c2e081aa134c88af8dd9ce36a50681',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HotSpicedBeefTopping',
      },
    ],
  },
  {
    '@id': '_:Ncfb61af0db2243979599ca9335d70254',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:Na478e097b28a4abbaa5f3acd03dc4bb6',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
      },
    ],
  },
  {
    '@id': '_:Neac8fdf017f840d593376b4feb6d85ca',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N608598b0efc84a1485ce395ad763ae57',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Nf46193225833466c8bb3f085125d8a7e',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Nf46193225833466c8bb3f085125d8a7e',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GreenPepperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HotSpicedBeefTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MixedSeafoodTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeFrutosDoMarMistos',
      },
      {
        '@language': 'en',
        '@value': 'MixedSeafoodTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FishTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Mixed Seafood',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RealItalianPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaItalianaReal',
      },
      {
        '@language': 'en',
        '@value': 'RealItalianPizza',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': '_:N6520df8dd6ea45359a931450919bab8d',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:N17c5aba099924564930dd6b69a22613b',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value': 'Any Pizza that has the country of origin, Italy.  RealItalianPizzas must also only have ThinAndCrispy bases.',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Real Italian Pizza',
      },
    ],
  },
  {
    '@id': '_:N17c5aba099924564930dd6b69a22613b',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:N44bb005ea99a42daad05911a4410441d',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N44bb005ea99a42daad05911a4410441d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#hasValue': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Italy',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasCountryOfOrigin',
      },
    ],
  },
  {
    '@id': '_:N6520df8dd6ea45359a931450919bab8d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ThinAndCrispyBase',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasBase',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpinachTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeEspinafre',
      },
      {
        '@language': 'en',
        '@value': 'SpinachTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:N4d1450829a734c10b0338166e67895b8',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Spinach',
      },
    ],
  },
  {
    '@id': '_:N4d1450829a734c10b0338166e67895b8',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Capricciosa',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Capricciosa',
      },
      {
        '@language': 'pt',
        '@value': 'Capricciosa',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:Ncd03aa37ebdf401db68c7165a57a5a21',
      },
      {
        '@id': '_:Na55c54cd2ea84cf99d27a009099e62f2',
      },
      {
        '@id': '_:Na800fb6141b446b9a74ecaee2711a752',
      },
      {
        '@id': '_:N7fbfdcfce96d4ae4877c5ea2906759b6',
      },
      {
        '@id': '_:Nf82e7ee019804ac38ec43aae087ee9a1',
      },
      {
        '@id': '_:Ndbc517a50a974da98844f4d7c6d08827',
      },
      {
        '@id': '_:N0ab0937811a0460aab86295e4505df05',
      },
      {
        '@id': '_:Nbc3fbc95108c4f6898c163f7aeaacde5',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Capricciosa',
      },
      {
        '@language': 'en',
        '@value': 'Capricciosa Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Capricciosa',
      },
    ],
  },
  {
    '@id': '_:Ncd03aa37ebdf401db68c7165a57a5a21',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
      },
    ],
  },
  {
    '@id': '_:Na55c54cd2ea84cf99d27a009099e62f2',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
      },
    ],
  },
  {
    '@id': '_:Na800fb6141b446b9a74ecaee2711a752',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
      },
    ],
  },
  {
    '@id': '_:N7fbfdcfce96d4ae4877c5ea2906759b6',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:Nf82e7ee019804ac38ec43aae087ee9a1',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:Ndbc517a50a974da98844f4d7c6d08827',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
      },
    ],
  },
  {
    '@id': '_:N0ab0937811a0460aab86295e4505df05',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nbc3fbc95108c4f6898c163f7aeaacde5',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N9467a594787b40ac9de1ffa170f90edc',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N9467a594787b40ac9de1ffa170f90edc',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N9e14902d1fe44630806149ea912fcff3',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ArtichokeTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AsparagusTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CaperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LeekTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PepperTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PetitPoisTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RocketTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpinachTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isBaseOf',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty', 'http://www.w3.org/2002/07/owl#FunctionalProperty', 'http://www.w3.org/2002/07/owl#InverseFunctionalProperty'],
    'http://www.w3.org/2000/01/rdf-schema#subPropertyOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isIngredientOf',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Cajun',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Cajun',
      },
      {
        '@language': 'pt',
        '@value': 'Cajun',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N2695330c602e4457807cebda97c417ba',
      },
      {
        '@id': '_:N672d7ab1b6794b92893764b14b20859a',
      },
      {
        '@id': '_:N218b7f0d1ad3405fabbd386ca92eb72b',
      },
      {
        '@id': '_:N46dadc8f7ee645ec88607aa31c42f9e8',
      },
      {
        '@id': '_:N4795b120f3584ff1b35d2d82f90fcf90',
      },
      {
        '@id': '_:N8890e76a44ed4aedb83feb1e6db1ef3d',
      },
      {
        '@id': '_:Nc502897e44104897945be42c33cc7f32',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Cajun',
      },
      {
        '@language': 'en',
        '@value': 'Cajun Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Cajun',
      },
    ],
  },
  {
    '@id': '_:N2695330c602e4457807cebda97c417ba',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N672d7ab1b6794b92893764b14b20859a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
      },
    ],
  },
  {
    '@id': '_:N218b7f0d1ad3405fabbd386ca92eb72b',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
      },
    ],
  },
  {
    '@id': '_:N46dadc8f7ee645ec88607aa31c42f9e8',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PrawnsTopping',
      },
    ],
  },
  {
    '@id': '_:N4795b120f3584ff1b35d2d82f90fcf90',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TobascoPepperSauce',
      },
    ],
  },
  {
    '@id': '_:N8890e76a44ed4aedb83feb1e6db1ef3d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nc502897e44104897945be42c33cc7f32',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N026dfc5aef5049e8b606c6c4327290a2',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N026dfc5aef5049e8b606c6c4327290a2',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperonataTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PrawnsTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TobascoPepperSauce',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'CheeseTopping',
      },
      {
        '@language': 'pt',
        '@value': 'CoberturaDeQueijo',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Cheese',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Soho',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Soho',
      },
      {
        '@language': 'pt',
        '@value': 'Soho',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:N576ed02b91af4cf28b43e2fc868f1fbb',
      },
      {
        '@id': '_:N085b7bd840464060ac1c56531ba833f3',
      },
      {
        '@id': '_:N276b9c26949e42c28398a5816bbcbb68',
      },
      {
        '@id': '_:Neee9584e8b10433daa32d2fee439487c',
      },
      {
        '@id': '_:Ne312cc4f6f7d4ae48e26960cabf40e6a',
      },
      {
        '@id': '_:Naef4732387d8468fb904c02d78af8fe8',
      },
      {
        '@id': '_:Nfffeaa34ec5040059b814b8dfd96d2b1',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'Soho',
      },
      {
        '@language': 'en',
        '@value': 'Soho Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Soho',
      },
    ],
  },
  {
    '@id': '_:N576ed02b91af4cf28b43e2fc868f1fbb',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
      },
    ],
  },
  {
    '@id': '_:N085b7bd840464060ac1c56531ba833f3',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:N276b9c26949e42c28398a5816bbcbb68',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:Neee9584e8b10433daa32d2fee439487c',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
      },
    ],
  },
  {
    '@id': '_:Ne312cc4f6f7d4ae48e26960cabf40e6a',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RocketTopping',
      },
    ],
  },
  {
    '@id': '_:Naef4732387d8468fb904c02d78af8fe8',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:Nfffeaa34ec5040059b814b8dfd96d2b1',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:N5ec9cef582e646dba2a714054b7b0ba6',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:N5ec9cef582e646dba2a714054b7b0ba6',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GarlicTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ParmesanTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RocketTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.w3.org/2004/02/skos/core#prefLabel',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://purl.org/dc/terms/provenance',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#RedOnionTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCebolaVermelha',
      },
      {
        '@language': 'en',
        '@value': 'RedOnionTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OnionTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Red Onion',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCarne',
      },
      {
        '@language': 'en',
        '@value': 'MeatTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Meat',
      },
    ],
  },
  {
    '@id': '_:N2a09abadec3f4fd3bf53d69e74e13c37',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#ChickenTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HotSpicedBeefTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PeperoniSausageTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#LaReine',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'LaReine',
      },
      {
        '@language': 'pt',
        '@value': 'LaReine',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NamedPizza',
      },
      {
        '@id': '_:Na43805f7cbd74899a1c5040674e37c51',
      },
      {
        '@id': '_:N1c1aa4b6b9f642ee832a9f53c78f23c0',
      },
      {
        '@id': '_:Ne979505177bf44b2a2d78627ee8e36e5',
      },
      {
        '@id': '_:N4513779dbf4e4311b94d9ddd8d9e0807',
      },
      {
        '@id': '_:N087ba60be2e34ed2844217d9eefae868',
      },
      {
        '@id': '_:N70136b33af694c97b5a8372ba620e165',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#altLabel': [
      {
        '@language': 'en',
        '@value': 'La Reine',
      },
      {
        '@language': 'en',
        '@value': 'La Reine Pizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'La Reine',
      },
    ],
  },
  {
    '@id': '_:Na43805f7cbd74899a1c5040674e37c51',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
      },
    ],
  },
  {
    '@id': '_:N1c1aa4b6b9f642ee832a9f53c78f23c0',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
      },
    ],
  },
  {
    '@id': '_:Ne979505177bf44b2a2d78627ee8e36e5',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
      },
    ],
  },
  {
    '@id': '_:N4513779dbf4e4311b94d9ddd8d9e0807',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
      },
    ],
  },
  {
    '@id': '_:N087ba60be2e34ed2844217d9eefae868',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
      },
    ],
  },
  {
    '@id': '_:N70136b33af694c97b5a8372ba620e165',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': '_:Nf1211a9664094e71bca04912d4af069d',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': '_:Nf1211a9664094e71bca04912d4af069d',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#unionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MozzarellaTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MushroomTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#OliveTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#TomatoTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#isIngredientOf',
    '@type': ['http://www.w3.org/2002/07/owl#ObjectProperty', 'http://www.w3.org/2002/07/owl#TransitiveProperty'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value': 'The inverse property tree to hasIngredient - all subproperties and attributes of the properties should reflect those under hasIngredient.',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#America',
    '@type': ['http://www.w3.org/2002/07/owl#Thing', 'http://www.w3.org/2002/07/owl#NamedIndividual', 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Country'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Medium',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'Media',
      },
      {
        '@language': 'en',
        '@value': 'Medium',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Spiciness',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Medium',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PetitPoisTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaPetitPois',
      },
      {
        '@language': 'en',
        '@value': 'PetitPoisTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetableTopping',
      },
      {
        '@id': '_:N1528129fda4e44e0adc1a304bb52b5bb',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Petit Pois',
      },
    ],
  },
  {
    '@id': '_:N1528129fda4e44e0adc1a304bb52b5bb',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Mild',
      },
      {
        '@language': 'pt',
        '@value': 'NaoPicante',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Spiciness',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#SpicyTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaTemperada',
      },
      {
        '@language': 'en',
        '@value': 'SpicyTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:N8542235679c94d358e772954bb1a35ac',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value': 'Any pizza topping that has spiciness Hot',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Spicy',
      },
    ],
  },
  {
    '@id': '_:N8542235679c94d358e772954bb1a35ac',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
          },
          {
            '@id': '_:Nc37bdc5e9a3243f4b4287d2cd760f616',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Nc37bdc5e9a3243f4b4287d2cd760f616',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
      },
    ],
  },
  {
    '@id': '_:N5109df1cd7604991b5afd9e0ac4d2eac',
    '@type': ['http://www.w3.org/2002/07/owl#AllDisjointClasses'],
    'http://www.w3.org/2002/07/owl#members': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#AnchoviesTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MixedSeafoodTopping',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PrawnsTopping',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Country',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value':
          'A class that is equivalent to the set of individuals that are described in the enumeration - ie Countries can only be either America, England, France, Germany or Italy and nothing else. Note that these individuals have been asserted to be allDifferent from each other.',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'Country',
      },
      {
        '@language': 'pt',
        '@value': 'Pais',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Neef0a7184e284c3fbe990c0e80bb012f',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Country',
      },
    ],
  },
  {
    '@id': '_:Neef0a7184e284c3fbe990c0e80bb012f',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#DomainConcept',
          },
          {
            '@id': '_:N999a052267544b05894022bc3812f445',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:N999a052267544b05894022bc3812f445',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#oneOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#America',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#England',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#France',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Germany',
          },
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Italy',
          },
        ],
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetarianPizzaEquivalent1',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#comment': [
      {
        '@language': 'en',
        '@value':
          'Any pizza that only has vegetarian toppings or no toppings is a VegetarianPizzaEquiv1. Should be inferred to be equivalent to VegetarianPizzaEquiv2.  Not equivalent to VegetarianPizza because PizzaTopping is not covering',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'PizzaVegetarianaEquivalente1',
      },
      {
        '@language': 'en',
        '@value': 'VegetarianPizza1',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Ndcecc2938af64b9082f0e906e1eec241',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Vegetarian Pizza1',
      },
    ],
  },
  {
    '@id': '_:Ndcecc2938af64b9082f0e906e1eec241',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:Na721dd8e6ab04d459e4d985f4019e780',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Na721dd8e6ab04d459e4d985f4019e780',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#allValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetarianTopping',
      },
    ],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasTopping',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NutTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDeCastanha',
      },
      {
        '@language': 'en',
        '@value': 'NutTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
      },
      {
        '@id': '_:N53b49d8152b54ef184b9000bb9091a3d',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Nut',
      },
    ],
  },
  {
    '@id': '_:N53b49d8152b54ef184b9000bb9091a3d',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HotGreenPepperTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDePimentaoVerdePicante',
      },
      {
        '@language': 'en',
        '@value': 'HotGreenPepperTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#GreenPepperTopping',
      },
      {
        '@id': '_:N53293138d1ee42bf95338deea06dad06',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Hot Green Pepper',
      },
    ],
  },
  {
    '@id': '_:N53293138d1ee42bf95338deea06dad06',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Hot',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#FourCheesesTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaQuatroQueijos',
      },
      {
        '@language': 'en',
        '@value': 'FourCheesesTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#CheeseTopping',
      },
      {
        '@id': '_:N43d03ea1828740ad9b2be318b40de009',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Four Cheeses',
      },
    ],
  },
  {
    '@id': '_:N43d03ea1828740ad9b2be318b40de009',
    '@type': ['http://www.w3.org/2002/07/owl#Restriction'],
    'http://www.w3.org/2002/07/owl#onProperty': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#hasSpiciness',
      },
    ],
    'http://www.w3.org/2002/07/owl#someValuesFrom': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Mild',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#HamTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDePresunto',
      },
      {
        '@language': 'en',
        '@value': 'HamTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#MeatTopping',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Ham',
      },
    ],
  },
  {
    '@id': 'http://purl.org/dc/terms/license',
    '@type': ['http://www.w3.org/2002/07/owl#AnnotationProperty'],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#NonVegetarianPizza',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'en',
        '@value': 'NonVegetarianPizza',
      },
      {
        '@language': 'pt',
        '@value': 'PizzaNaoVegetariana',
      },
    ],
    'http://www.w3.org/2002/07/owl#disjointWith': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetarianPizza',
      },
    ],
    'http://www.w3.org/2002/07/owl#equivalentClass': [
      {
        '@id': '_:Nc2360d8e44784a978015922b7ed01599',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#definition': [
      {
        '@language': 'en',
        '@value': 'Any Pizza that is not a VegetarianPizza',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Non Vegetarian Pizza',
      },
    ],
  },
  {
    '@id': '_:Nc2360d8e44784a978015922b7ed01599',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#intersectionOf': [
      {
        '@list': [
          {
            '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Pizza',
          },
          {
            '@id': '_:Ndab31c9a4e3e461da64ec39df40e2c30',
          },
        ],
      },
    ],
  },
  {
    '@id': '_:Ndab31c9a4e3e461da64ec39df40e2c30',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2002/07/owl#complementOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#VegetarianPizza',
      },
    ],
  },
  {
    '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#PizzaTopping',
    '@type': ['http://www.w3.org/2002/07/owl#Class'],
    'http://www.w3.org/2000/01/rdf-schema#label': [
      {
        '@language': 'pt',
        '@value': 'CoberturaDaPizza',
      },
      {
        '@language': 'en',
        '@value': 'PizzaTopping',
      },
    ],
    'http://www.w3.org/2000/01/rdf-schema#subClassOf': [
      {
        '@id': 'http://www.co-ode.org/ontologies/pizza/pizza.owl#Food',
      },
    ],
    'http://www.w3.org/2004/02/skos/core#prefLabel': [
      {
        '@language': 'en',
        '@value': 'Pizza Topping',
      },
    ],
  },
];
