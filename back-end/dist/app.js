"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});
app.post("/users/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.name);
    console.log("Bateu aqui");
    // const newUser = new User();
    res.status(200).send("Usuario criado com sucesso");
    // await newUser.save(req.body);
}));
try {
    app.listen(port, () => {
        console.log(`server is listening on ${port}`);
    });
}
catch (err) {
    console.log(`Error occurred: ${err.message}`);
}
//# sourceMappingURL=app.js.map