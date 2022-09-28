interface Window {}

// Project type mixins.
declare namespace pc {
  interface ScriptComponent {
    pcScript?: import("./src/pc-script").PcScript;
  }
}
