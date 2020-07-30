export interface SpriteProps {
    animation: 'idle' | 'attacking' | 'dead'
}

export interface SpriteState {
    image: any,
    widthFrame: number,
    heightFrame: number
    steps: number,
    fps: number,
    loop?: boolean,
    onLoopComplete?: Function
    startAt?: number,
    endAt?: number
}
