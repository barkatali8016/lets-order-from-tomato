import "./Tab.css";
type TabType = {
  illustrationImage: string;
  illustrationText: string;
  selectedTab: string;
  onClickSetActiveTab: (illustrationText: string) => void;
};
export default function Tab({
  illustrationImage,
  illustrationText,
  selectedTab,
  onClickSetActiveTab,
}: TabType) {
  return (
    <div
      className={selectedTab === illustrationText ? `tab active` : "tab"}
      onClick={() => {
        onClickSetActiveTab(illustrationText);
      }}
    >
      <div className="illustration">
        <img
          src={illustrationImage}
          alt="illustration-image"
          className="illustration-image"
        />
      </div>
      <h2 className="illustration-text">{illustrationText}</h2>
    </div>
  );
}
