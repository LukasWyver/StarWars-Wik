import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(400)}px;
`
export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
export const HeroGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.metrics.px(24)}px;
  padding-right: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`
export const ButtonsView = styled.View`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`
