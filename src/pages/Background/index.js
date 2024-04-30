import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import { useNavigate } from "react-router-dom";

function Background() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Redireciona para a rota de login
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Redireciona para a rota de registro
  };

  return (
    <>
      <Helmet>
        <title>lading</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* background section */}
      <div className="w-full bg-gray-900 pt-[97px] md:pt-5">
        {/* main content section */}
        <div className="bg-gray-900 pb-[39px] sm:pb-5">
          {/* navigation bar section */}
          <div className="flex flex-col items-center">
            {/* logo section */}
            <div className="h-[91px] self-stretch bg-gray-900 shadow-xs" />

            {/* content container section */}
            <div className="relative mx-auto mt-[-89px] flex w-full max-w-[1452px] flex-col gap-[676px] bg-white-A700 py-[18px] md:gap-[507px] md:p-5 sm:gap-[338px]">
              {/* header menu section */}
              <div className="flex flex-col items-center">
                {/* login register section */}
                <div className="flex w-[81%] items-center justify-between gap-5 md:w-full">
                  {/* logo image section */}
                  <Img
                    src="images/img_img_infraalerta.png"
                    alt="imginfraalerta"
                    className="h-[89px] w-[12%] rounded-[18px] object-cover"
                  />

                  {/* auth buttons section */}
                  <div className="mb-6 flex w-[19%] flex-wrap justify-between gap-5 self-end">
                    {/* login button section */}
                    <button onClick={handleLoginClick}>
                      <Heading as="h1" className="self-start">
                        Entrar
                      </Heading>
                    </button>

                    {/* register button section */}
                    <button onClick={handleRegisterClick}>
                      <Heading as="h2" className="self-end">
                        Registrar-se
                      </Heading>
                    </button>
                  </div>
                </div>

                {/* search and features section */}
                <div className="h-[17px] self-stretch bg-indigo-A400" />

                {/* feature list section */}
                <div className="mt-[30px] flex w-[79%] items-start gap-5 md:w-full md:flex-col">
                  {/* search section */}
                  <div className="w-[6%] md:w-full">
                    {/* search list section */}
                    <div className="flex flex-col gap-[25px] md:flex-row">
                      {/* search item section */}
                      <div className="flex flex-1 flex-col items-center gap-[7px] rounded-[10px] border border-solid border-white-A700 bg-indigo-A400 p-[7px]">
                        {/* search icon section */}
                        <Img src="images/img_search.png" alt="buscar" className="mt-2 h-[24px] w-[24px] object-cover" />

                        {/* search text section */}
                        <Text size="xs" as="p" className="text-center !text-white-A700">
                          Buscar
                        </Text>
                      </div>

                      {/* important box section */}
                      <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-gray-300 bg-white-A700 p-2">
                        {/* important box icon section */}
                        <Img
                          src="images/img_box_important.png"
                          alt="boximportant"
                          className="h-[24px] w-[24px] object-cover"
                        />

                        {/* important box text container section */}
                        <div className="flex self-stretch">
                          {/* important box text section */}
                          <Text size="xs" as="p" className="w-[72%] text-center leading-[11px] !text-gray-600">
                            <>
                              Gerar
                              <br />
                              Relato
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-gray-300 bg-white-A700 p-2">
                        <Img src="images/img_icon.png" alt="icon" className="h-[24px] w-[24px] object-cover" />
                        <div className="flex self-stretch">
                          <Text size="xs" as="p" className="w-[98%] text-center leading-[11px] !text-gray-600">
                            <>
                              Mapa de
                              <br />
                              Serviços
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-gray-300 bg-white-A700 p-3">
                        <Img src="images/img_phone.png" alt="phone" className="h-[24px] w-[24px] object-cover" />
                        <div className="flex px-0.5">
                          <Text size="xs" as="p" className="text-center !text-gray-600">
                            SP 15
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-gray-300 bg-white-A700 p-2">
                        <Img src="images/img_help.png" alt="help" className="h-[24px] w-[24px] object-cover" />
                        <div className="flex">
                          <Text size="xs" as="p" className="self-end text-center !text-gray-600">
                            Ajuda
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* news highlight section */}
                  <div className="mt-[43px] flex flex-1 flex-col gap-4 rounded-[10px] md:self-stretch">
                    {/* highlight image section */}
                    <Img
                      src="images/img_dbbee0fb_4ecc_9.png"
                      alt="dbbee0fb4eccnin"
                      className="h-[387px] rounded-[10px] object-cover"
                    />

                    {/* news content section */}
                    <div className="flex flex-col items-start">
                      {/* news divider section */}
                      <div className="h-[-16px] w-full self-stretch bg-black-900_7f" />

                      {/* news headline section */}
                      <Text size="xl" as="p" className="ml-[41px] mt-4 tracking-[-1.00px] !text-white-A700 md:ml-0">
                        População elogia melhorias na cidade, “Os serviços públicos{" "}
                      </Text>

                      {/* news subheadline section */}
                      <Text size="xl" as="p" className="mt-[45px] text-center tracking-[-1.00px] !text-white-A700">
                        na cidade, ficaram mais eficazes, diz Roberto Carlos”{" "}
                      </Text>

                      {/* news details section */}
                      <Text size="lg" as="p" className="ml-[63px] mt-[103px] !text-white-A700 md:ml-0">
                        Pesquisa do Datafolha aponta que os números de anomalias na cidade de Sorocaba, cairam cerca de
                        77%.
                      </Text>
                    </div>
                  </div>

                  {/* news list section */}
                  <div className="flex w-[19%] flex-col gap-2 md:w-full md:flex-row sm:flex-col">
                    {/* city improvements item section */}
                    <div className="flex flex-1 flex-col items-start gap-[9px]">
                      {/* improvement image container section */}
                      <div className="self-stretch rounded-[10px] shadow-sm">
                        {/* improvement image section */}
                        <Img
                          src="images/img_download_1.png"
                          alt="image"
                          className="h-[163px] w-full rounded-[10px] object-cover md:h-auto"
                        />
                      </div>

                      {/* improvement description section */}
                      <div className="flex w-[95%] flex-col items-start gap-0.5 rounded-[10px] bg-white-A700 p-2 shadow-sm md:w-full">
                        {/* improvement headline section */}
                        <Text as="p" className="mt-[5px] !text-[13.89px]">
                          Prefeitura repara luzes
                        </Text>

                        {/* improvement subheadline section */}
                        <Text as="p" className="!text-[13.89px]">
                          queimadas no centro da{" "}
                        </Text>

                        {/* improvement details section */}
                        <Text as="p" className="!text-[13.89px]">
                          cidade e população{" "}
                        </Text>

                        {/* improvement footer section */}
                        <Text as="p" className="mb-3.5 !text-[13.89px]">
                          agradece
                        </Text>
                      </div>
                    </div>

                    {/* playground renovation item section */}
                    <div className="flex flex-1 flex-col items-start gap-[13px]">
                      {/* renovation image container section */}
                      <div className="self-stretch rounded-[10px] shadow-sm">
                        {/* renovation image section */}
                        <Img
                          src="images/img_97757708_57cd_5.png"
                          alt="9775770857cdfiv"
                          className="h-[163px] w-full rounded-[10px] object-cover md:h-auto"
                        />
                      </div>

                      {/* renovation description section */}
                      <div className="flex w-[95%] flex-col items-start gap-0.5 rounded-[10px] bg-white-A700 shadow-sm md:w-full">
                        {/* renovation headline section */}
                        <Text as="p" className="ml-[5px] mt-[9px] !text-[13.89px] md:ml-0">
                          Prefeitura transforma{" "}
                        </Text>

                        {/* renovation subheadline section */}
                        <Text as="p" className="ml-[5px] !text-[13.89px] md:ml-0">
                          Praça após relatos de{" "}
                        </Text>

                        {/* renovation details section */}
                        <Text as="p" className="ml-[5px] !text-[13.89px] md:ml-0">
                          precaridade em{" "}
                        </Text>

                        {/* renovation footer section */}
                        <Text as="p" className="ml-[5px] !text-[13.89px] md:ml-0">
                          brinquedos usado pelas{" "}
                        </Text>

                        {/* renovation footer text section */}
                        <Text as="p" className="ml-[5px] !text-[13.89px] md:ml-0">
                          crianças
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* footer section */}
              <div className="mb-[104px] flex flex-col items-center gap-[13px] bg-indigo-A400 p-[22px] sm:p-5">
                {/* footer description section */}
                <Text
                  size="lg"
                  as="p"
                  className="w-[85%] text-center !font-dmsans leading-4 !text-white-A700 md:w-full"
                >
                  <>
                    O Infra-alerta, é um sistema desenvolvido para funcionar em parceria com a prefeitura de Sorocaba.
                    <br />
                    <br />
                    Cabe ao usuário apenas acessar nossos serviços de apoio e relatar os problemas encontrados na região
                    de Sorocaba, sejam <br />
                    <br />
                    eles: buracos na via, árvores com risco de queda, grama alta, parques e praças em mal estado de
                    manutenção e entre outros...
                  </>
                </Text>

                {/* footer copyright section */}
                <Text size="s" as="p" className="text-center !font-dmsans !text-white-A700">
                  © Infra-alerta 2024, Serviço Municipal de Sorocaba
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Background;