const HomeTransactions = () => {
  return (
    <section id="transactions" className="transactions">
      <div className="container">
        <div className="row">
          <div className="feature__block text-slate col-12 col-lg-5 mt-5 mr-lg-5">
            <p className="mb-4 heading-big">How ShieldDao Works</p>
            <div className="feature__intro">
              <h3 className="text-slate-dark heading-bigger mb-4">
                ShieldDao is built as a community-driven blockchain token
              </h3>
            </div>
            <p className="mb-sm-4 mb-md-5">
              You can trust us for any kind of services and some of the world
              class companies have also trusted us.
            </p>
            <button
              type="button"
              className="btn text-white btn-larger pink-btn font-weight-bold rounded-pill"
            >
              <span className="btn-center-text">Get Docs</span>
            </button>
          </div>
          <div className="feature__description col-12 col-lg-6 mt-5 mt-lg-0 ml-lg-5">
            <div className="row align-items-center">
              <div className="col-6">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5NzlmZWZ9LmNscy0ze2ZpbGw6IzZhNTJmZH0uY2xzLTR7ZmlsbDojMTRlM2JhfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTguNzkgMjAuMTVhMS40NSAxLjQ1IDAgMCAxLTEtLjQzTDExIDEyLjkzYTEuNDYgMS40NiAwIDAgMSAyLTIuMDdsNi43OSA2Ljc5YTEuNDcgMS40NyAwIDAgMSAwIDIuMDcgMS40MyAxLjQzIDAgMCAxLTEgLjQzeiIvPjxwYXRoIGQ9Ik0xNi4yMSAyNi4zN0g3LjMyYTEuNDcgMS40NyAwIDAgMSAwLTIuOTNoOC44OWExLjQ3IDEuNDcgMCAxIDEgMCAyLjkzem0yMy45MiAxMC4zNmExLjQ4IDEuNDggMCAwIDEtLjkxLS4zMmwtNy41LTZhMS40NyAxLjQ3IDAgMSAxIDEuODMtMi4yOWw3LjUgNmExLjQ3IDEuNDcgMCAwIDEtLjkyIDIuNjF6TTI1IDE3LjU4YTEuNDYgMS40NiAwIDAgMS0xLjQ2LTEuNDdWNy4zMmExLjQ2IDEuNDYgMCAwIDEgMi45MiAwdjguNzlBMS40NiAxLjQ2IDAgMCAxIDI1IDE3LjU4eiIgZmlsbD0iIzQwZjRkMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMxLjIxIDIwLjE1YTEuNDYgMS40NiAwIDAgMS0xLTIuNTFsNy4zMS03LjIyYTEuNDcgMS40NyAwIDEgMSAyLjA2IDIuMDlsLTcuMzIgNy4yMmExLjQ0IDEuNDQgMCAwIDEtMSAuNDJ6TTI1IDQxLjIxYTEuNDYgMS40NiAwIDAgMS0xLjQ2LTEuNDZ2LTYuMDZhMS40NiAxLjQ2IDAgMCAxIDIuOTIgMHY2LjA2QTEuNDYgMS40NiAwIDAgMSAyNSA0MS4yMXoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNSAzNS4xNkExMC4yNiAxMC4yNiAwIDEgMSAzNS4yNSAyNC45IDEwLjI3IDEwLjI3IDAgMCAxIDI1IDM1LjE2em0wLTE3LjU4YTcuMzMgNy4zMyAwIDEgMCA3LjMyIDcuMzJBNy4zMiA3LjMyIDAgMCAwIDI1IDE3LjU4eiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTI1IDguNzlhNC40IDQuNCAwIDEgMSA0LjM5LTQuNEE0LjQgNC40IDAgMCAxIDI1IDguNzl6bTAtNS44NmExLjQ3IDEuNDcgMCAxIDAgMS40NiAxLjQ2QTEuNDYgMS40NiAwIDAgMCAyNSAyLjkzeiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTguODkgMTQuNjVhNS44NiA1Ljg2IDAgMSAxIDUuODYtNS44NiA1Ljg3IDUuODcgMCAwIDEtNS44NiA1Ljg2em0wLTguNzlhMi45MyAyLjkzIDAgMSAwIDIuOTMgMi45MyAyLjkzIDIuOTMgMCAwIDAtMi45My0yLjkzem0zMy43OSA4Ljc5QTcuMzMgNy4zMyAwIDEgMSA1MCA3LjMyYTcuMzQgNy4zNCAwIDAgMS03LjMyIDcuMzN6bTAtMTEuNzJhNC40IDQuNCAwIDEgMCA0LjM5IDQuMzkgNC40IDQuNCAwIDAgMC00LjM5LTQuMzl6Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNC4zOSAyOS4zYTQuNCA0LjQgMCAxIDEgNC40LTQuNCA0LjQgNC40IDAgMCAxLTQuNCA0LjR6bTAtNS44NmExLjQ3IDEuNDcgMCAxIDAgMS40NyAxLjQ2IDEuNDYgMS40NiAwIDAgMC0xLjQ3LTEuNDZ6bTM4LjI5IDE3LjY3YTQuNCA0LjQgMCAwIDEtNC40LTQuMzkgNC40OSA0LjQ5IDAgMCAxIDEuMjctMy4xMyA0LjI4IDQuMjggMCAwIDEgNi4yNiAwIDQuNTIgNC41MiAwIDAgMSAxLjI2IDMuMTMgNC40IDQuNCAwIDAgMS00LjM5IDQuMzl6bTAtNmExLjU2IDEuNTYgMCAwIDAtMS40NyAxLjU2IDEuNDcgMS40NyAwIDAgMCAyLjkzIDAgMS41NSAxLjU1IDAgMCAwLTEuNDYtMS41NnoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNSA1MGE1Ljg2IDUuODYgMCAxIDEgNS44Ni01Ljg2QTUuODcgNS44NyAwIDAgMSAyNSA1MHptMC04Ljc5YTIuOTMgMi45MyAwIDEgMCAyLjkzIDIuOTNBMi45MyAyLjkzIDAgMCAwIDI1IDQxLjIxeiIvPjwvZz48L2c+PC9zdmc+"
                  alt="Create Payment Address"
                />
                <h4 className="text-slate-dark heading-big fw-500">
                  Create Payment Address
                </h4>
                <p>
                  Provide your payout wallet address and callback URL to PayBear
                  API.
                </p>
              </div>
              <div className="col-6">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTU4LjQzIDczLjQzQTE1IDE1IDAgMCAxIDQ3LjgyIDY5TDQuMzkgMjUuNjFBMTUgMTUgMCAwIDEgMjUuNiA0LjRMNjkgNDcuODJhMTUgMTUgMCAwIDEtMTAuNiAyNS42MXpNMTg2IDIwMWExNSAxNSAwIDAgMS0xMC42MS00LjM5bC00Mi43Mi00Mi43M2ExNSAxNSAwIDEgMSAyMS4yMi0yMS4yMWw0Mi43MSA0Mi43MkExNSAxNSAwIDAgMSAxODYgMjAxek00NTMuNTcgNzMuNDNBMTUgMTUgMCAwIDEgNDQzIDQ3LjgyTDQ4Ni4zOSA0LjRhMTUgMTUgMCAwIDEgMjEuMjEgMjEuMjFMNDY0LjE4IDY5YTE1IDE1IDAgMCAxLTEwLjYxIDQuNHpNMzI2IDIwMWExNSAxNSAwIDAgMS0xMC42MS0yNS42MWw0Mi43Mi00Mi43MmExNSAxNSAwIDEgMSAyMS4yMiAyMS4yMWwtNDIuNzIgNDIuNzNBMTUgMTUgMCAwIDEgMzI2IDIwMXpNMTUgNTEyYTE1IDE1IDAgMCAxLTEwLjYxLTI1LjYxTDQ3LjgyIDQ0M0ExNSAxNSAwIDEgMSA2OSA0NjQuMThsLTQzLjQgNDMuNDNBMTQuOTEgMTQuOTEgMCAwIDEgMTUgNTEyem0xMjguMjgtMTI4LjI4YTE1IDE1IDAgMCAxLTEwLjYxLTI1LjYxbDQyLjcyLTQyLjcyYTE1IDE1IDAgMCAxIDIxLjIyIDIxLjIybC00Mi43MiA0Mi43MmExNSAxNSAwIDAgMS0xMC42MSA0LjM5ek00OTcgNTEyYTE1IDE1IDAgMCAxLTEwLjYxLTQuMzlMNDQzIDQ2NC4xOEExNSAxNSAwIDAgMSA0NjQuMTggNDQzbDQzLjQyIDQzLjQzQTE1IDE1IDAgMCAxIDQ5NyA1MTJ6TTM2OC43MiAzODMuNzJhMTUgMTUgMCAwIDEtMTAuNjEtNC4zOWwtNDIuNzItNDIuNzJhMTUgMTUgMCAwIDEgMjEuMjItMjEuMjJsNDIuNzIgNDIuNzJhMTUgMTUgMCAwIDEtMTAuNjEgMjUuNjF6IiBmaWxsPSIjNDBmNGQyIi8+PHBhdGggZD0iTTM2MSAxOTUuNzN2LS40NGMwLS4zOS0uMDUtLjc4LS4xLTEuMTd2LS4xNHEtLjA5LS42LS4yMS0xLjE3YzAtLjExIDAtLjIxLS4wNy0uMzFhMTIuNDEgMTIuNDEgMCAwIDAtLjM1LTEuMjMuMDguMDggMCAwIDAgMC0uMDVjLS4xMy0uMzktLjI4LS43Ny0uNDQtMS4xNSAwLS4wOS0uMDgtLjE5LS4xMy0uMjktLjE3LS4zNy0uMzUtLjc1LS41NS0xLjExbC0uMTItLjE5Yy0uMTctLjMtLjM2LS41OS0uNTUtLjg4bC0uMjQtLjM0YTEwLjM5IDEwLjM5IDAgMCAwLS43Mi0uOTJsLS4yNS0uMjljLS4yLS4yMy0uNDEtLjQ1LS42My0uNjdsLS4zMS0uM2MtLjI5LS4yNy0uNTktLjUzLS44OS0uNzhhMy41NSAzLjU1IDAgMCAwLS4zMS0uMjNjLS4yNy0uMjEtLjU2LS40MS0uODYtLjYxbC0uMjQtLjE2LS4wOS0uMDZjLS4zNC0uMjEtLjctLjQxLTEuMDYtLjU5bC0uMTEtLjA2LTkwLTQ1YTE1IDE1IDAgMCAwLTEzLjQyIDBsLTkwIDQ1LS4xMS4wNmMtLjM2LjE4LS43Mi4zOC0xLjA3LjU5bC0uMDguMDYtLjI1LjE2Yy0uMjkuMi0uNTguNC0uODYuNjFsLS4zLjIzcS0uNDcuMzgtLjkuNzhsLS4zMS4zYy0uMjIuMjItLjQyLjQ0LS42My42N2wtLjI1LjI5cS0uMzcuNDUtLjcyLjkzbC0uMjMuMzNjLS4xOS4yOS0uMzguNTgtLjU1Ljg4bC0uMTIuMTljLS4yLjM2LS4zOC43NC0uNTYgMS4xMWwtLjEyLjI5Yy0uMTYuMzgtLjMyLjc2LS40NSAxLjE1di4wNWExMi40MSAxMi40MSAwIDAgMC0uMzUgMS4yMyAyLjgyIDIuODIgMCAwIDAtLjA3LjMxYy0uMDguMzgtLjE2Ljc4LS4yMSAxLjE3di4xNGMtLjA1LjM5LS4wOC43OC0uMSAxLjE3VjMxNmExNSAxNSAwIDAgMCA4LjI5IDEzLjQybDkwIDQ1IC4yNy4xMXEuNTQuMjUgMS4xMS40OGwuNDUuMTZjLjM4LjE0Ljc2LjI0IDEuMTUuMzVsLjQ1LjExcS42MS4xNCAxLjIzLjIxbC40LjA3Yy41NCAwIDEuMDkuMDkgMS42NS4wOXMxLjExIDAgMS42NS0uMDlsLjQtLjA3cS42MS0uMDcgMS4yMy0uMjFsLjQ1LS4xMWMuMzktLjExLjc3LS4yMSAxLjE1LS4zNWwuNDUtLjE2cS41Ny0uMjIgMS4xMS0uNDhsLjI3LS4xMSA5MC00NUExNSAxNSAwIDAgMCAzNjEgMzE2VjE5NS43M3ptLTEwNS0yOEwzMTIuNDYgMTk2IDI1NiAyMjQuMjMgMTk5LjU0IDE5NnptLTc1IDUyLjVsNjAgMzB2ODYuNDZsLTYwLTMwem0xNTAgODYuNDZsLTYwIDMwdi04Ni40Mmw2MC0zMHoiIGZpbGw9IiM2YTUyZmQiLz48cGF0aCBkPSJNMTIyLjA3IDE2N2E0NC44NSA0NC44NSAwIDAgMS0zMS44Mi0xMy4xNWwtNDIuNDMtNDIuMzlhNDUgNDUgMCAwIDEgNjMuNjQtNjMuNjRsNDIuNDMgNDIuNDNBNDUgNDUgMCAwIDEgMTIyLjA3IDE2N3pNNzkuNjQgNjQuNjVBMTUgMTUgMCAwIDAgNjkgOTAuMjVsNDIuNDIgNDIuNDJhMTUgMTUgMCAxIDAgMjEuMjEtMjEuMjFMOTAuMjUgNjlhMTUgMTUgMCAwIDAtMTAuNjEtNC4zOHpNMzg5LjkzIDE2N2E0NSA0NSAwIDAgMS0zMS44Mi03Ni43OWw0Mi40My00Mi40M2E0NSA0NSAwIDAgMSA2My42NCA2My42NGwtNDIuNDMgNDIuNDNBNDQuODUgNDQuODUgMCAwIDEgMzg5LjkzIDE2N3ptNDIuNDMtMTAyLjM1QTE1IDE1IDAgMCAwIDQyMS43NSA2OWwtNDIuNDIgNDIuNDNhMTUgMTUgMCAxIDAgMjEuMjEgMjEuMjFMNDQzIDkwLjI1YTE1IDE1IDAgMCAwLTEwLjYxLTI1LjZ6TTc5LjY0IDQ3Ny4zNGE0NSA0NSAwIDAgMS0zMS44Mi03Ni44bDQyLjQzLTQyLjQzYTQ1IDQ1IDAgMCAxIDYzLjY0IDYzLjY0bC00Mi40MyA0Mi40M2E0NC44NyA0NC44NyAwIDAgMS0zMS44MiAxMy4xNnptNDIuNDMtMTAyLjRhMTQuOTIgMTQuOTIgMCAwIDAtMTAuNjEgNC4zOUw2OSA0MjEuNzVBMTUgMTUgMCAxIDAgOTAuMjUgNDQzbDQyLjQyLTQyLjQyYTE1IDE1IDAgMCAwLTEwLjYtMjUuNnptMzEwLjI5IDEwMi40YTQ0Ljg3IDQ0Ljg3IDAgMCAxLTMxLjgyLTEzLjE2bC00Mi40My00Mi40M2E0NSA0NSAwIDAgMSA2My42NC02My42NGw0Mi40MyA0Mi40M2E0NSA0NSAwIDAgMS0zMS44MiA3Ni44em0tNDIuNDMtMTAyLjRhMTUgMTUgMCAwIDAtMTAuNiAyNS42TDQyMS43NSA0NDNBMTUgMTUgMCAxIDAgNDQzIDQyMS43NWwtNDIuNDMtNDIuNDJhMTQuOTQgMTQuOTQgMCAwIDAtMTAuNjEtNC4zOXoiIGZpbGw9IiMxNGUzYmEiLz48L2c+PC9nPjwvc3ZnPg=="
                  alt="Ask for Payment"
                />
                <h4 className="text-slate-dark heading-big fw-500">
                  Ask for Payment
                </h4>
                <p>
                  Show your customer the wallet address as well as the payment
                  amount.
                </p>
              </div>
              <div className="col-6">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTEuMSA1MTIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNDBmNGQyfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzI2IDg1Ljg1Yy04LjM1LTUuMzctMTYuMTMtMTEuMzEtMjAuMzEtMjAuNzZhMS43NyAxLjc3IDAgMCAxLS43Ni0uMzJxLTI5LjQ4IDI5Ljg1LTU5IDU5LjdhMTcuODEgMTcuODEgMCAwIDAtNS4zNCAxMy40N2MuMTQgOC42NiAwIDE3LjMyLS4wNyAyNmwtLjExIDMzLjUuMzkgMy41N3YxOGMtLjA1IDIuMzMtLjIzIDQuNjYtLjE0IDcgLjMyIDguNTYgNi43NCAxNSAxNC45MiAxNXMxNC42Ny02LjM1IDE1LTE0LjljLjE3LTQuMzIuMTItOC42Ni4xNy0xM3EtLjE0LTEwLjUtLjI2LTIxIC4xNy02LjIzLjM1LTEyLjQ0Yy0uMTQtMS44OC0uMjctMy43NS0uNC01LjYzLjA2LTkgLjI4LTE4IC4xLTI2LjkxYTEwLjQxIDEwLjQxIDAgMCAxIDMuMzEtOC4yOWMxNy40OS0xNy42MSAzNC44LTM1LjMzIDUyLjE1LTUyLjk5em0tMTE1LjEzIDYzLjc3bC0uMzktNS42My4wNi01Ni4zMWMtNi41MyAxLjQ0LTEzLjA4IDIuNy0xOS44MyAyLjI0YTE5LjQ0IDE5LjQ0IDAgMCAxLTQuNyA2LjQ2IDE5LjQ0IDE5LjQ0IDAgMCAwIDQuNy02LjQ2IDYgNiAwIDAgMC0uMjItLjgzYy0zLjM4LjQ5LTYuNDYtMS05LjcxLTEuNGwuMDYgMTIuMzItLjM5IDQ5LjU1LjMzIDIxLjQzLS4yNSA0djguMDhsLjMgNS45MmMtLjA2IDExLjY2LS4xNyAyMy4zMi0uMTcgMzUgMCAxMC4xNiA2LjA1IDE2Ljk1IDE1IDE3czE1LTYuNzkgMTUtMTYuOXEuMS0yMC40OS4xNC00MS0uMTQtMTAuNTEtLjI2LTIxIC4xNy02LjI2LjMzLTEyLjQ3em0tMjYuMzMtNTJhMjQuODEgMjQuODEgMCAwIDEtMi4xMSAxLjQ4IDI0LjgxIDI0LjgxIDAgMCAwIDIuMTEtMS40OHoiLz48cGF0aCBkPSJNMjQwLjQzIDE5Ny40MnEuMDYtMTYuNzUuMTEtMzMuNWwtMjkuNjctMTQuMy0uMzQgMTIuNDRxLjE0IDEwLjUxLjI2IDIxek0xNjUuNjQgMTkwbDE0LjktNi44NnYtOC4wOGMuMDgtMS4zNC4xNi0yLjY4LjI1LTRsLS4zMy0yMS40My0yOS42NyAxNC4zNnEuMDYgMTYuNzQuMTEgMzMuNWExMTMuMzUgMTEzLjM1IDAgMCAwIDE0Ljc0LTcuNDl6IiBmaWxsPSIjNzE3YmRiIi8+PHBhdGggZD0iTTM2MC41MSAzNzNWMjY0Yy4wNi0xMC4zMy4yMy0yMC42Ni4xMi0zMWExMy41NCAxMy41NCAwIDAgMC03LjMyLTEyLjI4Yy01LjA4LTIuNzktMTAuNDEtNS4xMy0xNS42My03LjY3YTQuNTIgNC41MiAwIDAgMS0uMTYuODYgNC41MiA0LjUyIDAgMCAwIC4xNi0uODYgNjIuNjcgNjIuNjcgMCAwIDAtMTItNmMtMTgtOS41OC0zNi4zNC0xOC42My01NC43Ny0yNy40MWwtLjM1IDEyLjQ0LjI2IDIxIDMzLjcyIDE2LjQyYTcuMzYgNy4zNiAwIDAgMSAxLjYzLTIuNTEgNy4zNiA3LjM2IDAgMCAwLTEuNjMgMi41MWw3LjI2IDQuMDUtMjkuMjQgMTQuODlhNC42OCA0LjY4IDAgMCAxIDAgLjkyIDQuNjggNC42OCAwIDAgMCAwLS45MmMtMi44MiAxLjM2LTUuNjYgMi42OS04LjQ2IDQuMDhxLTM3LjE1IDE4LjU3LTc0LjI3IDM3LjIzYy0zIDEuNTEtNS4zNyAxLjYtOC4zMSAwLTQuNDktMi40Ni05LjIxLTQuNDktMTMuODQtNi42OS00LjE4LTIuMy04LjA1LTUuMzEtMTMtNS45MWExNC4xNSAxNC4xNSAwIDAgMC0yLjU5LTIuMTZxLTIyLjE4LTExLTQ0LjQyLTIxLjkzYTYxLjczIDYxLjczIDAgMCAwLTEyLTZsLTI2LjM2LTEzLjcgNDEuMjMtMjAuMjdxMC0xNi43Ni0uMTEtMzMuNWwtMzkuOTQgMjBjLTEzLjk1IDYuODktMjcuOTUgMTMuNjctNDEuODIgMjAuNzEtNS4yOCAyLjY4LTggNy4zNS04IDEzLjM1IDAgNS4xMy4xMSAxMC4yNy4xNiAxNS40djE2MmMuMjEgNS43Mi0xLjQ4IDExLjYyIDEuNjIgMTcuMDcuNzQgMy4zNiAzLjE0IDUuNDggNiA2LjkgMTMuMzggNi43NSAyNi44NCAxMy4zNSA0MC4yOCAyMHE4LjUyLTguNzYgMTctMTcuNS04LjUzIDguNzMtMTcgMTcuNWwxMi44IDYuNTVMMTM4LjY3IDQ4NWwxMi44IDYuNTRhNyA3IDAgMCAxIC4xNS0uNjkgNyA3IDAgMCAwLS4xNS42OWMxMS40NyA1LjggMjMgMTEuNTYgMzQuMzkgMTcuNDYgMS4xNC41OSAzLjc3LjMxIDIuOCAzaDE0Yy0xLjU1LTIgLjcyLTIgMS40OC0yLjQxIDMuNDUtMiA3LTMuNzcgMTAuNTEtNS42MyAxMC4yMy00LjUzIDIwLjE5LTkuNiAzMC0xNSA0Ljc3LTIuMjkgOS41OC00LjUyIDE0LjMyLTYuODhsOTAuOS00NS4zNmM2LjQ4LTMuMjEgMTAuNzUtNy44IDEwLjc1LTE1LjM1LjAzLTE2LjExLS4wNi0zMi4yMy0uMTEtNDguMzd6TTE4MC43IDQ2OC44N2MuMTcgMy4zMy0uOTIgMy43MS0zLjU3IDIuMTJhMzYuNTggMzYuNTggMCAwIDAtNC40OC0yYy0yLjI1IDIuNjMtNC42NSA1LjEzLTcuMTMgNy41MyAyLjQ4LTIuNCA0Ljg4LTQuOSA3LjEzLTcuNTNhOTIuNDUgOTIuNDUgMCAwIDAtMTQtN2wtNDYuODUtMjMuNTFMOTguNjYgNDMyYy0xMC43NS01LjQ3LTIxLjQtMTEuMTYtMzIuMzEtMTYuMjktNC4zLTItNi43LTQuMzEtNS43Mi05LjI0YTE1LjUxIDE1LjUxIDAgMCAwLS4xMi0zLjQ2VjI1Ny44N2wyNCAxMS42NEw5Ny42NiAyNzZsNDYuODQgMjMuNTEgMTMuMTYgNi40OWM2LjMzIDMuMjcgMTIuNTYgNi43MyAxOSA5LjcyIDMgMS4zOSA0LjE0IDMgNC4wNyA2LjM1LS4yMSA5LjY0IDAgMTkuMjguMDcgMjguOTJ2MTA4Yy0uMDIgMy4zMS0uMjYgNi42MS0uMSA5Ljg4em0xMzYuNDItNDkuMjRjLTUuMDUgMS44MS05LjY1IDQuOS0xNC40NSA3LjQxbC0zNi45MyAxOC4yN2E0LjggNC44IDAgMCAxLS4zMyAxLjc5IDQuOCA0LjggMCAwIDAgLjMzLTEuNzljLTEuMTguNTctMi4zNiAxLjEzLTMuNTMgMS43MWwtNTEuNyAyNS43MVYzMjRjLS45LTUuMTMgMS43Ni03LjcgNi4yOS05LjMxIDIuNDItLjg2IDQuNTktMi40NiA2Ljg3LTMuNzJsMzguOTMtMTkuMjcgNjguMjQtMzMuOVYzOTljMi42MyAxMS42OS0zLjg0IDE3LjA2LTEzLjcyIDIwLjYzeiIgZmlsbD0iIzZhNTJmZCIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1MC40OCAyMDRjLjE0LTIuMTkuMjctNC4zOC40MS02LjU3cS0uMDYtMTYuNzUtLjExLTMzLjUtLjIxLTE1LS40My0yOS45Yy0uNTgtNS44OC00LjU4LTkuNDctOC43MS0xM3EtMTYuODctMTgtMzQuNy0zNS4xNmE4Ni42MiA4Ni42MiAwIDAgMC0xMC4wOS0xMC4yNkw4Ni40MSA2NC43NmE1Ny41IDU3LjUgMCAwIDEtMjEuMDkgMjEuMDlsMTEuMzEgMTEuMjRhODEuMjIgODEuMjIgMCAwIDAgOS45NCAxMC4xMnExNy4wNiAxNy4zOSAzNC4xIDM0Ljc5LjA5IDkgLjE3IDE4LS4yMSA5LjgtLjQxIDE5LjU4LjA2IDE2Ljc1LjExIDMzLjVjLjczIDUuNjItMSAxMS4zOSAxLjA2IDE2LjkzIDEuMzcgNS44NSA1LjEyIDkuMTkgMTAuOTIgMTAuMzcgMTEgMiAxOC40OC01LjIgMTgtMTcuMzh6Ii8+PHBhdGggZD0iTTQ1LjQ0IDBhNDUuNDUgNDUuNDUgMCAxIDAgNDUuNDUgNDUuNDRBNDUuNDUgNDUuNDUgMCAwIDAgNDUuNDQgMHptMCA2MS4wOGExNS42NCAxNS42NCAwIDEgMSAxNS42NC0xNS42NCAxNS42MyAxNS42MyAwIDAgMS0xNS42NCAxNS42NHpNMTk1LjY2IDBhNDUuNDUgNDUuNDUgMCAxIDAgNDUuNDUgNDUuNDRBNDUuNDUgNDUuNDUgMCAwIDAgMTk1LjY2IDB6bTAgNjEuMDhhMTUuNjQgMTUuNjQgMCAxIDEgMTUuNjQtMTUuNjQgMTUuNjMgMTUuNjMgMCAwIDEtMTUuNjQgMTUuNjR6TTM0NS42NiAwYTQ1LjQ1IDQ1LjQ1IDAgMSAwIDQ1LjQ0IDQ1LjQ0QTQ1LjQ0IDQ1LjQ0IDAgMCAwIDM0NS42NiAwem0wIDYxLjA4YTE1LjY0IDE1LjY0IDAgMSAxIDE1LjY0LTE1LjY0IDE1LjY0IDE1LjY0IDAgMCAxLTE1LjY0IDE1LjY0em0tNzQuNzkgMjY4LjIxYTI3LjIzIDI3LjIzIDAgMSAwIDI3LjIzIDI3LjIyIDI3LjIyIDI3LjIyIDAgMCAwLTI3LjIzLTI3LjIyem0wIDM2LjU5YTkuMzcgOS4zNyAwIDEgMSA5LjM3LTkuMzcgOS4zNyA5LjM3IDAgMCAxLTkuMzcgOS4zN3ptLTE0Ny4yMS0zNi41OWEyNy4yMyAyNy4yMyAwIDEgMCAyNy4yMyAyNy4yMiAyNy4yMiAyNy4yMiAwIDAgMC0yNy4yMy0yNy4yMnptMCAzNi41OWE5LjM3IDkuMzcgMCAxIDEgOS4zNy05LjM3IDkuMzcgOS4zNyAwIDAgMS05LjM3IDkuMzd6IiBmaWxsPSIjMTRlM2JhIi8+PC9nPjwvZz48L3N2Zz4="
                  alt="Get Paid"
                />
                <h4 className="text-slate-dark heading-big fw-500">Get Paid</h4>
                <p>Payment is sent to the payout wallet immediately.</p>
              </div>
              <div className="col-6">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA0Ni44OCI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGQ9Ik0xNi45NCAzNC41NGwtNCA2YTEuNzQgMS43NCAwIDAgMS0xLjU2LjgzaC0zdi4wOWEzLjc3IDMuNzcgMCAwIDEgLjE0IDIuNDZjMCAuMTItLjA2LjI1LS4wOC4zOGEyNi4xNyAyNi4xNyAwIDAgMCA0LjE1LS4xMiA0IDQgMCAwIDAgMi40MS0xLjUgMjIuMzkgMjIuMzkgMCAwIDAgMS43Ny0yLjYzbDIuODItNC4xN3ptMjQuNDYgOC45M2E0IDQgMCAwIDEgMC0xLjU3IDMuNSAzLjUgMCAwIDAtLjQ5LjM3IDMuNSAzLjUgMCAwIDEgLjQ5LS4zN2wuMTUtLjU4aC0zYTEuNTggMS41OCAwIDAgMS0xLjQtLjczbC0uNTktLjg0YTcuODMgNy44MyAwIDAgMC0uNzktMS4xOGMtLjg0LTEuMzQtMS43Mi0yLjY1LTIuNjItMy45NGwtLjE1LS4xLS43OS40OWExNS4wNiAxNS4wNiAwIDAgMC0xLjc2Ljg2bC40OC42NWMuODcgMS40IDEuNzkgMi43NiAyLjczIDQuMTFhOCA4IDAgMCAwIC44IDEuMTlBNC41MSA0LjUxIDAgMCAwIDM5IDQ0LjI0aDIuNDljLjAzLS4yNC0uMTMtLjQ5LS4wOS0uNzd6TTQxLjUyIDNoLTIuNTlhMy42NiAzLjY2IDAgMCAwLTEuMzYuMTFBMy44IDMuOCAwIDAgMCAzNSA0LjYzYTMzIDMzIDAgMCAwLTIuMTQgMy4yTDMwLjQgMTEuNGwyLjY2IDEuMzRjMS4zMS0yIDIuNjMtMy45MyAzLjkzLTUuOTFBMS43NiAxLjc2IDAgMCAxIDM4LjYzIDZoMi44OWE1LjM2IDUuMzYgMCAwIDEgMC0zem0tMjIuMzEgNy44OHEtMS4zMi0yLjEtMi43NS00LjEyYTcuNzcgNy43NyAwIDAgMC0uNzgtMS4xOCA0LjUgNC41IDAgMCAwLTQuNTItMi41M0g4LjQ3Yy4wNi4yMi4xMS40NS4xNi42N3YuMmMuMjMuNTYgMCAxLjExIDAgMS42N2EuMDcuMDcgMCAwIDAgMCAuMDZsLS4wNy4xM2ExLjYyIDEuNjIgMCAwIDAgMCAuMTloM2ExLjY1IDEuNjUgMCAwIDEgMS40NC44MWMuMi4zLjQxLjU4LjYxLjg3YTguMzUgOC4zNSAwIDAgMCAuOCAxLjJjLjgxIDEuMyAxLjY3IDIuNTcgMi41NSAzLjgyLjE0LjEyLjI3IDAgLjQxIDBsLjc5LS40OWE1LjI0IDUuMjQgMCAwIDAgMS40Ny0uNzV6IiBmaWxsPSIjNDBmNGQyIi8+PHBhdGggZD0iTTM4LjI0IDI5LjI0VjE2LjI1YTEuMzUgMS4zNSAwIDAgMC0uNzMtMS4yNWMtLjY2LS4zNS0xLjM0LS42Ni0yLTFhNS42NiA1LjY2IDAgMCAwLTEuMTgtLjU5bC0xLjI2LS43LTIuNjctMS4zMS0uNzktLjMyYTYuMiA2LjIgMCAwIDAtMS4xOC0uNTljLS45NC0uNDgtMS44Ny0xLTIuODItMS40M2ExLjMyIDEuMzIgMCAwIDAtMS4yMiAwbC0zLjIyIDEuNjMtMS41Ny43MWE1LjI0IDUuMjQgMCAwIDEtMS40Ny43NWwtLjc5LjQ5Yy0uMTQgMC0uMjcuMTUtLjQxIDAgMCAuMi0uMjMuMjItLjM3LjI5bC0zLjg4IDEuOTdhMS41NCAxLjU0IDAgMCAwLS45MyAxLjUzdjE0LjUxYTEuNDUgMS40NSAwIDAgMCAuODEgMS4zNWMuNjcuMzUgMS4zNS42NyAyIDFsMS4yOS42NCAxLjA3LjU5IDIuNjYgMS4zNC44Ny4zNyAxLjI5LjY0Yy44OS40NSAxLjc3LjkyIDIuNjYgMS4zNWExLjI3IDEuMjcgMCAwIDAgMS4xNCAwbDMuNjYtMS44NSAxLjE4LS41MmExNS4wNiAxNS4wNiAwIDAgMSAxLjc4LS44NWwuNzktLjQ5LjEzLjA5YzAtLjIxLjIyLS4yMi4zNS0uMjkgMS4yOC0uNjUgMi41Ni0xLjI5IDMuODUtMS45MmExLjYyIDEuNjIgMCAwIDAgMS0xLjYxYy0uMDQtLjUtLjA0LTEuMDItLjA0LTEuNTR6bS0xMy41Ny0xN2EuNjQuNjQgMCAwIDEgLjY4IDBjLjMzLjE4LjY3LjMzIDEgLjQ5bDEuMjkuNjNjMS41MS44MSAzLjA1IDEuNTcgNC42IDIuMzFsMSAuNWMuMS4wNS4yMy4wOC4xNS4yNGEuODkuODkgMCAwIDAtLjQuMmwtMy44NCAxLjljLTEuMjcuNjMtMi41MyAxLjI1LTMuNzkgMS44OWEuNjIuNjIgMCAwIDEtLjYzIDBjLTEtLjUtMi0xLTIuOTMtMS40NWE2Ljg0IDYuODQgMCAwIDAtMS4xOC0uNTlsLTMuOTUtMmMwLS4xOC4xNy0uMTguMjgtLjIzIDIuNTQtMS4zNCA1LjE0LTIuNjMgNy43Mi0zLjk0ek0xNy44MyAzMS43YTUuODQgNS44NCAwIDAgMC0xLjE3LS41OSAxMy4wOCAxMy4wOCAwIDAgMC0xLjM0LS42OS44Ny44NyAwIDAgMS0uNjQtMWMuMDUtMSAwLTIuMDggMC0zLjEydi03LjYzbDMuODMgMS44OCAxLjI5LjY0Yy45MS40NiAxLjggMSAyLjc0IDEuMzcuNzQuMzIgMS4xNy43MyAxIDEuNTd2MTAuMzFjLS40IDAtLjY1LS4zMi0xLS4zOS0xLjU0LS44Mi0zLjExLTEuNjItNC43MS0yLjM1em04LjYzIDIuODFWMjMuMzVjMC0uNDYuNDYtLjQuNjgtLjYxbDguMTgtNC4wN1YzMGMtLjA2LjE0LS4yMy4xNS0uMzIuMjV6IiBmaWxsPSIjNmE1MmZkIi8+PHBhdGggZD0iTTQuNDYgMGE0LjQ2IDQuNDYgMCAxIDAgNC40NiA0LjQ2QTQuNDYgNC40NiAwIDAgMCA0LjQ2IDB6bTAgNkExLjU0IDEuNTQgMCAxIDEgNiA0LjQ2IDEuNTMgMS41MyAwIDAgMSA0LjQ2IDZ6bTAgMzJhNC40NiA0LjQ2IDAgMSAwIDQuNDYgNC40NkE0LjQ2IDQuNDYgMCAwIDAgNC40NiAzOHptMCA2QTEuNTQgMS41NCAwIDEgMSA2IDQyLjQyIDEuNTMgMS41MyAwIDAgMSA0LjQ2IDQ0ek00NS41NCAwQTQuNDYgNC40NiAwIDEgMCA1MCA0LjQ2IDQuNDYgNC40NiAwIDAgMCA0NS41NCAwem0wIDZhMS41NCAxLjU0IDAgMSAxIDAtMy4wNyAxLjU0IDEuNTQgMCAwIDEgMCAzLjA3em0wIDMyQTQuNDYgNC40NiAwIDEgMCA1MCA0Mi40MiA0LjQ2IDQuNDYgMCAwIDAgNDUuNTQgMzh6bTAgNmExLjU0IDEuNTQgMCAxIDEgMC0zLjA3IDEuNTQgMS41NCAwIDAgMSAwIDMuMDd6IiBmaWxsPSIjMTRlM2JhIi8+PC9nPjwvZz48L3N2Zz4="
                  alt="Get Payment Notification"
                />
                <h4 className="text-slate-dark heading-big fw-500">
                  Get Payment Notification
                </h4>
                <p>
                  Callbacks are sent to the URL you specified. You can process
                  customer order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTransactions;
