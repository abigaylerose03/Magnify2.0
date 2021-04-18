import { Dimensions } from 'react-native';

const Constants = {
    MAX_WIDTH: Dimensions.get("screen").width,
    MAX_HEIGHT: Dimensions.get("screen").height,
    GAP_SIZE: 800, // gap between the two parts of the pipe
    PIPE_WIDTH: 100, // width of the pipe

    COIN_WIDTH: 6,
    GAP_SIZE_COINS: 3 // gap between coins
}

export default Constants;