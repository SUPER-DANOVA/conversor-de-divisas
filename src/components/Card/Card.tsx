import React, { useState, useEffect } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonButton  } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import "./Card.css"

function Card() {

    const [quetzales, setQuetzales] = useState('');
    const [dolares, setDolares] = useState('');


    useEffect(() => {
        const cambio = 8;
        const dolaresValue = (parseFloat(quetzales) / cambio).toFixed(2);
        setDolares(dolaresValue);
      }, [quetzales]);


  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Convertir Quetzales a Dolares</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>

        <IonItem>
            <IonInput label="Quetzales" 
            placeholder="Ingresa el valor en Quetzales"
            value={quetzales}
            onIonChange={(e) => setQuetzales(e.detail.value || '')}
            ></IonInput>
        </IonItem>


        <IonItem className="centered-item">
            <IonIcon src="/public/arrow-down-outline.svg" style={{ fontSize: '24px', margin: '0 auto' }}></IonIcon>
        </IonItem>

  

        <IonItem>
            <IonInput label="Dolares" value={dolares} disabled={true}></IonInput>
        </IonItem>


      </IonCardContent>
    </IonCard>
  );
}
export default Card;