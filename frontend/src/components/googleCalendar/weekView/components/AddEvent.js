import React, { useState,Fragment } from 'react';
import {Input, DatePicker, Select, Checkbox, Row, Col   } from 'antd';
import moment from 'moment';
import {inputStyles} from '../styles';
const {RangePicker} = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

function AddEvent (props) {
  const [onInputCheck, setOnInputCheck] = useState('')

  const onChange = e => {
    console.log('Change:', e.target.value);
  };
  function onSelect(value) {
    console.log(`selected ${value}`);
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  
  function onCheck(values) {
    const valuesNew = values.filter((v) => v !== onInputCheck);
    const value = valuesNew.length ? valuesNew[0] : '';
    setOnInputCheck(value)
    console.log('checked = ', values);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  console.log('onInputCheck = ', onInputCheck);

  const options = [
    { label: 'Reunião', value: 'Reunião' },
    { label: 'Projeto', value: 'Projeto' }
  ];

  return (
    <React.Fragment>
      <h1>Adicionar Tarefa</h1>
      <Input
        type="text"
        placeholder="Título"
        value={props.title}
        style={inputStyles}
        size="large"
        autoFocus={true}
        onChange={props.onTitleChange}
      />
       <TextArea 
       showcount="true" 
       placeholder="Descrição"
       size="large"
       maxLength={100} 
       style={{ height: 120 }} onChange={onChange} />
       
       <p style={{ margin: "0"}}>Selecione a data:</p>
      <RangePicker
        style={{width: '100%'}}
        value={[moment (props.start), moment (props.end)]}
        onChange={props.onTimeChange}
        showTime={{
          format: 'HH:mm',
         
          defaultValue: [moment (props.start), moment (props.end)],
        }}
        format="DD-MM-YYYY HH:mm:ss"
      />
      <p style={{ margin: "0"}}>Selecione a Tarefa:</p>
      <Checkbox.Group options={options} value={[onInputCheck]} onChange={onCheck} />
      {onInputCheck != ""?(
        <Fragment>
        {onInputCheck == "Projeto"?(
        <Fragment>
        <p style={{ margin: "0"}}>Selecione a Projeto:</p>
        <Select
        style={{ width: 120 }} 
          showSearch
          optionFilterProp="children"
          onChange={onSelect}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
        </Select>
        </Fragment>):
        <Fragment>
          <p style={{ margin: "0"}}>Selecione os participantes:</p>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            onChange={handleChange}
            optionLabelProp="label"
          >
            <Option value="Teste01" label="Teste01">
              <div className="demo-option-label-item">
                Teste 01
              </div>
            </Option>
            <Option value="Teste02" label="Teste02">
              <div className="demo-option-label-item">
               Teste 02
              </div>
            </Option>
            <Option value="Teste03" label="Teste03">
              <div className="demo-option-label-item">
                Teste 03
              </div>
            </Option>
            <Option value="Teste04" label="Teste04">
              <div className="demo-option-label-item">
                Teste 04
              </div>
            </Option>
          </Select>
        </Fragment>}
        </Fragment>
        ):null}
    </React.Fragment>
  );
}

export default AddEvent;
