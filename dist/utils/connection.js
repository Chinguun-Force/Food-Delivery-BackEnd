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
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI;
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(MONGODB_URI);
    console.log("Connected to database");
});
exports.connection = connection;
// curl "https://playmax.mn/" \
//    -X GET \
//    -H 'cookie: token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BsYXltYXgubW4vYXBpL20vcXIvY2hlY2svJDJ5JDEwJFF4Z1QzcjNibktsaGRPZC5BanpyT3NSZDZUOVROZm43R2FOSGhxVTV4SGt4c090QWUwclciLCJpYXQiOjE3NDQxODUyNzAsImV4cCI6MTc0NDU0NTI3MCwibmJmIjoxNzQ0MTg1MjcwLCJqdGkiOiJKeHFFOWtIVXllMnZIZmlYIiwic3ViIjoxMTAxMTg0LCJwcnYiOiJkNzlmMjAzMWY0ZTYxYjY1MDY0NjE0YmZhMjY1OTBkNmIwYWI2ZThlIn0.eeV79t9yzf3Wy6mEhreo_ny2IBO5d7a_nGkVn6hBgy8; _gid=GA1.2.900568249.1744185272; XSRF-TOKEN=eyJpdiI6Ikh6bTJma3Bqc0wzdHJSVkM2eXBtSXc9PSIsInZhbHVlIjoiS2dyYVdnWlBqbGF2aG5vU2piMlpMZHBFRmYrcS91UnRtWm9TelBiTUdHNmRQZmliNW8yT1VWdXFTYVNxaEZ1VG13WXBmNDlrNENZYU1mdWFZcFJiWGk3ckxrSHFEQXBPQ2tDRW5FZWl2NEF6Q0ZPQkZYWm80WkNvaWVQeFpNeEoiLCJtYWMiOiI4M2RiY2ViOTk2Njg0YTVmYWMwMmI3NDI2NjViNWM3NzJiYWU2MWViMjc0OTc2YjlhNDRhZDA1MWY0M2Q3NTc1IiwidGFnIjoiIn0%3D; animax_session=eyJpdiI6IldrR0JCczlPWGVDbFF6ckkvdUtUVGc9PSIsInZhbHVlIjoiWGFaMGRxSUZOVC9zbFZRTk1haXRRSy9qenIrSFFDdHVNYVdhLzQzTlNOZ0ZQL2NUeW5DNTJHaUNNNkRjWlozMUhLK2hzQ3BlNFA2Rm15REdQRDk5b2tFSlRtUzZxcW40U0t0VG5zd2NZczRNaGF4RG1ITUI1d3ZYS2pRdEZRUWMiLCJtYWMiOiI1ODE5MDZiY2UzNzM0ZGZiNGYzMTA2NDk4Zjg3NjI0ODYyNDQ3MzQ0NDYyYmUxMTkxMWMwODBhZDRhYzk0MTFlIiwidGFnIjoiIn0%3D; _ga=GA1.1.276580616.1716801381; _ga_16D745WEM5=GS1.1.1744282530.607.0.1744282543.0.0.0' \
//    -H 'accept-language: en-US,en;q=0.9' \
//    -H 'accept-encoding: gzip, deflate, br, zstd' \
//    -H 'sec-ch-ua-platform: "Windows"' \
//    -H 'sec-ch-ua-mobile: ?0' \
//    -H 'sec-ch-ua: "Not A(Brand";v="8", "Chromium";v="132", "Opera";v="117"' \
//    -H 'sec-fetch-dest: document' \
//    -H 'sec-fetch-user: ?1' \
//    -H 'sec-fetch-mode: navigate' \
//    -H 'sec-fetch-site: none' \
//    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
//    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 OPR/117.0.0.0' \
//    -H 'upgrade-insecure-requests: 1' \
//    -H 'connection: keep-alive' \
//    -H 'host: playmax.mn';
// cookie
// token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BsYXltYXgubW4vYXBpL20vcXIvY2hlY2svJDJ5JDEwJFF4Z1QzcjNibktsaGRPZC5BanpyT3NSZDZUOVROZm43R2FOSGhxVTV4SGt4c090QWUwclciLCJpYXQiOjE3NDQxODUyNzAsImV4cCI6MTc0NDU0NTI3MCwibmJmIjoxNzQ0MTg1MjcwLCJqdGkiOiJKeHFFOWtIVXllMnZIZmlYIiwic3ViIjoxMTAxMTg0LCJwcnYiOiJkNzlmMjAzMWY0ZTYxYjY1MDY0NjE0YmZhMjY1OTBkNmIwYWI2ZThlIn0.eeV79t9yzf3Wy6mEhreo_ny2IBO5d7a_nGkVn6hBgy8; _gid=GA1.2.900568249.1744185272; XSRF-TOKEN=eyJpdiI6Ikh6bTJma3Bqc0wzdHJSVkM2eXBtSXc9PSIsInZhbHVlIjoiS2dyYVdnWlBqbGF2aG5vU2piMlpMZHBFRmYrcS91UnRtWm9TelBiTUdHNmRQZmliNW8yT1VWdXFTYVNxaEZ1VG13WXBmNDlrNENZYU1mdWFZcFJiWGk3ckxrSHFEQXBPQ2tDRW5FZWl2NEF6Q0ZPQkZYWm80WkNvaWVQeFpNeEoiLCJtYWMiOiI4M2RiY2ViOTk2Njg0YTVmYWMwMmI3NDI2NjViNWM3NzJiYWU2MWViMjc0OTc2YjlhNDRhZDA1MWY0M2Q3NTc1IiwidGFnIjoiIn0%3D; animax_session=eyJpdiI6IldrR0JCczlPWGVDbFF6ckkvdUtUVGc9PSIsInZhbHVlIjoiWGFaMGRxSUZOVC9zbFZRTk1haXRRSy9qenIrSFFDdHVNYVdhLzQzTlNOZ0ZQL2NUeW5DNTJHaUNNNkRjWlozMUhLK2hzQ3BlNFA2Rm15REdQRDk5b2tFSlRtUzZxcW40U0t0VG5zd2NZczRNaGF4RG1ITUI1d3ZYS2pRdEZRUWMiLCJtYWMiOiI1ODE5MDZiY2UzNzM0ZGZiNGYzMTA2NDk4Zjg3NjI0ODYyNDQ3MzQ0NDYyYmUxMTkxMWMwODBhZDRhYzk0MTFlIiwidGFnIjoiIn0%3D; _ga=GA1.1.276580616.1716801381; _ga_16D745WEM5=GS1.1.1744282530.607.0.1744282543.0.0.0
// accept encoding 
// gzip, deflate, br, zstd
// sec fetch user 
// ?1
// accept
// text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
// user agent
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 OPR/117.0.0.0
// php version
// 8.1.32
// laravel version
// 9.52.16
// raw sql
// select * from `hyperlink` limit 1
//# sourceMappingURL=connection.js.map