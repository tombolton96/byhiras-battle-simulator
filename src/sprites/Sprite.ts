import styled from 'styled-components'
import Spritesheet from 'react-responsive-spritesheet'

const Sprite = styled(Spritesheet)`
    width: ${(p: { width: string }) => p.width ? p.width : '200px'};
`

export default Sprite