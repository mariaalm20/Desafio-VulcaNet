import React, { useState, useEffect } from 'react';

import {
   Container, 
   ListPlans, 
   InfoPlans,
   TitlePlan,
   NamePlan,
   DescriptionPlan,
   PricePlan,
   ButtonSelect,
   ListFeatures,
   DescriptionFeatures,
   NameFeature,
   Attendants,
   ColumnAttendants,
   NameAttendants,
   DescriptionAttendants,
   Count,
   ButtonLeft,
   ButtonRight,
   QuantitiesAttendants,
   Footer,
   Total,
   SelectPlan,
   ColumnFooter
   } from './styles'

import api from '../../services/api'

import frame from '../../assets/Frame.svg'
import check from '../../assets/check.png'
import right from '../../assets/right.png'
import left from '../../assets/left.png'

import Button from '../Alert'

interface TypePlan {
  isMonth?:boolean
}

interface Prices {
  monthly: number,
  yearly: number
}

interface Cost {
  cost: number
}

interface Plans {
  id: number,
  name: string,
  description: string,
  prices: Prices,
  features: Array<string>
} 

const TabPanel: React.FC<TypePlan> = ({
  isMonth,
}) => {
  const [plans, setPlans] = useState<Plans[]>([])
  const [count, setCount] = useState(0)

  const [cost, setCost] = useState<Cost>({
    cost: 0
  })

  const [selectPlanMonth, setSelectPlanMonth] = useState(250)
  const [selectPlanYear, setSelectPlanYear] = useState(230)

  const [selectTypePlan, setSelectTypePlan] = useState('Plano 2.0')

  
  useEffect(() => {
    api.get('/plans').then(response => {
      setPlans(response.data)
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    api.get('/attendant').then(response => {
      setCost(response.data)
      console.log(response.data)
    })
  }, [])


  function handleDecreaseCount() {
    const decrementerCount = count - 1


    const decrementSelectMonth = selectPlanMonth -  cost.cost
    const decrementSelectYear = selectPlanYear -  cost.cost

    if (decrementerCount < 0) {
      setCount(0)
    } else {
      setCount(decrementerCount)
      setSelectPlanMonth(decrementSelectMonth)
      setSelectPlanYear(decrementSelectYear)
    }
  }

  function handleIncreaseCount() {
    const increaseCount = count + 1

    const incrementSelectMonth = selectPlanMonth + cost.cost
    const incrementSelectYear = selectPlanYear + cost.cost

    setCount(increaseCount)

    setSelectPlanMonth(incrementSelectMonth)
    setSelectPlanYear(incrementSelectYear)
  }

  function handleSelectPlan(id: number) {
    const selectedPlan = plans.findIndex((plan) => plan.id === id)

    if(selectedPlan === 0) {
      setSelectPlanMonth(150)
      setSelectPlanYear(120)
      setSelectTypePlan('Plano 1.0')
    }else if (selectedPlan === 1 ){
      setSelectPlanMonth(250)
      setSelectPlanYear(230)
      setSelectTypePlan('Plano 2.0')
    }else{
      setSelectPlanMonth(450)
      setSelectPlanYear(430)
      setSelectTypePlan('Plano Turbo')
    }

    console.log(selectedPlan)

    return (
      <ButtonSelect className = 'active' />
    )
    
  }

 

  return (
      <Container>
        <ListPlans>
          {plans.map((plan) => (
              <InfoPlans key ={plan.id}>
                <TitlePlan>
                  <img src = {frame} alt = "Frame"/>
                  <NamePlan>{plan.name}</NamePlan>
                </TitlePlan>
                <DescriptionPlan>{plan.description}</DescriptionPlan>
                
                {isMonth ? (
                  <PricePlan>R${plan.prices.monthly}/mês</PricePlan>
                ) : (
                  <PricePlan>R${plan.prices.yearly}/mês</PricePlan>
                )}
                
                <ButtonSelect
                 onClick = {() => handleSelectPlan(plan.id)}
                 className = {
                   plan.id === 2 && selectTypePlan !== 'Plano 1.0' && selectTypePlan !== 'Plano Turbo' ?
                    'active' : 
                    (plan.id === 1 && selectTypePlan !== 'Plano 2.0' && selectTypePlan !== 'Plano Turbo' ? 
                     'active' : (
                       plan.id === 3 && selectTypePlan !== 'Plano 1.0' && selectTypePlan !== 'Plano 2.0' ? 
                       'active' : ''
                     ))
                  }
                 >
                   Selecionar
                 </ButtonSelect>
              

                <ListFeatures>
                  {plan.features.map((feature) => (
                     <DescriptionFeatures key = {feature}>
                       <TitlePlan>
                         <img src ={check} alt="Check"/>
                         <NameFeature>{feature}</NameFeature>
                       </TitlePlan>
                      </DescriptionFeatures>
                  ))}
                </ListFeatures>
              </InfoPlans>
          ))}
        </ListPlans>

        <Attendants>
           <ColumnAttendants>
              <NameAttendants>Atendentes</NameAttendants>
              <DescriptionAttendants>+R$130/mês por atendente</DescriptionAttendants>
           </ColumnAttendants>

           <Count>
             <ButtonLeft onClick = {handleDecreaseCount}>
               <img src = {left} alt="ButtonLeft"/>
             </ButtonLeft>
                  <QuantitiesAttendants>{count}</QuantitiesAttendants>
             <ButtonRight onClick = {handleIncreaseCount}>
               <img src = {right} alt="ButtonRight"/>
             </ButtonRight>
           </Count>
            
        </Attendants>
        
        <Footer>
        <ColumnFooter>
         {isMonth ? (
           <>
            <Total>
               Total: R${selectPlanMonth}/mês
             </Total>
            <SelectPlan>
              Plano selecionado: {selectTypePlan} - Mensal
            </SelectPlan>
            </>
         ) : (
          <>
          <Total>
             Total: R${selectPlanYear}/mês
           </Total>
          <SelectPlan>
            Plano selecionado: {selectTypePlan} - Anual
          </SelectPlan>
          </>
         )}
          
          </ColumnFooter>


       <Button />
        </Footer>
      </Container>
  )
}

export default TabPanel