import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      <S.PostItemTag background="#ff9999">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de Julho de 2020 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Vamos aprender JS</S.PostItemTitle>
        <S.PostItemDescription>Dicas para aprender JS</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
