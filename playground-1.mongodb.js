use("Loja");

db.carros.insertMany([{carro:"Maverick",ano:1972},{carro:"Mustang",ano:1969},{carro:"camaro",ano:1977}])

db.carros.find({"ano":{$gt:1}});

