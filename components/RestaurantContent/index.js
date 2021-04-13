import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

function RestaurantContent() {
  return (
    <View>
      <Text>Restaurantes</Text>
      <Image
        source={{ uri: 'https://miro.medium.com/max/5376/1*9jsQZA2_yz3lOi1FrCg2zg.jpeg' }}
        style={{
          width: 300,
          height: 300,
        }}
      />
      <Text>
        Existen distintos tipos de servicios de mesa, según la forma de preparar, presentar y servir las bebidas y alimentos. De todos ellos, el más empleado a nivel mundial es el servicio a la rusa.
        Servicio francés: se asocia generalmente a la gastronomía francesa, aunque hoy en día es poco empleado incluso en Francia, más allá de en restaurantes clásicos de alto nivel. La principal característica de este servicio es que todo su menú es elaborado en el restaurante en presencia del cliente. Los ingredientes se traen de la cocina y se les muestran al cliente para su inspección. Posteriormente, son devueltos a la cocina, donde se preparan de una pieza. Una vez cocinados, el maître los presenta a los comensales, que eligen de entre lo presentado la cantidad que desean comer, de manera que el maître prepara la ración delante de los clientes y la sirve en su plato, sirviendo siempre por la izquierda. Este tipo de servicio precisa gran habilidad del personal para ser eficaz, y aun así requiere gran cantidad de personal; los camareros deben estar familiarizados con los ingredientes del menú y los métodos de preparación. El servicio francés es por todo ello muy caro y solo se emplea en los restaurantes de más alto nivel.
        Servicio a la rusa: pese a su nombre, parece ser que se originó en Francia a principios del siglo XIX, probablemente como servicio de mesa del embajador ruso Alexander Kurakin. Al sentarse a la mesa, los comensales encuentran con un plato vacío –el plato de servicio– sobre el que se coloca una servilleta, así como toda la cubertería necesaria, a excepción de cubiertos de postre y, en algunas ocasiones, cubiertos específicos como lo son los cuchillos de carne o pescado. Se espera del comensal que nada más sentarse coloque la servilleta sobre su regazo. Tras elegir aquello que se va a comer, se retira el plato de servicio y se van trayendo los platos encargados siguiendo un orden específico, usualmente sopa y entremeses, primeros y segundos platos, postres. Los platos son servidos totalmente preparados y presentados, sin requerir ninguna acción por parte del servicio. Usualmente, según se vaya acabando de comer un plato, este es retirado y sustituido por el siguiente sin esperar al resto de comensales, aunque esto se vea afectado por los tiempos del comedor y cocina; además, tradicionalmente se hace esperar para los entremeses y el plato principal. El maître actúa aquí de jefe de sala, pero no toma parte activa en servir platos, dado que estos vienen ya preparados y presentados de cocina. Los camareros solo tienen que servir un plato ya preparado, por lo que se requiere de todo el personal una menor formación. El chef y el personal de cocina se encargan del emplatado y la presentación, y en general tienen mayor protagonismo que en el servicio a la francesa. Por ello, este servicio, mucho más dinámico, es el más empleado hoy en día.
        Servicio a la inglesa: en este servicio, el cliente se encuentra una mesa con un plato de servicio vacío y toda la cubertería necesaria, pero a diferencia del servicio a la rusa en este caso el camarero sirve los alimentos al cliente desde una fuente o bandeja. Los alimentos se sirven por la izquierda. La presentación de plato se pierde, y como el servicio es muy incómodo tanto para camarero como para comensal, el servicio a la inglesa solo es empleado en algunos banquetes.
        Servicio americano: así llamado al servicio sencillo asociado a los restaurantes estadounidenses, una simplificación del servicio a la rusa. La característica que distingue este servicio estadounidense es su rapidez, la comida se prepara en la cocina y un camarero la lleva a la mesa de los comensales. Los entremeses se reducen al máximo y las reglas del servicio son muy sencillas. Servir los alimentos por la derecha, las bebidas por la derecha y retirar los platos por la izquierda. No se requiere de mucho personal porque el servicio no es complicado; este servicio es común en las cafeterías, en los almacenes comerciales y en la mayor parte de los restaurantes.
        Servicio tradicional: tiene asistencia total a la mesa y se realiza en la mayoría de los establecimientos (restaurantes, bares, cafeterías, hoteles).
      </Text>
    </View>
  );
}

export default RestaurantContent;
