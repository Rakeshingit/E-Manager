import { Dimensions, PixelRatio } from "react-native";

const {width} = Dimensions.get("window")
const scale = width / 375;

const normalize = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const Colors = {
    background: "#F8F9FA",
    white: "#ffffff",
    borderGray: "#D3D3D3",
    textGray: "#757575",
    textBlack: "#212121",
    primary: "#3F51B5",
};

const FontSizes = {
    BODY: normalize(14),
    H1: normalize(32),
    H2: normalize(24),
    H3: normalize(20),
    BUTTON_TEXT: normalize(16),
    TEXT_INPUT: normalize(16),
    CAPTIONS: normalize(12),
    SMALL_LABEL: normalize(10),
}

const FontWeights = {

}

export const Theme = {
    Colors,
    FontSizes,
    FontWeights,
};