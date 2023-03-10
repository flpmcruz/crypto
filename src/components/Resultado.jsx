
import styled from '@emotion/styled'

const Container = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Texto = styled.p`
    color: #fff;
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    color: #fff;
    font-size: 24px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({cotizacion}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion

  return (
    <Container>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Cripto image"
        />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Container>
  )
}

export default Resultado