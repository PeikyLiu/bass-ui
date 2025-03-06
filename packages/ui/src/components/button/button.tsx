import { defineComponent } from "vue";
import "@/styles/button.scss";
export default defineComponent({
  name: "BassButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "medium",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  setup(props) {
    return () => <div class="bass-button">123133</div>;
  },
});
