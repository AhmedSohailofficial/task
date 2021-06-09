import { data } from "./../Data/index";
import "./display.css";
function Display({ value ,check}) {
  console.log(check);
  console.log(value)
  console.log(data)
  return (data.map((p) => (
    // eslint-disable-next-line eqeqeq
    value ==p.id ?
   
    <div className="flex flex-row">
    <div>
      <h6>Batch Processed at {p.batchprocessed}</h6>
      <h4>
        Created at {p.created_at} by {p.created_by.first_name}{" "}
        {p.created_by.last_name}.It will end at {p.endAt} by the frequency of{" "}
        {p.frequency},{p.name} last executed at {p.lastExecuteAt} and next
        will be executed {p.nextExecuteAt}
      </h4>
    </div>
    <div>
      <div>
        <h1>Pipeline data</h1>
      </div>
      {p.pipeline.map((pip) => (
        <li>
          {pip.load_action} {pip.load_status} {pip.pipeline_name}
        </li>
      ))}
    </div>
    <div>
      <h1>Source==</h1>
      <h4>
        {" "}
        Name: {p.source.name} , Start at : {p.startAt} , Status: {p.status}
      </h4>
    </div>
    <div>
      <h1>Target</h1>
      <h5>
        Target id:{p.target.id}, Name:{p.target.name},Updated at:{" "}
        {p.updated_at}
      </h5>
    </div>
  </div>

   
  :null

  ))
  )
}

export default Display;
