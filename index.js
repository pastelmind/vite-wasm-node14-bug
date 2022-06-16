import wasmInit from "./add-two-numbers/pkg/add_two_numbers_bg.wasm?init";

const a = 123;
const b = 456;

(async () => {
  try {
    const wasm = await wasmInit({});
    const sum = wasm.exports.add(a, b);
    console.log(`${a} + ${b} = ${sum}`);
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
})();
