import React from 'react'
import {Text} from 'pikachus-uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'



export default function TimelineText (){
    const TranslateString = useI18n()

    const TextContainer = styled.div`
        position: relative;
        display:flex;
        flex-direction: row;
        right:15px;
        bottom:10px;
    `
    const TextSpace = styled.div`
        margin: auto;
    `
    return(
    <TextContainer>
    <Text>{TranslateString(643,"Farms")}</Text>
    <TextSpace />
    <Text>{TranslateString(643,"NFTs")}</Text>
    <TextSpace />
    <Text>{TranslateString(643,"Lottery")}</Text>
    <TextSpace />
    <Text>{TranslateString(643,"Merch")}</Text>
    <TextSpace />
    <Text>{TranslateString(643,"Game")}</Text>
    <TextSpace />
    </TextContainer>
    )
}