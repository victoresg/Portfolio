import { AboutContainer, RowContainer, FirstColumn, SecondtColumn, JobContainer } from './styles';

export default function About() {
  return(
    <AboutContainer>
      <RowContainer>
        <FirstColumn>
          <div>
            <h6>Aqui estão algumas das tecnologias com as quais tenho trabalhado recentemente:</h6>
            <p>VueJs, NuxtJs, Vuetify, ReactJs, JavaScript, TypeScript, CSS, HTML, SASS, STYLUS, Tailwind, Bootstrap</p>
          </div>

          <div>
            <h6>Considerações:</h6>
            <p>
              ReactJs e Styled Components são tecnologias que venho estudando para projetos particulares. 
              É importante ressaltar que tecnologias como HTML5 e CSS3 por exemplo ao meu ver são como ler e escrever para um dev Front-End.  
            </p>
          </div>
        </FirstColumn>

        <SecondtColumn>
          <div>
            <h6>Experiências profissionais:</h6>
            <p>Em minha jornada como DEV minhas principais realizações foram dentro da startup em que hoje trabalho</p>

            <details>
              <summary>Seedz</summary>
              <p>
                Aplicação desenvolvida utilizando NuxtJs, SASS e Bootstrap
              </p>
            </details>

            <details>
              <summary>Seedz Force</summary>
              <p>
                Aplicação desenvolvida utilizando VueJs, SASS e Bootstrap
              </p>
            </details>

            <details>
              <summary>Seedz Admin</summary>
              <p>
                Aplicação desenvolvida utilizando VueJs, Vuetify, STYLUS, Bootstrap e TypeScript
              </p>
            </details>
          </div>
        </SecondtColumn>
      </RowContainer>
      
      <JobContainer>
        <h3>
          _________________________
        </h3>
      </JobContainer>
    </AboutContainer>
  )
}