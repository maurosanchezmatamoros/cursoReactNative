import Svg, { Path } from "react-native-svg"
import { View } from "react-native"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    CheckSvg: {
        width: 32,
        height: 32,
        backgroundColor: '#2BB310',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const CheckSvg = (props) => (
<View style={styles.CheckSvg}>
<Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 480.358 480.358"
    style={{
        enableBackground: "new 0 0 480.358 480.358",
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    fill='#fff'
    {...props}
  >
    <Path d="M387.702 43.753 181.316 253.467l-90.84-88.044L0 258.771l183.479 177.834 296.879-301.667-92.656-91.185zM182.98 394.343 42.421 258.108l48.719-50.265 90.676 87.886L388.042 86.178l49.892 49.1L182.98 394.343z" />
  </Svg>
</View>
)

export default CheckSvg